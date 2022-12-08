import { useContext, useState } from 'react'
import { GithubContext } from '../context/GithubContext';
import { githubState } from '../reducers/githubReducer';

function UserSearch() {
    const [ text, setText ] = useState<string>('')
    const { users, searchUsers, clearUsers } = useContext<githubState>(GithubContext);
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(text === '') {
            alert('Please enter something')
        } else {
            searchUsers?.(text)
            setText('')
        }
    }

  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-8 ml-[5%] mb-8'>
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