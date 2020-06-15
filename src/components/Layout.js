import React from 'react'
import NavBar from './homogenous/NavBar'
//import Hero from './homogenous/Hero'
import Footer from './Footer'

const Layout = ({children, transparentNavBar}) => {
    return (
        <>
            <NavBar transparent={transparentNavBar}/>
            <div className="bg-gray-200">
                { children }
                
            </div>
            <Footer />
        </>
    )
}
export default Layout;