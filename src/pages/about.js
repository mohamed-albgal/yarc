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
                <div className=" text-center relative z-10">
              <div className=" text-left inline-block -mb-8 -mt-20 h-full max-w-full whitespace-pre-wrap sm:max-w-none sm:px-6 px-4 sm:w-11/12 lg:w-9/12 shadow-xl bg-white rounded-lg markdown" dangerouslySetInnerHTML={{__html:html}} />
            </div>
            </Layout>
        </>
        
    )
}