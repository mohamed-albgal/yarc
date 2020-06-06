import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({children, heroImage, mainText, caption }) => {
    return (
        <>
            <Header heroImage={heroImage} mainText={mainText} caption={caption}/>
                {children}
            <Footer />
        </>
    )
}
export default Layout;