import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import kids_learning from '../images/kids-learning.jpg'
import Hero from '../components/homogenous/Hero'
import Img from 'gatsby-image'
import bg from '../images/Protruding-Squares.svg'
import MarkdownHTML, { Content } from '../components/homogenous/Content'
import PreviewCompatibleImage from '../components/homogenous/PreviewCompatibleImage'


 export const programMdStyle = "text-left inline-block whitespace-normal sm:px-20 px-4 shadow-xl bg-white rounded-lg markdown"

export const ProgramsTemplate = ({programImageFluid=null, mainText, markdownStyle={programMdStyle}, pageBg={bg}, content, contentComponent }) => {
  const PostContent = contentComponent || Content
  return (
      <div>
        <Layout navWithHero bgGradientColor={"yellowBlue-topBottom"}>
          <Hero heroImage={kids_learning} mainText={mainText} />
          
          <div className="" style={{backgroundImage:`url(${pageBg})`}}>
              <div className="lg:p-20 p-2 ">
                  
                  {/* trick to center all content in a wrapper div: on wrapper div, set it to text-center, on the child set to inline block*/}
                  <div className="text-center">
                      {programImageFluid && <div className=" inline-block sm:w-6/12 overflow-hidden pt-10 sm:pt-0 shadow-xl z-20 sm:pr-4 w-full">
                          <PreviewCompatibleImage imageInfo={programImageFluid} />
                      </div>}
                  </div>
                  <PostContent className={markdownStyle} content={content} />
              </div>
          </div>
        </Layout>
      </div>

  )
}


export default ({ data }) => {
    const {frontmatter, html } = data.markdownRemark;
    return (
      <ProgramsTemplate 
        content={html} 
        mainText={frontmatter.title}
        contentComponent={MarkdownHTML}
        pageBg={bg}
        markdownStyle={programMdStyle}
        programImageFluid={frontmatter.programImage.childImageSharp.fluid}
      />
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
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
