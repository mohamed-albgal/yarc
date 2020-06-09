import React from 'react'
import Layout from '../components/Layout'
import { useStaticQuery, graphql } from 'gatsby'
import pageTurn from '../assets/img/Page-Turner.svg'

export default () => {
    const data = useStaticQuery(graphql`
    {
        allMarkdownRemark(filter: {frontmatter: {title: {eq: "Yarc's Mission"}}}) {
          edges {
            node {
              html
              frontmatter {
                title
                caption
              }
            }
          }
        }
      }
    `)
    const {frontmatter, html} = data.allMarkdownRemark.edges[0].node;
    return (
        <div>
            <Layout mainText={frontmatter.title} caption={frontmatter.title} heroImage={pageTurn}>
                <div className="container m-10 markdown" dangerouslySetInnerHTML={{__html:html}}>
                </div>
            </Layout>

        </div>
    )
}