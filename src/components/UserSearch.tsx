import { useContext, useState } from 'react'
import { AlertContext } from '../context/AlertContext';
import { GithubContext } from '../context/GithubContext';
import { AlertState } from '../reducers/AlertReducer';
import { GithubState } from '../reducers/GithubReducer';

function UserSearch() {
    const [ text, setText ] = useState<string>('')
    const { users, searchUsers, clearUsers } = useContext<GithubState>(GithubContext)
    const { setAlert } = useContext<AlertState>(AlertContext)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(text === '') {
            setAlert?.('Please enter something', 'error')
        } else {
            searchUsers?.(text)
            setText('')
        }
    }

  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-8 mb-8'>
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-contol">
                    <div className="relative ">
                        <input 
                            type="text" 
                            placeholder="search" 
                            className="w-full pr-40 bg-gray-200 input input-lg text-black rounded-tr-2xl rounded-br-2xl"
                            value={text}
                            onChange={(e) => setText(e.target.value)} 
                        />
                        <button type="submit" className="absolute top-0 right-0 rounded-lg rounded-l-none w-36 btn btn-lg">Go</button>
                    </div>
                </div>
            </form>
        </div>
        { users.length > 0 ? <div>
            <button className="btn-ghost btn-lg font-bold" onClick={clearUsers}>CLEAR</button>
        </div> : '' }
    </div>
  )
}

export default UserSearch