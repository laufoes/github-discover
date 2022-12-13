import axios from 'axios'

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

const github = axios.create({
    baseURL: GITHUB_URL,
    headers: {
        Authorization: `token ${GITHUB_TOKEN}`
    }
})

export const searchUsers = async (text : string) => {
    const params = new URLSearchParams({
        q: text,
    })

    const res = await github.get(`/search/users?${params}`)
    
    return res.data.items
}

export const getUserAndRepos = async (login: string) => {
    const [user, repos] = await Promise.all([
        github.get(`/users/${login}`),
        github.get(`/users/${login}/repos`)
    ]) 

    return { user: user.data, repos: repos.data}
}

// export const getUserRepos = async (login : string) => {
//     const params = new URLSearchParams({
//         sort: 'created',
//         per_page: '10',
//     })
    
//     const res = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users/${login}/repos?${params}`, {
//         headers: {
//             Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
//         }
//     })

//     const data = await res.json()

//     return data
// }


// export const getUser = async (login : string) => {
//     const res = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users/${login}`, {
//         headers: {
//             Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
//         }
//     })

//     const data  = await res.json()
//     const userData: UserData = { 
//         name: data.name,
//         type: data.type,
//         login: data.login, 
//         id: data.id, 
//         avatar_url: data.avatar_url,
//         location: data.location,
//         bio: data.bio,
//         blog: data.blog,
//         twitter_username: data.twitter_username,
//         html_url: data.html_url,
//         followers: data.followers,
//         following: data.following,
//         public_repos: data.public_repos,
//         public_gists: data.public_gists,
//         hireable: data.hireable,             
//     }

//     return userData
// }