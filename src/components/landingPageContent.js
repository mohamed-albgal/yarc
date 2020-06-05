import React from      "react"
import Hero from "./Hero"
import InDepthCardContainer from "./IndepthCardContainer"
import TopicCardContainer from "./TopicCardContainer.js"
import ImageSideTextContainer from "./ImageSideTextContainer"
import ActionForm from "./ActionForm"
import StaffDisplayContainer from './StaffDisplayContainer'
import ClosingSection from "./ClosingSection"
import lights from  "../assets/img/headshot3.jpg"
import kids from    "../assets/img/headshot4.jpg"
import head1 from    "../assets/img/headshot1.jpg"
import hands from "../assets/img/hands.jpg"

const caption = `The Yemeni American Resource Center is committed to providing a source of learning and growth for the entire
Yemeni Community in the Bay Area`;

const mainText = `Yemeni American Resource Center`
const SectionSVGSep = () => {
    return (
        <div className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
        style={{ height: "80px", transform: "translateZ(0)" }}
        >
            <svg
                className="absolute bottom-0 overflow-hidden"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
            >
                <polygon
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
                ></polygon>
            </svg>
        </div>
    )
}

export default () => {
    return (
      <>
        <main>
            <Hero mainText={mainText} caption={caption} bgImage={hands} />
            
            <section className="pb-20 bg-gray-300 -mt-24">
                <TopicCardContainer />
                <InDepthCardContainer />
            </section>

            {/*svg separator between pages*/}
            <SectionSVGSep />
            
            <section className="relative py-20">
                <ImageSideTextContainer />
            </section>
            
            <section className="my-40"> 
                <StaffDisplayContainer />
            </section>
            
            <section >
                <ClosingSection />
                <ActionForm />
            </section>
        </main>
      </>
    );
  }