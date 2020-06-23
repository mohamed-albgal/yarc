import React from 'react'
import { graphql } from 'gatsby'
import heroImage from '../../images/play3.jpg'
import Hero from '../../components/homogenous/Hero'
import Layout from '../../components/Layout'


export default ({data}) => {
    const {html, frontmatter} = data.allMarkdownRemark.edges[0].node;
    return (
        <>
            <Layout navWithHero bgGradientColor={"sand-bottom"}>
                <Hero caption={frontmatter.caption} mainText={frontmatter.viewTitle} heroImage={heroImage} />
                <div className=" text-center relative z-10">
              <div className=" text-left sm:text-2xl text-xl inline-block -mb-8 -mt-20 h-full max-w-full sm:max-w-none px-8 sm:w-11/12 lg:w-9/12 shadow-xl bg-white rounded-lg markdown" dangerouslySetInnerHTML={{__html:html}} />
            </div>
            </Layout>
        </>
    )

}

export const query = graphql`
{
    allMarkdownRemark(filter: {frontmatter: {title: {eq: "our-story-page"}}}) {
      edges {
        node {
          html
          frontmatter {
            viewTitle
            caption
          }
        }
      }
    }
  }
`