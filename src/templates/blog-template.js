import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import pageTurn from '../assets/img/Page-Turner.svg'
import { Helmet } from 'react-helmet'

export default ({ data }) => {
    const {frontmatter, html } = data.markdownRemark;
    return (
        <div>
            <Layout mainText={frontmatter.title} caption={frontmatter.title} heroImage={pageTurn}>
            <div className=" text-center relative z-10">
              <div className=" text-left inline-block -mb-8 -mt-20 h-full max-w-full whitespace-pre-wrap sm:max-w-none sm:px-6 px-4 sm:w-3/4 shadow-xl bg-white rounded-lg markdown" dangerouslySetInnerHTML={{__html:html}} />
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

//<meta name="viewport" content="width=device-width, initial-scale=1">