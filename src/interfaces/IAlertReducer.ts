export enum alertActionKind {
    SET_ALERT = 'SET_ALERT',
    REMOVE_ALERT = 'REMOVE_ALERT',
}

export interface alertActionSet { 
    type: alertActionKind.SET_ALERT,
    payload: IAlert,
}

export interface alertActionRemove {
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