import React from 'react'

import Layout from '../../components/Layout'
import Hero from '../../components/homogenous/Hero'
import heroImage from '../../images/open-space.jpg'
import StaffDisplayContainer from '../../components/StaffDisplayContainer'
import staff1  from '../../images/default-profile.png'
import staff2 from '../../images/default-profile.png'
import staff3 from '../../images/default-profile.png'
import staff4 from '../../images/default-profile.png'


const heroText = "Our Staff and Contributors"
const staffContent = {
    head: "Featured Contributors",
    caption:"YAR Center Would Be Impossible Without These People",
    card1: {
      image: staff1,
      name: " Izzuddin Ahmed",
      title: "Executive Director",
    },
    card2: {
      image: staff2,
      name: "Mokhtar Mohamed",
      title: "General Manager",
    },
    card3: {
      image: staff3,
      name: "Seena Almahan",
      title: "Program Specialist",
    },
    card4: {
      image: staff4,
      name: "Fatima Ali",
      title: "Administrative Assistant",
    },
  
  };

export default () => {
    return (
        <Layout navWithHero bgGradientColor="bg-gradient-blue-bottom">
            <Hero mainText={heroText} heroImage={heroImage} />
            <StaffDisplayContainer head ={staffContent.head} caption={staffContent.caption} card1={staffContent.card1} card2={staffContent.card2} card3={staffContent.card3} card4={staffContent.card4} />
        </Layout>
    )
}