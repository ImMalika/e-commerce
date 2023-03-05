import React from 'react'
import Footer from '../footer/footer'
import Navbar from '../navbar/navbar'

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export  {Layout}
