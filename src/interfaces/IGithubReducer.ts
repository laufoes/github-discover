export enum githubActionKind {
    GET_USERS = 'GET_USERS',
    GET_USER = 'GET_USER',
    GET_REPOS = 'GET_REPOS',
    SET_LOADING = 'SET_LOADING',
    CLEAR_USERS = 'CLEAR_USERS'
}

export interface githubActionUsers { 
    type: githubActionKind.GET_USERS,
    payload: UsersData[],
}

export interface githubActionUser {
    type: githubActionKind.GET_USER,
    payload?: UserData,
}

export interface githubActionRepos {
    type: githubActionKind.GET_REPOS,
    payload: RepoData[],
}

export interface githubActionLoading {
    type: githubActionKind.SET_LOADING
}

export interface githubActionClear {
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

export interface RepoData {
    name: string,
    id: number,
    description: string,
    html_url: string,
    forks: number,
    open_issues: number,
    watchers_count: number,
    stargazers_count: number
}

export interface GithubState {
    users: Array<UsersData>,
    user?: UserData,
    repos: Array<RepoData>,
    isLoading: boolean,
    dispatch: any,
    getUserRepos?: (login: string) => void,
    searchUsers?: (text: string) => void,
    clearUsers?: () => void,
    getUser?: (login: string) => void
}