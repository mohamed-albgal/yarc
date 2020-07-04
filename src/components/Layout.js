import React from 'react'
import NavBar from './homogenous/NavBar'
import ActionForm from './homogenous/ActionForm'
import Footer from './Footer'
import ClosingSection from "./homogenous/ClosingSection"

const closingContent = {
    head:"Become A Valuable Resource",
    caption: "",
    card1:{
      head:"Lead An Event",
      body:"Have A Skill or Specialty? Reach out to us and share in your expertise!",
    },
    card2:{
      head:"Donate To Our Cause",
      body:"The only funding we have is from people like YOU. A little goes a long way!",
    },
    card3:{
      head:"Become A Mentor",
      body:"Give back to those who could benefit from your own experiences. Attend our mentorship events!",
    },
  }
const Layout = ({children, navWithHero, animate, bgGradientColor="blue-top"}) => {
    return (
        <>
            <NavBar withHero={navWithHero} animate={animate} />
            <div className={` bg-gradient-${bgGradientColor} sm:bg-fixed bg-center sm:bg-left-top  bg-cover `}>
                { children }
                
            </div>
            <ClosingSection 
            head={closingContent.head}
            caption={closingContent.caption}
            card1={closingContent.card1}
            card2={closingContent.card2}
            card3={closingContent.card3}
            />
            <ActionForm />
            <Footer />
        </>
    )
}
export default Layout;