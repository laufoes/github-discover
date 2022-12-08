
import { useContext } from 'react'
import { GithubContext } from '../context/GithubContext';
import { githubState } from '../reducers/githubReducer';
import UserItem from './UserItem'

function UserList() {
    const { users, isLoading } = useContext<githubState>(GithubContext);
   
    if (!isLoading) {
        return (
            <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
                { users.map((user: any) => (
                    <UserItem key={user.id} user={user} />
                )) }
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
