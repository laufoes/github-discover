export enum githubActionKind {
    GET_USERS = 'GET_USERS',
    GET_USER = 'GET_USER',
    SET_LOADING = 'SET_LOADING',
    CLEAR_USERS = 'CLEAR_USERS'
}

interface githubActionUsers { 
    type: githubActionKind.GET_USERS,
    payload: UsersData[],
}

interface githubActionUser {
    type: githubActionKind.GET_USER,
    payload?: UserData,
}
interface githubActionLoading {
    type: githubActionKind.SET_LOADING
}

interface githubActionClear {
    type: githubActionKind.CLEAR_USERS
}

export interface UserData {
    name: string,
    type: string,
    login: string, 
    id: number, 
    avatar_url: string,
    location: string,
    bio?: string,
    blog?: string,
    twitter_username?: string,
    html_url: string,
    followers: number,
    following: number,
    public_repos: number,
    public_gists: number,
    hireable: boolean,         
}

export interface UsersData {
    login: string,
    avatar_url: string
}

export interface GithubState {
    users: Array<UsersData>,
    user?: UserData,
    isLoading: boolean,
    searchUsers?: (text: string) => void,
    clearUsers?: () => void,
    getUser?: (login: string) => void
}

export const initialState = {
    users: [{ login: '', avatar_url: ''}],
    user: {
        name: '',
            type: '',
            login: '', 
            id: 0, 
            avatar_url: '',
            location: '',
            bio: '',
            blog: '',
            twitter_username: '',
            html_url: '',
            followers: 0,
            following: 0,
            public_repos: 0,
            public_gists: 0,
            hireable: true,   
    },
    isLoading: false,
}
  
  export const githubReducer = (state: GithubState, action: githubActionUsers | githubActionUser | githubActionLoading | githubActionClear ): GithubState => {

    switch(action.type) {
        case 'GET_USERS':
            return {
                ...state,
                users: action.payload ,
                isLoading: false,
            }
        case 'GET_USER':
            return {
                ...state,
                user: action.payload,
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