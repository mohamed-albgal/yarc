import React from 'react'
import NavBar from './homogenous/NavBar'
import Footer from './homogenous/Footer'
import ClosingSection from './homogenous/ClosingSection'
import useTranslations from '../hooks/useTranslations'


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
//the cms can't call hooks or gql or show the footer since it relies on either one (read from the intl dir or md via gql)
export const CMSLayout = ({ children, bgGradientColor="blue-top" }) => {
    return (
        <div>
            <div className={` bg-gradient-${bgGradientColor} sm:bg-fixed bg-center sm:bg-left-top min-h-screen  bg-cover `}>
                { children }    
            </div>
        </div>
    )
}

//the cms needs to show the footer on the home page only, no other pages
export const HomeCMSLayout = ({section5, bgGradientColor="blue-top", children}) => {
    const { form, head , card1, card2, card3,  contact, social } = section5;
    const formProps = { contact, social, form };
    const closingProps = { card1, card2, card3, head }
    return (
        <div>
            <div className={` bg-gradient-${bgGradientColor} sm:bg-fixed bg-center sm:bg-left-top min-h-screen  bg-cover `}>
                { children }  
                <ClosingSection {...closingProps} />
                <Footer {...formProps} />  
            </div>
        </div>
    )
}
export default Layout