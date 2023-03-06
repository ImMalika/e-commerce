import React from 'react'
import Footer from '../footer/footer'
import Navbar from '../navbar/navbar'
import Navbar2 from "../navbar2/navbar2"
const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <Navbar2 />
            {children}
            <Footer />
        </div>
    )
}

export { Layout }
