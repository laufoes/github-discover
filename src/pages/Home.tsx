import { useContext } from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import UserList from "../components/UserList"
import UserSearch from "../components/UserSearch"
import Alert from "../components/Alert"
import { AlertState } from "../reducers/AlertReducer"
import { AlertContext } from "../context/AlertContext"

function Home() {
    const { alert } = useContext<AlertState>(AlertContext)

    return (
        <>
            <Navbar />
            <main className="container flex flex-col mx-auto px-3 pb-12">
                { alert.message !== '' ? <Alert /> : '' }
                <UserSearch />
                <UserList />
            </main>
            <Footer />
        </>
    )
}

export default Home
