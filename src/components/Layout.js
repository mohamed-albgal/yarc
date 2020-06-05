import React from 'react'
import Navbar2 from './Navbar2'
import Footer from './Footer'

const Layout = ({children}) => {
    return (
        <>
            <Navbar2/>
                {children}
            <Footer />
        </>
    )
}
export default Layout;