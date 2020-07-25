import React from 'react'
import NavBar from './homogenous/NavBar'
import Footer from './homogenous/Footer'
import ClosingSection from './homogenous/ClosingSection'
import useTranslations from '../hooks/useTranslations'
//import useLayoutData from '../hooks/useLayoutData.js'

const Layout = ({ children, navWithHero, animate, bgGradientColor="blue-top" }) => {
    const translatedText = useTranslations("index");
    const { form, head , card1, card2, card3,  contact, social } = translatedText.section5;
    const formProps = { contact, social, form };
    const closingProps = { card1, card2, card3, head }
        return (
            <div>
                <NavBar withHero={navWithHero} animate={animate} />  
                <div className={` bg-gradient-${bgGradientColor} sm:bg-fixed bg-center sm:bg-left-top min-h-screen  bg-cover `}>
                    { children }    
                </div>
                <ClosingSection {...closingProps} />
                <Footer {...formProps} />
            </div>
        )
}
export default Layout