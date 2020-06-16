import React from 'react'
import NavBar from './homogenous/NavBar'
//import Hero from './homogenous/Hero'
import Footer from './Footer'

const Layout = ({children, navWithHero, animate, bgGradientColor="blue-top"}) => {
    return (
        <>
            <NavBar withHero={navWithHero} animate={animate} />
            <div className={` bg-gradient-${bgGradientColor} bg-fixed `}>
                { children }
                
            </div>
            <Footer />
        </>
    )
}
export default Layout;