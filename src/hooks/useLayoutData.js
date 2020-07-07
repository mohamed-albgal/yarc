import React from 'react'
import { useStaticQuery, graphql} from 'gatsby'

const useLayoutData = () => {
    // const { allMarkdownRemark } = useStaticQuery(graphql`
    // {
    //     allMarkdownRemark(filter: {fields: {slug: {eq: "/"}}}) {
    //       edges {
    //         node {
    //           frontmatter {
    //             
    //       }
    //     }
    //   }
    // }
    // `)
    // console.log('from hook')
    // console.log(allMarkdownRemark.edges[0].node.frontmatter)
    // return allMarkdownRemark.edges[0].node.frontmatter
    return null;
}
export default useLayoutData

