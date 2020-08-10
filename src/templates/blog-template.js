import React from 'react'
import Layout, { CMSLayout } from '../components/Layout'
import { graphql } from 'gatsby'
import dock from '../images/oakland_dock.jpg'
import Hero from '../components/homogenous/Hero'
import MarkdownHTML, { Content } from '../components/homogenous/Content';


export const markdownStyle = `text-left markdown inline-block -mb-8 -mt-20 h-full max-w-full 
whitespace-pre-wrap sm:max-w-none sm:px-6 px-4 sm:w-11/12 lg:w-9/12 shadow-xl bg-white rounded-lg`


export const BlogTemplate = ({title, author, content, contentComponent, heroBg, mdStyle={markdownStyle}}) => {
    const PostContent = contentComponent || Content
    //know the caller is from the cms since it does not pass in a contentComponent
    const CorrectLayout = contentComponent ? Layout : CMSLayout
    return (
      <div>
        <CorrectLayout navWithHero bgGradientColor={"yellowBlue-topBottom"}>
          <Hero mainText={title} caption={author} heroImage={heroBg} />    
          <PostContent className={mdStyle} content={content} />
        </CorrectLayout>
      </div>
    )
};


export default ({ data }) => {
    const {frontmatter, html } = data.markdownRemark;
    return (
        <BlogTemplate author={frontmatter.author}
          contentComponent={MarkdownHTML}
          title={frontmatter.title}
          heroBg={dock}
          content={html}
          mdStyle={markdownStyle}
        />
    )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        author
        tags
        date
      }
    }
  }
`

