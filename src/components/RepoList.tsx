import { RepoData } from "../interfaces/IGithubReducer"
import Loading from "./Loading"
import RepoItem from "./RepoItem"

interface RepoListProps {
    repos: RepoData[],
    isLoading: boolean,
}

function RepoList({ repos, isLoading }: RepoListProps) {
    console.log(repos)
    return (
        <>
            <div className="rounded-lg shadow-lg card bg-base-100">
                <div className="card-body">
                    <h2 className="text-3xl my-4 font-bold card-title">
                        Latest Repositories
                    </h2>
                    {isLoading ? <Loading /> : <div>
                        {repos.map((repo: RepoData) => (
                            <RepoItem key={repo.id} repo={repo} />
                        ))}
                    </div>}
                </div>
            </div>
        </>
    )
}

export default RepoList
