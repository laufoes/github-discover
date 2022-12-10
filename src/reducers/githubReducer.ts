export enum githubActionKind {
    GET_USERS = 'GET_USERS',
    SET_LOADING = 'SET_LOADING',
    CLEAR_USERS = 'CLEAR_USERS'
}

interface githubActionUsers { 
    type: githubActionKind.GET_USERS,
    payload: UserData[],
}

interface githubActionLoading {
    type: githubActionKind.SET_LOADING
}

interface githubActionClear {
    type: githubActionKind.CLEAR_USERS
}

export interface UserData {
    login: string,
    avatar_url: string
}

export interface GithubState {
    users: Array<UserData>,
    isLoading: boolean,
    searchUsers?: (text: string) => void,
    clearUsers?: () => void
}

export const initialState = {
    users: [{ login: '', avatar_url: ''}],
    isLoading: false,
}
  
  export const githubReducer = (state: GithubState, action: githubActionUsers | githubActionLoading | githubActionClear): GithubState => {

    switch(action.type) {
        case 'GET_USERS':
            return {
                ...state,
                users: action.payload ,
                isLoading: false,
            }
        case 'SET_LOADING':
            return {
                ...state,
                isLoading: true,
            }
        case 'CLEAR_USERS':
            return {
                ...state,
                users: initialState.users,
                isLoading: false
            }
        default:
            return state
    }
}