import React from 'react'
import NavBar from './homogenous/NavBar'
import Footer from './homogenous/Footer'
import useLayoutData from '../hooks/useLayoutData.js'
import ClosingSection from "./homogenous/ClosingSection"

const LayoutTemplate = ({ children, navWithHero, animate, bgGradientColor="blue-top" }) => {
    return (
        <div>
            <NavBar withHero={navWithHero} animate={animate} />  
            <div className={` bg-gradient-${bgGradientColor} sm:bg-fixed bg-center sm:bg-left-top  bg-cover `}>
                { children }    
            </div>
        </div>
    )
}
const Layout = (props) => {
    
    const footerContent = useLayoutData();
    const { form, head , card1, card2, card3,  contact, social } = footerContent.section5
    const closingProps = { head, card1, card2, card3,};
    const formProps = { contact, social, form };
        return (
            <div>
                <LayoutTemplate {...props} />
                <ClosingSection { ...closingProps}/>
                <Footer {...formProps} />
            </div>
        )
}
export default Layout