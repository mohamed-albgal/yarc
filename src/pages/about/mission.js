import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import jamb from '../../images/jamb.jpg'
import Layout from '../../components/Layout';
import Hero from '../../components/homogenous/Hero'

export default () => {
    const data = useStaticQuery(graphql`
    {
        allMarkdownRemark(filter: {frontmatter: {title: {eq: "mission"}}}) {
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
    `)

    const {frontmatter, html} = data.allMarkdownRemark.edges[0].node;
    return (
        <>
            <Layout navWithHero bgGradientColor={"sand-bottom"}>
                <Hero caption={frontmatter.caption} mainText={frontmatter.viewTitle} heroImage={jamb} />
                <div className=" text-center relative z-10">
              <div className=" text-left sm:text-2xl text-xl inline-block -mb-8 -mt-20 h-full max-w-full sm:max-w-none px-8 sm:w-11/12 lg:w-9/12 shadow-xl bg-white rounded-lg markdown" dangerouslySetInnerHTML={{__html:html}} />
            </div>
            </Layout>
        </>
        
    )
}