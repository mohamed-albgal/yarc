import React from 'react'
import NavBar from './homogenous/NavBar'
import Hero from './homogenous/Hero'
import Footer from './Footer'

const Layout = ({children, heroImage, mainText, caption, slantedImage}) => {
    return (
        <>
            <NavBar />
            <Hero heroImage={heroImage} mainText={mainText} caption={caption} slanted={slantedImage}/>
            <div className="bg-gray-300">
                {children}
            </div>
            <Footer />
        </>
    )
}
export default Layout;