import React from 'react'
import Footer from '../footer/footer'
import Navbar from '../navbar/navbar'
import Navbar2 from "../navbar2/navbar2"
const Layout = ({ mode,theme,children }) => {
    return (
        <div className={mode=='light'?'light':'dark'}>
            <Navbar theme={theme} mode={mode} />
            <Navbar2 />
            {children}
            <Footer />
        </div>
    )
}

export { Layout }
