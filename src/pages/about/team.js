import React from 'react'
import { graphql } from 'gatsby'
import TeamPageTemplate from '../../templates/team-template'
export const query = graphql`
{
  allMarkdownRemark(filter: {fields: {slug: {eq: "/about/team/"}}}) {
    edges {
      node {
        frontmatter {
          head
          caption
          heroImage{
            publicURL
          }
          memberCards {
            memberCard1 {
              image {
                publicURL
              }
              member
              role
              bio
            }
            memberCard2 {
              image {
                publicURL
              }
              member
              role
              bio
            }
            memberCard3 {
              image {
                publicURL
              }
              member
              role
              bio
            }
            memberCard4 {
              image {
                publicURL
              }
              member
              role
              bio
            }
          }
        }
      }
    }
  }
}

`
//couldnt get the config.yml for the cms and this gql query to play nice when an array of objects was used
//used a an object of objects instead, refactor to make tighter
export default ({data}) => {
  const {head, caption, memberCards, heroImage} = data.allMarkdownRemark.edges[0].node.frontmatter
  const heroImg = (heroImage && heroImage.publicURL) || heroImage
  const cards = [memberCards.memberCard1, memberCards.memberCard2, memberCards.memberCard3, memberCards.memberCard4]
  const properties = { head, caption, cards, heroImg };
    return (
        <TeamPageTemplate { ...properties} />
    )
}


