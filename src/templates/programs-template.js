import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import kids_learning from '../images/kids-learning.jpg'
import Hero from '../components/homogenous/Hero'
import Img from 'gatsby-image'
import PageHeadText from '../components/homogenous/PageHeadText'



export default ({ data }) => {
    const {frontmatter, html } = data.markdownRemark;
    const programImageFluid = data.markdownRemark.frontmatter.programImage.childImageSharp.fluid;
    return (
        <div>
            <Layout navWithHero bgGradientColor={"yellowBlue-topBottom"}>
            <Hero heroImage={kids_learning} mainText={frontmatter.title} />
            <div className="pt-24">
              <PageHeadText text={frontmatter.title} />
            </div>
            <div className="sm:flex sm:p-10 p-2 justify-between ">
              <div className="  sm:w-1/2 pt-10 sm:pt-0 shadow-xl z-20 sm:pr-4">
                <Img fluid={programImageFluid} />
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