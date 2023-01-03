import { alertActionRemove, alertActionSet, AlertState } from "../interfaces/IAlertReducer"

export const initialState = {
    alert: {
        message: '',
        type: ''
    }
}

export const alertReducer = (state: AlertState, action: alertActionSet | alertActionRemove): AlertState => {

    switch (action.type) {
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
