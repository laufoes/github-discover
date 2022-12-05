export enum githubActionKind {
    GET_USERS = 'GET_USERS',
    SET_LOADING = 'SET_LOADING'
}

export interface githubActionUsers { 
    type: githubActionKind.GET_USERS,
    payload: UserData[],
}

export interface githubActionLoading {
    type: githubActionKind.SET_LOADING
}

export interface UserData {
    login: string,
    avatar_url: string
}

export interface githubState {
    users: Array<UserData>,
    isLoading: boolean
}

export const initialState = {
    users: [{ login: '', avatar_url: ''}],
    isLoading: true,
}
  
  export const githubReducer = (state: githubState, action: githubActionUsers | githubActionLoading): githubState => {

    switch(action.type) {
        case 'GET_USERS':
            return {
                users: action.payload ,
                isLoading: false,
            }
        case 'SET_LOADING':
            return {
                ...state,
                isLoading: true,
            }
        default:
            return state
    }
}