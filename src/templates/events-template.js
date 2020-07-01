import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import bayView from '../images/bay_view.jpg'
import Hero from '../components/homogenous/Hero'
import Img from 'gatsby-image'
import MarkdownHTML, { Content } from '../components/homogenous/Content'

export const EventTemplate = ({eventImageFluid=null, heroBg={bayView}, mdStyle={eventMarkdownStyle},heroTitle, content, contentComponent }) => {
  const PostConent = contentComponent || Content
  return (
    <Layout navWithHero bgGradientColor={"yellowBlue-topBottom"}>
      <Hero heroImage={heroBg} mainText={heroTitle} />
      <div className="sm:flex sm:p-10 p-2 justify-between ">
        { eventImageFluid && <div className="  sm:w-1/2 pt-10 sm:pt-0 shadow-xl z-20 sm:pr-4">
          <Img fluid={eventImageFluid} />
        </div> }
        <div className={`${eventImageFluid ? 'sm:w-1/2': 'sm:w-full'} text-center relative z-10`}>
            <PostConent content={content} className={mdStyle}/>
        </div>
      </div>
    </Layout>

  )
}
const eventMarkdownStyle = " w-full text-left inline-block -mb-8 whitespace-normal sm:px-6 px-4 shadow-xl bg-white rounded-lg markdown";
export default ({ data }) => {
    const {frontmatter, html } = data.markdownRemark;
    const eventImageFluid = frontmatter.eventImage && frontmatter.eventImage.childImageSharp.fluid;
    return (
        <EventTemplate 
          content={html}
          contentComponent={MarkdownHTML}
          eventImageFluid={eventImageFluid}
          heroBg={bayView}
          heroTitle={frontmatter.title}
        />
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