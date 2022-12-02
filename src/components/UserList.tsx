import { useEffect, useState } from 'react'
import UserItem from './UserItem'

function UserList() {
    const [users, setUsers] = useState<Array<object>>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        fetchUsers()
    },)

    const fetchUsers = async () => {
        const res = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
            headers: {
                Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
            }
        })

        const data = await res.json()
        setUsers(data)
        console.log(typeof users)
        console.log(users)
        setIsLoading(false)
    }

    if (!isLoading) {
        return (
            <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
                {users.map((user: any) => (
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
