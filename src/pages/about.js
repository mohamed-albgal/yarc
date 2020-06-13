import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import SvgSep from '../components/homogenous/SvgSep'
import jamb from '../assets/img/jambiyyahs.jpg'
import Layout from '../components/Layout';
import Hero from '../components/homogenous/Hero'

export default () => {
    const data = useStaticQuery(graphql`
    {
        allMarkdownRemark(filter: {frontmatter: {title: {eq: "About Page"}}}) {
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
        <>
            <Layout transparentNavBar>
                <Hero caption={frontmatter.caption} mainText={frontmatter.title} heroImage={jamb} />
                <div className=" markdown px-4  mt-0 sm:text-base">
                    <div dangerouslySetInnerHTML={{__html: html}}>
                    </div>
                </div>
            </Layout>
        </>
        
    )
}