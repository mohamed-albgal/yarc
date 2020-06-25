import React from      "react"
import { useStaticQuery, graphql } from 'gatsby'
import Layout from "../components/Layout"
import Section1Content from "../components/Section1Content.js"
import Section2Content from "../components/Section2Content"
import Section3Content from "../components/Section3Content"
import ActionForm from "../components/homogenous/ActionForm"
import Hero from "../components/homogenous/Hero"
import StaffDisplayContainer from '../components/StaffDisplayContainer'

import heroImage from '../images/tables2.jpg'
import section2Image from '../images/award1.jpg'
import section3Image from '../images/mothers_ws.jpg'
import staff1  from '../images/izz.jpg'
import staff2 from '../images/mokh1.jpg'
import staff3 from '../images/seena.jpg'
import staff4 from '../images/default-profile.png'


const siteTitle = "Yemeni American Resource Center"
const caption = `A Space For Yemeni-American Men And Women, Young and Old to Come Together And Grow!`;
const section1Content = {
  card1: {
    head:"Enhancing The Community Experience",
    body : "Communities thrive when people come together and share their experiences"
  },
  card2: {
    head:"Active Community Building",
    body : "Everyone has something to offer. We provide the platform that enables all the pieces to fit together"
  },
  card3: {
    head:"Tomorrow's Wins Begin Today!",
    body : "We focus on all demographics represented in our community, but the youth are our future and main focus"
  },

};

const section2Content = {
  side:{
    head: "The Sharpest Minds Are Here In Our Community",
    body: `We welcome people from all walks of life to contribute and share in their experiences. Our staff is comprised of an equally 
    diverse set of individuals who voluntarily take the time to ensure our collective success`
  },

  slantedCard: {
    image: section2Image,
    headText:"Recognition Enhances The Confidence of Our Young Talent",
    bodyText: "A young boy receives an award",
  },

};

const section3Content = {
  image: section3Image,
  side: {
    head:"Empowering Events, Held Regularly!",
    body: `Events are announced and based on the requests we get from our community memebers. Some may repeat
     and others may not. With involvement, we can continue providing a rich set of diverse learning and growth events.`,
  }
};

const staffContent = {
  head: "Featured Contributors",
  caption:"YAR Center Would Be Impossible Without These People",
  card1: {
    image: staff1,
    name: " Izzuddin Ahmed",
    title: "Executive Director",
  },
  card2: {
    image: staff2,
    name: "Mokhtar Mohamed",
    title: "General Manager",
  },
  card3: {
    image: staff3,
    name: "Seena Almahan",
    title: "Program Specialist",
  },
  card4: {
    image: staff4,
    name: "Fatima Ali",
    title: "Administrative Assistant",
  },

};






export default () => {
  return (
    <>
      <Layout navWithHero animate bgGradientColor="blue-bottom">
      <main style={{backgroundPositionY:'10%'}}>
        <Hero caption={caption} mainText={siteTitle} heroImage={heroImage}/>
      
        <section className="pb-20  -mt-24">    
          <Section1Content 
          card1Head={section1Content.card1.head}
          card1Body={section1Content.card1.body}
          card2Head={section1Content.card2.head}
          card2Body={section1Content.card2.body}
          card3Head={section1Content.card3.head}
          card3Body={section1Content.card3.body}
          />
          <Section2Content 
          sideHead={section2Content.side.head}
          sideBody={section2Content.side.body}
          slantedCardImage={section2Content.slantedCard.image} 
          cardHeadText={section2Content.slantedCard.headText} 
          cardBodyText={section2Content.slantedCard.bodyText}
          />
        </section>
        
        <section className="relative py-20">
          <Section3Content
          image={section3Content.image}
          sideHead={section3Content.side.head}
          sideBody={section3Content.side.body}
          />
        </section>
        
        <section className=" pb-32 shadow-2xl-white">
          <StaffDisplayContainer head ={staffContent.head} caption={staffContent.caption} card1={staffContent.card1} card2={staffContent.card2} card3={staffContent.card3} card4={staffContent.card4} />
        </section>
      </main>
      </Layout>
    </>
  );
};