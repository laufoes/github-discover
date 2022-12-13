import { githubActionClear, githubActionLoading, githubActionUserAndRepos, githubActionUsers, GithubState } from "../interfaces/IGithubReducer"

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
    dispatch: '',
    repos: [{ 
        name: '', 
        id: 0,
        description: '', 
        html_url: '', 
        forks: 0, 
        open_issues: 0, 
        watchers_count: 0, 
        stargazers_count: 0 
    }],
    isLoading: false,
}
  
  export const githubReducer = (state: GithubState, action: githubActionUsers | githubActionUserAndRepos | githubActionLoading | githubActionClear ): GithubState => {

    switch(action.type) {
        case 'GET_USERS':
            return {
                ...state,
                users: action.payload ,
                isLoading: false,
            }
        case 'GET_USER_AND_REPOS':
            return {
                ...state,
                user: action.payload.user,
                repos: action.payload.repos,
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