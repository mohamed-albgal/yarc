import React from 'react'
import Layout, { CMSLayout } from '../components/Layout'
import { graphql } from 'gatsby'
import bayView from '../images/bay_view.jpg'
import Hero from '../components/homogenous/Hero'
import MarkdownHTML, { Content } from '../components/homogenous/Content'
import PreviewCompatibleImage from '../components/homogenous/PreviewCompatibleImage'

const bgCSSName = "yellowBlue-topBottom";
export const eventMarkdownStyle = " w-full text-left inline-block -mb-8 sm:px-6 min-h-full px-4 shadow-xl bg-white rounded-lg markdown";

const PageContent = (props) => {
  const {heroBg, heroTitle, description, image, mdStyle, contentComponent, content} = props;
  const PostConent = contentComponent || Content
  return (
    <div>
      <Hero heroImage={heroBg} mainText={heroTitle} caption={description} />
      <div className="sm:flex sm:p-10 p-2 justify-between ">
        { image && <div className="sm:w-1/2 pt-10 sm:pt-0 whitespace-pre-wrap z-20 sm:pr-4">
          <PreviewCompatibleImage image={image} /></div> }
        <div className={`${image ? 'sm:w-1/2': 'sm:w-full'} text-center relative z-10`}>
            <PostConent content={content} className={mdStyle}/>
        </div>
      </div>
    </div>
  )
}
export const EventTemplate = (props) => {
  return (
    <Layout navWithHero bgGradientColor={bgCSSName}>
      <PageContent {...props} />
    </Layout>
  )
}

export const CMSEventTemplate = (props) => (
    <CMSLayout navWithHero bgGradientColor={bgCSSName}>
      <PageContent {...props} />
    </CMSLayout>
  )

export default ({ data }) => {
    const {frontmatter, html } = data.markdownRemark;
    return (
        <EventTemplate 
          content={html}
          contentComponent={MarkdownHTML}
          image={frontmatter.eventImage}
          heroBg={bayView}
          description={frontmatter.description || ""}
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