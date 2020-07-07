import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import MissionTemplate from '../../templates/mission-template'

export default () => {
    const data = useStaticQuery(graphql`
    {
        allMarkdownRemark(filter: {frontmatter: {title: {eq: "mission"}}}) {
          edges {
            node {
              html
              frontmatter {
                head
                mission
                missionHead
                vision
                visionHead
                goals
                goalsHead
                bgImage{
                  publicURL
                }
              }
            }
          }
        }
      }
    `)

    const {frontmatter} = data.allMarkdownRemark.edges[0].node;
    
    return (
        <MissionTemplate { ...frontmatter}/>   
    )
}