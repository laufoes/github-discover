export enum alertActionKind {
    SET_ALERT = 'SET_ALERT',
    REMOVE_ALERT = 'REMOVE_ALERT',
}

interface alertActionSet { 
    type: alertActionKind.SET_ALERT,
    payload: IAlert,
}

interface alertActionRemove {
    type: alertActionKind.REMOVE_ALERT,
}

export interface IAlert {
    message: string,
    type: string
}

export interface AlertState {
    alert: IAlert,
    setAlert?: (message: string, type: string) => void
}

export const initialState = {
    alert: {
        message: '',
        type: ''
    }
}
  
  export const alertReducer = (state: AlertState, action: alertActionSet | alertActionRemove): AlertState => {

    switch(action.type) {
        case 'SET_ALERT':
            return {
                ...state,
                alert: action.payload
            }
        case 'REMOVE_ALERT':
            return {
                ...state,
                alert: initialState.alert
            }
        default:
            return state
    }
}