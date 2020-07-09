import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import dock from '../images/oakland_dock.jpg'
import defaultPhoto from '../images/default-profile.png'
import Hero from '../components/homogenous/Hero'
import pageBg from '../images/Hollowed-Boxes.svg'
import MarkdownHTML, { Content } from '../components/homogenous/Content';
import PreviewCompatibleImage from '../components/homogenous/PreviewCompatibleImage'


export const markdownStyle = `text-left markdown whitespace-pre-wrap inline-block 
                              px-2 sm:px-16 pt-20  mx-4 sm:-mt-20 -mt-12 sm:mb-10  
                              sm:max-w-none h-full max-w-full sm:w-11/12 lg:w-9/12 
                              bg-white  shadow-xl rounded-lg`

const pageBgStyle = {
  backgroundImage:`url(${pageBg})`,
  backgraoundRepeat: 'repeat',
}
const circleImageStyles =" shadow-2xl relative object-center object-cover overflow-hidden rounded-full sm:w-56 sm:h-56 w-32 h-32 z-20  mx-auto"
export const LeadersTemplate = ({title, caption, content, contentComponent, profileImage, heroBg, mdStyle, startDate} ) => {
    mdStyle = mdStyle || markdownStyle
    caption = caption || `Member since ${startDate}`
    const PostContent = contentComponent || Content
    return (
      <div>
        <Layout navWithHero >
          <Hero mainText={title} caption={caption} heroImage={heroBg} />
          <div style={pageBgStyle}>
            <div className="relative z-20 sm:-mt-40  -mt-12">
              <PreviewCompatibleImage image={profileImage} imageStyle={circleImageStyles} />
              <PostContent className={markdownStyle} content={content} /></div>
            </div>
        </Layout>
      </div>
    )
};


export default ({ data }) => {
    const {frontmatter, html } = data.markdownRemark;
    const profileImage = frontmatter.image && frontmatter.image.publicURL || defaultPhoto
    return (
        <LeadersTemplate 
          contentComponent={MarkdownHTML}
          title={frontmatter.leader}
          caption={frontmatter.caption}
          startDate={frontmatter.startDate}
          heroBg={dock}
          content={html}
          mdStyle={markdownStyle}
          profileImage={profileImage}
        />
    )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        leader
        startDate(formatString: "MMMM Do, YYYY")
        image{
          publicURL
        }
      }
    }
  }
`

