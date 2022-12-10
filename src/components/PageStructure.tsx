import Footer from "./Footer"
import Navbar from "./Navbar"
import { ReactNode } from 'react'

interface PageProps {
    children: ReactNode,
}

function PageStructure({ children }: PageProps) {
    return (
        <>
            <Navbar />
            <main className="container flex flex-col mx-auto px-3 pb-12">
                { children }
            </main>
            <Footer />
        </>
    )
}

export default PageStructure
