import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import jamb from '../assets/img/jambiyyahs.jpg'
import Layout from '../components/Layout';

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
            <Layout caption={frontmatter.caption} mainText={frontmatter.title} heroImage={jamb} slantedImage={false}>
                <div className=" markdown container m-10">
                    <div className="text-xl text-gray-800" dangerouslySetInnerHTML={{__html: html}}>
                    </div>
                </div>
            </Layout>
        </>
        
    )
}