import { ReactNode, createContext, useReducer } from 'react'
import { githubActionKind, githubReducer, githubState, initialState } from '../reducers/githubReducer'

interface githubContextProps {
    children?: ReactNode,
}


export const GithubContext = createContext<githubState>(initialState)    
GithubContext.displayName = 'Github'

export const GithubContextProvider = ({ children }: githubContextProps) => {
    const [ state, dispatch ] = useReducer(githubReducer, initialState)

    const searchUsers = async (text : string) => {
        dispatch({
            type: githubActionKind.SET_LOADING,
        })

        const params = new URLSearchParams({
            q: text
        })
        
        const res = await fetch(`${process.env.REACT_APP_GITHUB_URL}/search/users?${params}`, {
            headers: {
                Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
            }
        })

        const { items } = await res.json()
        dispatch({
            type: githubActionKind.GET_USERS,
            payload: items,
        })
    }

    const clearUsers = () => {
        dispatch({
            type: githubActionKind.CLEAR_USERS,
        })
    }

    return (
        <GithubContext.Provider value={{ users: state.users, isLoading: state.isLoading, searchUsers, clearUsers }}>
            { children }
        </GithubContext.Provider>
    )
}