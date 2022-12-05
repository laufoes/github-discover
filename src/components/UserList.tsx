import { useEffect, useReducer } from 'react'
import { githubActionKind, githubReducer, initialState, UserData } from '../reducers/githubReducer'
import UserItem from './UserItem'

function UserList() {
    const [ state, dispatch ] = useReducer(githubReducer, initialState)

    useEffect(() => {
        fetchUsers()
    })

    const fetchUsers = async () => {
        // commented or else it gets stuck on a loading loop, will alter later
        // dispatch({
        //     type: githubActionKind.SET_LOADING,
        // })
        
        const res = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
            headers: {
                Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
            }
        })

        const data: UserData[] = await res.json()
        dispatch({
            type: githubActionKind.GET_USERS,
            payload: data,
        })
    }

    if (!state.isLoading) {
        return (
            <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
                {state.users.map((user: any) => (
                    <UserItem key={user.id} user={user} />
                ))}
            </div>
        )
    } else {
        return (
            <div className="flex justify-center items-center flex-col">
                <p className="text-2xl pb-4">Loading...</p>
                <progress className="progress progress-neutral-content w-56"></progress>
            </div>
        )
    }
}

export default UserList
