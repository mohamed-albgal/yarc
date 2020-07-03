import React from      "react"
import { Link, graphql } from 'gatsby'
import Layout from "../components/Layout"
import Section1Content from "../components/Section1Content.js"
import Section2Content from "../components/Section2Content"
import Section3Content from "../components/Section3Content"
import Hero from "../components/homogenous/Hero"
import StaffDisplayContainer from '../components/StaffDisplayContainer'

import heroImage from '../images/tables2.jpg'
import section2Image from '../images/award1.jpg'
import section3Image from '../images/mothers_ws.jpg'
import staff1  from '../images/izz.jpg'
import staff2 from '../images/mokh1.jpg'
import staff3 from '../images/seena.jpg'
import staff4 from '../images/default-profile.png'

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
        }
      }
    }
  }
}
`





export default ({ data }) => {
  const {head, caption, bgImage, section1, section2, section3, section4  } = data.allMarkdownRemark.edges[0].node.frontmatter

  return (
    <>
      <Layout navWithHero animate bgGradientColor="blue-bottom">
      <main style={{backgroundPositionY:'10%'}}>
        <Hero caption={caption} mainText={head} heroImage={bgImage.publicURL}/>
      
        <section className="pb-20  -mt-24">    
          <Section1Content 
          card1Head={section1.card1.head}
          card1Body={section1.card1.body}
          card2Head={section1.card2.head}
          card2Body={section1.card2.body}
          card3Head={section1.card3.head}
          card3Body={section1.card3.body}
          />
          <Section2Content 
          sideHead={section2.side.head}
          sideBody={section2.side.body}
          slantedCardImage={section2.slantCard.image.publicURL} 
          cardHeadText={section2.slantCard.head} 
          cardBodyText={section2.slantCard.body}
          />
          <Link to="/events">
              <div className=" text-center w-full my-10 text-3xl font-thin sm:hover:text-yellow-600"> 
                {section2.linkText} <span className="font-extrabold">&rarr;</span>
              </div>
            </Link>
        </section>
        
        <section className="relative py-20">
          <Section3Content
          image={section3.image.publicURL}
          sideHead={section3.side.head}
          sideBody={section3.side.body}
          
          />
          <Link to="/programs">
              <div className=" text-center w-full my-10 text-3xl font-thin sm:hover:text-yellow-600"> 
                {section3.linkText} <span className="font-extrabold">&rarr;</span>
              </div>
            </Link>
        </section>
        
        <section className=" pb-32 shadow-2xl-white">
          <StaffDisplayContainer head={section4.head} 
          caption={section4.caption} card1={section4.card1} card2={section4.card2} 
          card3={section4.card3} card4={section4.card4} />
            <Link to="about/team">
              <div className=" text-center w-full my-10 text-3xl font-thin sm:hover:text-yellow-600"> 
                {section4.linkText} <span className="font-extrabold">&rarr;</span>
              </div>
            </Link>
        </section>
      </main>
      </Layout>
    </>
  );
};