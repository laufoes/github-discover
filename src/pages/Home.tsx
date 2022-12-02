import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import UserList from "../components/UserList"

function Home() {
  return (
    <>
        <Navbar />
        <main className="container mx-auto px-3 pb-12">
            <UserList />
        </main>
        <Footer />
    </>
  )
}

export default Home
