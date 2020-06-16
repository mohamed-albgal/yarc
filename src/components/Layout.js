import React from 'react'
import NavBar from './homogenous/NavBar'
//import Hero from './homogenous/Hero'
import Footer from './Footer'

const Layout = ({children, navWithHero, animate}) => {
    return (
        <>
            <NavBar withHero={navWithHero} animate={animate} />
            <div className=" sm:bg-gradient-blue-top bg-gradient-blue-bottom bg-fixed ">
                { children }
                
            </div>
            <Footer />
        </>
    )
}
export default Layout;