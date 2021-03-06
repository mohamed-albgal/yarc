import React from      "react"
import {Link } from "gatsby-plugin-intl"
import Layout from "../components/Layout"
import Section1Content from "../components/Section1Content.js"
import Section2Content from "../components/Section2Content"
import Section3Content from "../components/Section3Content"
import Section4Content from '../components/Section4Content'
import Hero from "../components/homogenous/Hero"

const HomePageTemplate =   ({ head, caption, bgImage, section1, section2, section3, section4, section5 }) => {
  const coreProps = { head, caption, bgImage, section1, section2, section3, section4};
  return(
    <Layout navWithHero animate bgGradientColor="blue-bottom" section5={section5}>
      <PageCore {...coreProps} />
    </Layout>
)}

//needed for the cms, can't show footer or use any hooks / gql calls
export const PageCore = ({bgImage, section1, section2, section3, section4, head, caption, fromCMS}) => {
  
  return (
    <main style={{backgroundPositionY:'10%'}}>
        <Hero caption={caption} mainText={head} heroImage={bgImage && bgImage.publicURL || bgImage}/>
      
        <section className="pb-20  -mt-24">    
          <Section1Content section1={section1}/>
          <Section2Content section2={ section2 }/>
          <SectionLink fromCMS={fromCMS} linkTo='/events' linkText={section2.linkText} />
        </section>
        
        <section className="relative py-20">
          <Section3Content section3={ section3 }/>
          <SectionLink fromCMS={fromCMS} linkTo='/programs' linkText={section3.linkText} />
        </section>
        
        <section className=" pb-32 shadow-2xl-white">
          <Section4Content section4={section4}/>
            <SectionLink fromCMS={fromCMS} linkText={section4.linkText} linkTo='/about/team' />
        </section>
      </main>
  )
}

const SectionLink = ({ linkText, linkTo, fromCMS}) => {
  //the cms throws error if asked to use the Link (which is from intl plugin), so only show a div if from cms
  const Linker = fromCMS ? "div" : Link
  return (
    <Linker to={linkTo}>
      <div className=" text-center w-full my-10 text-3xl font-thin sm:hover:text-yellow-600">
        {linkText} <span className="font-extrabold">&rarr;</span>
      </div>
    </Linker>
    )
  }

export default HomePageTemplate