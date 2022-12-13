import { ReactNode, createContext, useReducer } from 'react'
import { GithubState } from '../interfaces/IGithubReducer'
import { githubReducer, initialState } from '../reducers/githubReducer'

interface githubContextProps {
    children?: ReactNode,
}

export const GithubContext = createContext<GithubState>(initialState)    
GithubContext.displayName = 'Github'

export const GithubContextProvider = ({ children }: githubContextProps) => {
    const [ state, dispatch ] = useReducer(githubReducer, initialState)

    return (
        <GithubContext.Provider value={{ 
            ...state,
            dispatch,
            }}>
            { children }
        </GithubContext.Provider>
    )
}