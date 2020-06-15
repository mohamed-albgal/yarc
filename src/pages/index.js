import React from      "react"
//import { graphql } from 'gatsby'
import Layout from "../components/Layout"
import LandingPageContent from "../components/landingPageContent"
import "../utils/font-awesome"


/* note that for non page components, can use the staticQuery hook from gatsby, 
    since this page is a page, using the graphql to make the query, and then receiving the 
    data as a prop works
*/

// ideally pull all site data from graphql query sourced from a .md, injected into
//components as props.
// export const query = graphql`
// {
//   site{
//     siteMetadata{
//       title
//     }
//   }
// }
// `

export default () => {
  return (
    <>
      <Layout transparentNavBar>
        <LandingPageContent />
      </Layout>
    </>
  );
};