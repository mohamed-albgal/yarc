import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import pageTurn from '../assets/img/Page-Turner.svg'

export default ({ data }) => {
    const {frontmatter, html } = data.markdownRemark;
    return (
        <div>
            <Layout mainText={frontmatter.title} caption={frontmatter.title} heroImage={pageTurn}>
                <div className="container m-10 markdown" dangerouslySetInnerHTML={{__html:html}} />
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