import { FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function NotFound() {
    return (
        <>
            <Navbar />
            <main className="container mx-auto px-3 pb-12">

                <div className="hero">
                    <div className="text-center hero-content flex flex-col max-w-lg">
                        <h1 className="text-8xl font-bold mb-8">
                            Oops!
                        </h1>
                        <p className="text-5xl mb-8">404 - Page not found.</p>
                        <Link to='/' className='btn btn-lg'>
                            <FaHome className='mr-2' />
                            Back to Home
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default NotFound
