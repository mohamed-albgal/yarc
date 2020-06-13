import React from 'react'
import Layout from '../components/Layout'
import { useStaticQuery, graphql } from 'gatsby'
import pageTurn from '../assets/img/Page-Turner.svg'
import Hero from '../components/homogenous/Hero'

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
            <Layout transparentNavBar >
            <Hero mainText={frontmatter.title} caption={frontmatter.title} heroImage={pageTurn} />
                <div className=" markdown px-4  mt-0 sm:text-base" dangerouslySetInnerHTML={{__html:html}}>
                </div>
            </Layout>

        </div>
    )
}