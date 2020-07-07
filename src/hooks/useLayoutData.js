import React from 'react'
import { useStaticQuery, graphql} from 'gatsby'

const useLayoutData = () => {
    const { allMarkdownRemark } = useStaticQuery(graphql`
    {
        allMarkdownRemark(filter: {fields: {slug: {eq: "/"}}}) {
          edges {
            node {
              frontmatter {
                section5 {
                    head
                    caption
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
                    contact {
                      head
                      address
                      addressLabel
                      phone
                      phoneLabel
                      email
                      emailLabel
                    }
                    social {
                      head
                      caption
                      links{
                        fb
                      }
                    }
                  }
            }
          }
        }
      }
    }
    `)
    console.log('from hook')
    console.log(allMarkdownRemark.edges[0].node.frontmatter)
    return allMarkdownRemark.edges[0].node.frontmatter
}
export default useLayoutData