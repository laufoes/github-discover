import { useEffect, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import PageStructure from '../components/PageStructure'
import { GithubContext } from '../context/GithubContext'
import { FaCodepen, FaUsers, FaStore, FaUserFriends} from 'react-icons/fa'
import Loading from '../components/Loading'
import RepoList from '../components/RepoList'
import { GithubState } from '../interfaces/IGithubReducer'
import { getUser, getUserRepos } from '../context/GithubActions'


function User() {
    const { user, repos, isLoading, dispatch } = useContext<GithubState>(GithubContext)
    let { login } = useParams()

    useEffect(() => {
        if(login) {
            dispatch({ type: 'SET_LOADING' })

            const getUserData = async (login: string) => {
                const userInfo = await getUser?.(login)
                dispatch({ type: 'GET_USER', payload: userInfo})
            }

            const getUserRepositories = async (login: string) => {
                const userRepoData = await getUserRepos?.(login)
                dispatch({ type: 'GET_REPOS', payload: userRepoData})
            }

            getUserData?.(login)
            getUserRepositories?.(login)
        }
        console.log(user)
    }, [login])

    return ( 
        <PageStructure>
            { isLoading ?
                <Loading /> : 
                <div className="w-full mx-auto lg:w-10/12">
                    <div className="mb-4">
                        <Link to='/' className='btn btn-ghost'>
                            Back to Search
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 mb-8 md:gap-8">
                        <div className="custom-card-image mb-6 mb:mb-0">
                            <div className="rounded-2xl shadow-xl card image-full">
                                <figure>
                                    <img src={ user?.avatar_url } alt='User avatar' />
                                </figure>
                                <div className="card-body self-end">
                                    <h2 className="card-title mb-0">
                                        { user?.name }
                                    </h2>
                                    <p>{ user?.login }
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-2 mb-6">
                            <h1 className="text-3xl card-title">
                                { user?.name }
                                <div className="ml-2 mr-1 badge badge-success">
                                    { user?.type }
                                </div>
                                { user?.hireable ? <div className="mx-1 badge badge-info">Hireable</div> : '' }
                            </h1>
                            <p>{ user?.bio }</p>
                            <div className="my-4 card-actions">
                                <a href={ user?.html_url } target='_blank' rel="noreferrer" className='btn btn-outline'>
                                    Visit Github Profile
                                </a>
                            </div>
                            <div className="w-full rounded-lg shadow-md bg-base-100 stats">
                                { user?.location ? 
                                    <>
                                    <div className="stat">
                                        <div className="stat-title text-md">Location</div>
                                        <div className="text-lg stat-value pt-2">
                                            { user?.location }
                                        </div>
                                    </div>
                                    </>
                                    : ''
                                }
                                { user?.blog ? 
                                    <>
                                    <div className="stat">
                                        <div className="stat-title text-md">Website</div>
                                        <div className="text-lg stat-value pt-2">
                                            <a href={`https://${user?.blog}`} target='_blank' rel='noreferrer'>{ user?.blog }</a>
                                        </div>
                                    </div>
                                    </>
                                    : ''
                                }
                                { user?.twitter_username ? 
                                    <>
                                    <div className="stat">
                                        <div className="stat-title text-md">Twitter</div>
                                        <div className="text-lg stat-value pt-2">
                                            <a href={`https://www.twitter.com/${user?.twitter_username}`} target='_blank' rel='noreferrer'>{ user?.twitter_username }</a>
                                        </div>
                                    </div>
                                    </>
                                    : ''
                                }
                            </div>
                        </div>
                    </div>
                    <div className="w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats">
                        <div className="stat">
                            <div className="stat-figure text-info">
                                <FaUsers className='text-3xl md:text-5xl' />
                            </div>
                            <div className="stat-title pr-5">
                                Followers
                            </div>
                            <div className="stat-value pr-5 text-3xl md:text-4xl">
                                { user?.followers }
                            </div>
                        </div>
                        <div className="stat">
                            <div className="stat-figure text-info">
                                <FaUserFriends className='text-3xl md:text-5xl' />
                            </div>
                            <div className="stat-title pr-5">
                                Following
                            </div>
                            <div className="stat-value pr-5 text-3xl md:text-4xl">
                                { user?.following }
                            </div>
                        </div>
                        <div className="stat">
                            <div className="stat-figure text-info">
                                <FaCodepen className='text-3xl md:text-5xl' />
                            </div>
                            <div className="stat-title pr-5">
                                Public Repos
                            </div>
                            <div className="stat-value pr-5 text-3xl md:text-4xl">
                                { user?.public_repos }
                            </div>
                        </div>
                        <div className="stat">
                            <div className="stat-figure text-info">
                                <FaStore className='text-3xl md:text-5xl' />
                            </div>
                            <div className="stat-title pr-5">
                                Public Gists
                            </div>
                            <div className="stat-value pr-5 text-3xl md:text-4xl">
                                { user?.public_gists }
                            </div>
                        </div>
                    </div>
                    <RepoList repos={repos} isLoading={isLoading} />
                </div>
            }
        </PageStructure>
    )
}

export default User
