import { ReactNode, createContext, useReducer } from 'react'
import { alertActionKind, AlertState } from '../interfaces/IAlertReducer'
import { alertReducer, initialState } from '../reducers/AlertReducer'

interface alertContextProps {
    children?: ReactNode,
}

export const AlertContext = createContext<AlertState>(initialState)    
AlertContext.displayName = 'Github'

export const AlertContextProvider = ({ children }: alertContextProps) => {
    const [ state, dispatch ] = useReducer(alertReducer, initialState)

    const setAlert = (message: string, type: string) => {
        dispatch({
            type: alertActionKind.SET_ALERT,
            payload: { message, type }
        })

        setTimeout(() => 
            dispatch({ type: alertActionKind.REMOVE_ALERT }), 3000
        )
    }

    return (
        <AlertContext.Provider value={{ alert: state.alert, setAlert }}>
            { children }
        </AlertContext.Provider>
    )
}