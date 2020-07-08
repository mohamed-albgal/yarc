import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import dock from '../images/oakland_dock.jpg'
import Hero from '../components/homogenous/Hero'
import MarkdownHTML, { Content } from '../components/homogenous/Content';
import PreviewCompatibleImage from '../components/homogenous/PreviewCompatibleImage'


export const markdownStyle = `text-left markdown inline-block mb-10 -mt-20 h-full max-w-full 
whitespace-pre-wrap sm:max-w-none sm:px-6 px-4 sm:pt-20 sm:w-11/12 lg:w-9/12 shadow-xl bg-white rounded-lg`

const imageClass =" shadow-2xl  relative object-center object-cover overflow-hidden rounded-full w-56 h-56 z-20  mx-auto"
export const LeadersTemplate = ({title, caption, content, contentComponent, profileImage, heroBg, mdStyle={markdownStyle}}) => {
    const PostContent = contentComponent || Content
    return (
      <div>
        <Layout navWithHero bgGradientColor={"yellowBlue-topBottom"}>
          <Hero mainText={title} caption={caption} heroImage={heroBg} />
          <div className="relative z-20 -mt-40">
            <PreviewCompatibleImage image={profileImage} imageStyle={imageClass} />
            <PostContent className={markdownStyle} content={content} /></div>
        </Layout>
      </div>
    )
};


export default ({ data }) => {
  console.log(data);
    const {frontmatter, html } = data.markdownRemark;
    return (
        <LeadersTemplate 
          contentComponent={MarkdownHTML}
          title={frontmatter.leader}
          caption={`Member since ${frontmatter.startDate}`}
          heroBg={dock}
          content={html}
          mdStyle={markdownStyle}
          profileImage={frontmatter.image.publicURL}
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

