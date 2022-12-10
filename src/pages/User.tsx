import { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import PageStructure from '../components/PageStructure'
import { GithubContext } from '../context/GithubContext'
import { GithubState } from '../reducers/GithubReducer'


function User() {
    const { getUser } = useContext<GithubState>(GithubContext)
    const params = useParams()

    useEffect(() => {
        getUser?.(params.toString())
    })
    return ( 
        <PageStructure>
            hi! this is an user page
        </PageStructure>
    )
}

export default User
