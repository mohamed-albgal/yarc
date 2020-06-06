import React from      "react"
import Layout from "../components/Layout"
import LandingPageContent from "../components/landingPageContent"
import hands from "../assets/img/hands.jpg"
import "../utils/font-awesome"


const caption = `The Yemeni American Resource Center is committed to providing a source of learning and growth for the entire
Yemeni Community in the Bay Area`;
const mainText = `Yemeni American Resource Center`

export default () => {
  return (
    <>
      <Layout caption={caption} mainText={mainText} heroImage={hands}>
        <LandingPageContent />
      </Layout>
    </>
  );
};
