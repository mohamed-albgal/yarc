import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import dock from '../assets/stock/oakland_dock.jpg'
import Hero from '../components/homogenous/Hero'

export default ({ data }) => {
    const {frontmatter, html } = data.markdownRemark;
    return (
        <div>
            <Layout navWithHero bgGradientColor={"yellowBlue-topBottom"}>
            <Hero mainText={frontmatter.title} caption={frontmatter.title} heroImage={dock}/>
            <div className=" text-center relative z-10">
              <div className=" text-left inline-block -mb-8 -mt-20 h-full max-w-full whitespace-pre-wrap sm:max-w-none sm:px-6 px-4 sm:w-11/12 lg:w-9/12 shadow-xl bg-white rounded-lg markdown" dangerouslySetInnerHTML={{__html:html}} />
            </div>
            </Layout>
        </div>
    )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

