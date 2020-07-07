import React from 'react'
import NavBar from './homogenous/NavBar'
import Footer from './homogenous/Footer'
//import useLayoutData from '../hooks/useLayoutData.js'

const Layout = ({ children, navWithHero, animate, bgGradientColor="blue-top" }) => {
    
    //const footerContent = useLayoutData();
    //const { form, head , card1, card2, card3,  contact, social } = footerContent.section5
    //const formProps = { contact, social, form };
        return (
            <div>
                <NavBar withHero={navWithHero} animate={animate} />  
                <div className={` bg-gradient-${bgGradientColor} sm:bg-fixed bg-center sm:bg-left-top  bg-cover `}>
                    { children }    
                </div>
                <Footer />
            </div>
        )
}
export default Layout