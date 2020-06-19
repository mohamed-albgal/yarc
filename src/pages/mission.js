import React from 'react'
import Layout from '../components/Layout'
import { useStaticQuery, graphql } from 'gatsby'
import pageTurn from '../images/Page-Turner.svg'
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
            <Layout  navWithHero>
            <Hero mainText={frontmatter.title} caption={frontmatter.title} heroImage={pageTurn} />
            <div className=" text-center relative z-10">
            <div className=" text-left inline-block -mb-8 -mt-20 h-full max-w-full whitespace-pre-wrap sm:max-w-none sm:px-6 px-4 sm:w-11/12 lg:w-9/12 shadow-xl bg-white rounded-lg markdown" dangerouslySetInnerHTML={{__html:html}} />
          </div>
            </Layout>

        </div>
    )
}