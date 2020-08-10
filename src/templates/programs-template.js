import React from 'react'
import Layout, {CMSLayout } from '../components/Layout'
import { graphql } from 'gatsby'
import kids_learning from '../images/kids-learning.jpg'
import Hero from '../components/homogenous/Hero'
import bg from '../images/Protruding-Squares.svg'
import MarkdownHTML, { Content } from '../components/homogenous/Content'
import PreviewCompatibleImage from '../components/homogenous/PreviewCompatibleImage'


const bgCSSName = "yellowBlue-topBottom";
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        tags
        description
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

export const programMdStyle = "text-left inline-block whitespace-pre-wrap sm:px-20 min-w-full min-h-full px-4 shadow-xl bg-white rounded-lg markdown"
const PageCore = (props) => {
  const {mainText, subText, pageBg, content, markdownStyle, image, contentComponent  } = props;
  const PostContent = contentComponent || Content
  return (
    <>
      <Hero heroImage={kids_learning} mainText={mainText} caption={subText} />  
      <div className="" style={{backgroundImage:`url(${pageBg})`}}>
          <div className="lg:p-20 p-2 ">
              
              {/* trick to center all content in a wrapper div: on wrapper div, set it to text-center, on the child set to inline block*/}
              <div className="text-center">
                  {image && <div className=" inline-block sm:w-6/12 overflow-hidden pt-10 sm:pt-0 shadow-xl z-20 sm:pr-4 w-full">
                    <PreviewCompatibleImage image={image} />
                  </div> }
              </div>
              <PostContent className={markdownStyle} content={content} />
          </div>
      </div>
    </>
  )
}

const ProgramsTemplate = (props) => {
  
  return (
      <>
        <Layout navWithHero bgGradientColor={bgCSSName}>
         <PageCore {...props}/>
        </Layout>
      </>

  )
}

export const CMSProgramsTemplate = (props) => (
  <CMSLayout navWithHero bgGradientColor={bgCSSName}>
    <PageCore { ...props} />
  </CMSLayout>
)


export default ({ data }) => {
    const {frontmatter, html } = data.markdownRemark;
    return (
      <ProgramsTemplate 
        content={html} 
        mainText={frontmatter.title}
        contentComponent={MarkdownHTML}
        subText={frontmatter.description || ""}
        pageBg={bg}
        markdownStyle={programMdStyle}
        image={frontmatter.programImage}
      />
    )
}


