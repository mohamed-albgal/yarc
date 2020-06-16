import React from      "react"
import InDepthCardContainer from "./homogenous/IndepthCardContainer"
import TopicCardContainer from "./TopicCardContainer.js"
import ImageSideTextContainer from "./homogenous/ImageSideTextContainer"
import ActionForm from "./homogenous/ActionForm"
import Hero from "../components/homogenous/Hero"
import StaffDisplayContainer from './StaffDisplayContainer'
import ClosingSection from "./homogenous/ClosingSection"
import hands from "../assets/img/hands.jpg"


const siteTitle = "Yemeni American Resource Center"
const caption = `${siteTitle} is committed to providing a source of learning and growth for the entire
                    Yemeni Community in the Bay Area`;
export default () => {
    //this will be wrapped by the layout, which whill be called by each page, which knows what caption, text and hero image it wants
    
    return (
      <>
        <main>
        <Hero caption={caption} mainText={siteTitle} heroImage={hands}/>
        
        <section className="pb-20 bg-gray-300 -mt-24">    
                <TopicCardContainer />
                <InDepthCardContainer />
            </section>

            
            
            <section className="relative py-20">
                <ImageSideTextContainer />
            </section>

            
            
            <section className="bg-gray-300 pb-32">
                <StaffDisplayContainer />
            </section>
            
            
            <section>
                <ClosingSection />
                <ActionForm />
            </section>
        </main>
      </>
    );
  }