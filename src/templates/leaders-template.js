import React from 'react'
import Layout, { CMSLayout } from '../components/Layout'
import { graphql } from 'gatsby'
import dock from '../images/gold_sky.jpg'
import defaultPhoto from '../images/default-profile.png'
import Hero from '../components/homogenous/Hero'
import pageBg from '../images/Hollowed-Boxes.svg'
import MarkdownHTML, { Content } from '../components/homogenous/Content';
import PreviewCompatibleImage from '../components/homogenous/PreviewCompatibleImage'
import TalkyardCommentsIframe from '@debiki/gatsby-plugin-talkyard';


export const markdownStyle = `text-left markdown whitespace-pre-wrap inline-block 
                              px-2 sm:px-16 pt-20 pb-10 sm:pt-32  mx-4 sm:-mt-20 -mt-12 sm:mb-10  
                              sm:max-w-none h-full max-w-full sm:w-11/12 lg:w-9/12 
                              bg-white  shadow-xl rounded-lg`

const pageBgStyle = {
  backgroundImage:`url(${pageBg})`,
  backgraoundRepeat: 'repeat',
}
const circleImageStyles =" shadow-2xl relative object-center object-cover overflow-hidden rounded-full sm:w-56 sm:h-56 w-32 h-32 z-20  mx-auto"
export const LeadersTemplate = ({title, caption, content, contentComponent, profileImage, heroBg, mdStyle, startDate} ) => {
    mdStyle = mdStyle || markdownStyle
    const subText = caption || `Youth Leader Since ${startDate}`
    const PostContent = contentComponent || Content
    const CorrectLayout = contentComponent ? Layout : CMSLayout
    return (
      <div>
        <CorrectLayout navWithHero >
          <Hero mainText={title} caption={subText} heroImage={heroBg} />
          <div style={pageBgStyle}>
            <div className="relative z-20 sm:-mt-40  -mt-12">
              <PreviewCompatibleImage image={profileImage} imageStyle={circleImageStyles} />
              <PostContent className={markdownStyle} content={content} /></div>
            </div>
            {contentComponent && 
              <div className="pt-8 lg:pl-10 sm:flex sm:justify-around text-white shadow-xl rounded-lg bg-white">
                <div className="sm:w-3/4">
                  <TalkyardCommentsIframe />
                </div>
              </div>
            }
        </CorrectLayout>
      </div>
    )
};


export default ({ data }) => {
    const {frontmatter, html } = data.markdownRemark;
    const profileImage = frontmatter.image && frontmatter.image.publicURL || defaultPhoto
    const { leader, caption, startDate, } = frontmatter
    const props  = { title:leader, profileImage, caption, startDate, content: html, contentComponent:MarkdownHTML,  heroBg:dock,  mdStyle:markdownStyle }
    return (
        <LeadersTemplate 
        {...props}
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

