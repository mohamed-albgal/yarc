import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import bayView from '../images/bay_view.jpg'
import Hero from '../components/homogenous/Hero'
import Img from 'gatsby-image'
import PageHeadText from '../components/homogenous/PageHeadText'



export default ({ data }) => {
    const {frontmatter, html } = data.markdownRemark;
    const eventImageFluid = data.markdownRemark.frontmatter.eventImage.childImageSharp.fluid;
    return (
        <div>
            <Layout navWithHero bgGradientColor={"yellowBlue-topBottom"}>
            <Hero heroImage={bayView} mainText={frontmatter.description} />
            <div className="sm:flex sm:p-10 p-2 justify-between ">
              <div className="  sm:w-1/2 pt-10 sm:pt-0 shadow-xl z-20 sm:pr-4">
                <Img fluid={eventImageFluid} />
              </div>
              <div className=" sm:w-1/2 text-center relative z-10">
                  <div className=" text-left inline-block -mb-8 whitespace-normal sm:px-6 px-4 shadow-xl bg-white rounded-lg markdown" dangerouslySetInnerHTML={{__html:html}} />
                   {/** extra space in bottom right 'segment' can used here by duplicating above div and adding content */}
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
        description
        tags
        eventImage {
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