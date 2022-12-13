import { useContext } from 'react'
import { GithubContext } from '../context/GithubContext';
import { GithubState } from '../interfaces/IGithubReducer';
import Loading from './Loading';
import UserItem from './UserItem'

function UserList() {
    const { users, isLoading } = useContext<GithubState>(GithubContext);
   
    return (
        <>
         {isLoading ? 
            <Loading /> :
            <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
                { users.length !== 1 ? users.map((user: any) => (
                    <UserItem key={user.id} user={user} />
                )) : ''}
            </div>
        }
        </>
    )
}

export default UserList