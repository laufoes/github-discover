import { useContext } from 'react'
import UserList from "../components/UserList"
import UserSearch from "../components/UserSearch"
import Alert from "../components/Alert"
import { AlertContext } from "../context/AlertContext"
import PageStructure from '../components/PageStructure'
import { AlertState } from '../interfaces/IAlertReducer'

function Home() {
    const { alert } = useContext<AlertState>(AlertContext)

    return (
        <PageStructure>
            { alert.message !== '' ? <Alert /> : '' }
                <UserSearch />
                <UserList />
        </PageStructure>
    )
}

export default Home