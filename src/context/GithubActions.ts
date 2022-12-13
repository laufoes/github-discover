import { UserData } from "../interfaces/IGithubReducer"

export const searchUsers = async (text : string) => {
    const params = new URLSearchParams({
        q: text,
    })
    
    const res = await fetch(`${process.env.REACT_APP_GITHUB_URL}/search/users?${params}`, {
        headers: {
            Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
        }
    })

    const { items } = await res.json()
    
    return items
}

export const getUserRepos = async (login : string) => {
    const params = new URLSearchParams({
        sort: 'created',
        per_page: '10',
    })
    
    const res = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users/${login}/repos?${params}`, {
        headers: {
            Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
        }
    })

    const data = await res.json()

    return data
}


export const getUser = async (login : string) => {
    const res = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users/${login}`, {
        headers: {
            Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
        }
    })

    const data  = await res.json()
    const userData: UserData = { 
        name: data.name,
        type: data.type,
        login: data.login, 
        id: data.id, 
        avatar_url: data.avatar_url,
        location: data.location,
        bio: data.bio,
        blog: data.blog,
        twitter_username: data.twitter_username,
        html_url: data.html_url,
        followers: data.followers,
        following: data.following,
        public_repos: data.public_repos,
        public_gists: data.public_gists,
        hireable: data.hireable,             
    }

    return userData
}