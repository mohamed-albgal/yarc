import React from      "react"
import { graphql } from 'gatsby'
import Layout from "../components/Layout"
import LandingPageContent from "../components/LandingPageContent"
import "../utils/font-awesome"


/* note that for non page components, can use the staticQuery hook from gatsby, 
    since this page is a page, using the graphql to make the query, and then receiving the 
    data as a prop works
*/


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