import { ReactNode, createContext, useReducer } from 'react'
import { githubActionKind, githubReducer, GithubState, initialState, UserData } from '../reducers/GithubReducer'

interface githubContextProps {
    children?: ReactNode,
}

export const GithubContext = createContext<GithubState>(initialState)    
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


    const getUser = async (login : string) => {
        dispatch({
            type: githubActionKind.SET_LOADING,
        })

        const res = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users/${login}`, {
            headers: {
                Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
            }
        })

        const data  = await res.json()
        const userData: UserData = { 
            name: data.name,
            type: data.type,
            login: data.login, 
            id: data.id, 
            avatar_url: data.avatar_url,
            location: data.location,
            bio: data.bio,
            blog: data.blog,
            twitter_username: data.twitter_username,
            html_url: data.html_url,
            followers: data.followers,
            following: data.following,
            public_repos: data.public_repos,
            public_gists: data.public_gists,
            hireable: data.hireable,             
        }
        console.log(userData)
        dispatch({
            type: githubActionKind.GET_USER,
            payload: userData,
        })
    }

    const clearUsers = () => {
        dispatch({
            type: githubActionKind.CLEAR_USERS,
        })
    }

    return (
        <GithubContext.Provider value={{ users: state.users, isLoading: state.isLoading, user: state.user, getUser, searchUsers, clearUsers }}>
            { children }
        </GithubContext.Provider>
    )
}