import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import kids_learning from '../images/kids-learning.jpg'
import Hero from '../components/homogenous/Hero'
import Img from 'gatsby-image'
import bg from '../images/Protruding-Squares.svg'



export default ({ data }) => {
    const {frontmatter, html } = data.markdownRemark;
    const programImageFluid = data.markdownRemark.frontmatter.programImage.childImageSharp.fluid;
    return (
        <div>
            <Layout navWithHero bgGradientColor={"yellowBlue-topBottom"}>
            <Hero heroImage={kids_learning} mainText={frontmatter.title} />
            
            <div className="" style={{backgroundImage:`url(${bg})`}}>
                <div className="lg:p-20 p-2 ">
                    
                    {/* trick to center all content in a wrapper div: on wrapper div, set it to text-center, on the child set to inline block*/}
                    <div className="text-center">
                        <div className=" inline-block sm:w-10/12 overflow-hidden pt-10 sm:pt-0 shadow-xl z-20 sm:pr-4 w-full">
                            <Img fluid={programImageFluid} />
                        </div>
                    </div>
                    
                    <div className=" text-center">
                        <div className="text-left inline-block whitespace-normal sm:px-20 px-4 shadow-xl bg-white rounded-lg markdown" dangerouslySetInnerHTML={{__html:html}} />
                    </div>
                </div>
            </div>
            </Layout>
        </div>
    )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        tags
        programImage {
          childImageSharp{
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`