import React from 'react'
import NavBar from './homogenous/NavBar'
import Footer from './homogenous/Footer'
import useLayoutHook from '../hooks/layoutHook.js'
import ClosingSection from "./homogenous/ClosingSection"


/*if the component is mounted for the actual build, use this Component
*cannot call the static hook if this the Layout Component is needed for the CMS (throws error, 'cannot useStaticQuery....')
to only call the hook for the build, this wrapper is used instead of the template directly
*(cannot conditionally call a hook (???))
*
*/

const Layout = ({children, navWithHero, animate, bgGradientColor="blue-top"}) => {
    //get footer info from .md directly and not from CMS input
    const footerContent = useLayoutHook();
    const properties = { children, navWithHero, animate, bgGradientColor, footerContent}
    return (
        <LayoutTemplate {...properties}/>
    )
}

export const LayoutTemplate = ({ children, navWithHero, animate, bgGradientColor="blue-top", section5, footerContent }) => {
    //CMS data comes in as a prop called section5, raw .md data comes as 'footerContent' from the layoutHook
    const footerData = footerContent ? footerContent.section5 : section5
    const { form, head , card1, card2, card3,  contact, social } = footerData
    const closingProps = { head, card1, card2, card3, };
    const formProps = { contact, social, form };
        return (
            <>
                <NavBar withHero={navWithHero} animate={animate} />
                <div className={` bg-gradient-${bgGradientColor} sm:bg-fixed bg-center sm:bg-left-top  bg-cover `}>
                    { children }
                    
                </div>
                  <ClosingSection { ...closingProps}/>
                <Footer {...formProps} />
            </>
        )
}

export default Layout;