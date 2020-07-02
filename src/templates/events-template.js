import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import bayView from '../images/bay_view.jpg'
import Hero from '../components/homogenous/Hero'
import MarkdownHTML, { Content } from '../components/homogenous/Content'
import PreviewCompatibleImage from '../components/homogenous/PreviewCompatibleImage'

export const eventMarkdownStyle = " w-full text-left inline-block -mb-8 sm:px-6 px-4 shadow-xl bg-white rounded-lg markdown";

export const EventTemplate = ({image, heroBg={bayView}, mdStyle ,heroTitle, content, contentComponent }) => {
  const PostConent = contentComponent || Content
  return (
    <Layout navWithHero bgGradientColor={"yellowBlue-topBottom"}>
      <Hero heroImage={heroBg} mainText={heroTitle} />
      <div className="sm:flex sm:p-10 p-2 justify-between ">
        
        { image && <div className="  sm:w-1/2 pt-10 sm:pt-0 whitespace-pre-wrap shadow-xl z-20 sm:pr-4">
          <PreviewCompatibleImage image={image} />
        </div> }

        <div className={`${image ? 'sm:w-1/2': 'sm:w-full'} text-center relative z-10`}>
            <PostConent content={content} className={mdStyle}/>
        </div>
      </div>
    </Layout>

  )
}

export default ({ data }) => {
    const {frontmatter, html } = data.markdownRemark;
    
    return (
        <EventTemplate 
          content={html}
          contentComponent={MarkdownHTML}
          image={frontmatter.eventImage}
          heroBg={bayView}
          heroTitle={frontmatter.title}
          mdStyle={eventMarkdownStyle}
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