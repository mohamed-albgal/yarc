import React from 'react'
import NavBar from './homogenous/NavBar'
import Hero from './homogenous/Hero'
import Footer from './Footer'

const Layout = ({children, heroImage, mainText, caption, slantedImage, omitHero}) => {
    return (
        <>
            <NavBar />
            { !omitHero && <Hero heroImage={heroImage} mainText={mainText} caption={caption} slanted={slantedImage}/>}
            <div className="bg-red-900">
                {children}
            </div>
            <Footer />
        </>
    )
}
export default Layout;