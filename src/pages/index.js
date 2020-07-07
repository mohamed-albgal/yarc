import React from      "react"
import { graphql } from 'gatsby'
import HomePageTemplate from '../templates/home-template'

export const query = graphql`
{
  allMarkdownRemark(filter: {fields: {slug: {eq: "/"}}}) {
    edges {
      node {
        frontmatter {
          head
          caption
          bgImage{
            publicURL
          }
          section1{
            card1{
              body
              head
            }
            card2{
              body
              head
            }
            card3{
              body
              head
            }
          }
          section2{
            linkText
            side{
              body
              head
            }
            slantCard{
              body
              head
              image{
                publicURL
              }
            }
          }
          section3{
            linkText
            image{
              publicURL
            }
            side{
              head
              body
            }
          }
          section4{
            linkText
            card1{
              member
              title
              image{
                publicURL
              }
            }
            card2{
              member
              title
              image{
                publicURL
              }
            }
            card3{
              member
              title
              image{
                publicURL
              }
            }
            card4{
              member
              title
              image{
                publicURL
              }
            }
          }
          section5 {
            head
            card1{
              head
              body
            }
            card2{
              head
              body
            }
            card3{
              head
              body
            }
            form{
              head
              caption
              nameLabel
              emailLabel
              messageLabel
              sendLabel
            }
          }
        }
      }
    }
  }
}
`
export default ({ data }) => {
  return (
    <HomePageTemplate {...data.allMarkdownRemark.edges[0].node.frontmatter } />
  )
} 