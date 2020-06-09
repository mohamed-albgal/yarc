import React from      "react"
import { graphql } from 'gatsby'
import Layout from "../components/Layout"
import LandingPageContent from "../components/LandingPageContent"
import hands from "../assets/img/hands.jpg"
import "../utils/font-awesome"

export const query = graphql`
{
  site{
    siteMetadata{
      title
    }
  }
}
`

export default ({data}) => {
  const siteTitle = data.site.siteMetadata.title;
  const caption = `${siteTitle} is committed to providing a source of learning and growth for the entire
                    Yemeni Community in the Bay Area`;
  return (
    <>
      <Layout caption={caption} mainText={siteTitle} heroImage={hands} slantedImage={true}>
        <LandingPageContent />
      </Layout>
    </>
  );
};