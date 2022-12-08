import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import UserList from "../components/UserList"
import UserSearch from "../components/UserSearch"

function Home() {
  return (
    <>
        <Navbar />
        <main className="container mx-auto px-3 pb-12">
            <UserSearch />
            <UserList />
        </main>
        <Footer />
    </>
  )
}

export default Home
