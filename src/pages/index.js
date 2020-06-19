import React from      "react"
import { useStaticQuery, graphql } from 'gatsby'
import Layout from "../components/Layout"
import InDepthCardContainer from "../components/homogenous/IndepthCardContainer"
import TopicCardContainer from "../components/TopicCardContainer.js"
import ImageSideTextContainer from "../components/homogenous/ImageSideTextContainer"
import ActionForm from "../components/homogenous/ActionForm"
import Hero from "../components/homogenous/Hero"
import StaffDisplayContainer from '../components/StaffDisplayContainer'
import ClosingSection from "../components/homogenous/ClosingSection"
import kids_playing from '../images/kids_playing.jpg'
import Img from 'gatsby-image';




/* note that for non page components, can use the staticQuery hook from gatsby, 
    since this page is a page, using the graphql to make the query, and then receiving the 
    data as a prop works
*/

// ideally pull all site data from graphql query sourced from a .md, injected into
//components as props.
// export const query = graphql`
// {
//   site{
//     siteMetadata{
//       title
//     }
//   }
// }
// `

{/*ideally all images should be fed into components from this page.*/}


const siteTitle = "Yemeni American Resource Center"
const caption = `${siteTitle} is committed to providing a source of learning and growth for the entire
                    Yemeni Community in the Bay Area`;


export default () => {
  return (
    <>
      <Layout navWithHero animate bgGradientColor="blue-bottom">
      <main style={{backgroundPositionY:'10%'}}>
        <Hero caption={caption} mainText={siteTitle} heroImage={kids_playing}/>
      
        <section className="pb-20  -mt-24">    
          <TopicCardContainer />
          <InDepthCardContainer />
        </section>
        
        <section className="relative py-20">
          <ImageSideTextContainer />
        </section>
        
        <section className=" pb-32 shadow-2xl-white">
          <StaffDisplayContainer />
        </section>
        
        <section>
          <ClosingSection />
          <ActionForm />
        </section>
      </main>
      </Layout>
    </>
  );
};