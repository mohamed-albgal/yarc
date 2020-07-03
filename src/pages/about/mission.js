import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../../components/Layout';
import Hero from '../../components/homogenous/Hero'


export default () => {
    const data = useStaticQuery(graphql`
    {
        allMarkdownRemark(filter: {frontmatter: {title: {eq: "mission"}}}) {
          edges {
            node {
              html
              frontmatter {
                head
                mission
                vision
                goals
                bgImage{
                  publicURL
                }
              }
            }
          }
        }
      }
    `)

    const {frontmatter} = data.allMarkdownRemark.edges[0].node;
    return (
        <div>
            <Layout navWithHero bgGradientColor={"blue-top"}>
                <Hero caption={frontmatter.caption} mainText={frontmatter.head} heroImage={frontmatter.bgImage.publicURL} />
                <div className="relative z-10 container shadow-xl bg-white rounded-lg p-2 sm:mx-20 sm:-my-10 mt-4">
                  <PageSection head={"Our Mission"} body={frontmatter.mission}/>
                  <PageSection head={"Our Vision"} body={frontmatter.vision}/>
                  <PageSection head={"Our Goals"} body={frontmatter.goals} />
                </div>
            </Layout>
        </div>
        
    )
}

const PageHeadText = ({text}) => {
  return (
          <div className=" container mr-4 flex flex-col flex-no-wrap pt-10 ">
              <div className="text-black font-extrabold tracking-normal sm:text-6xl text-5xl sm:pl-2 sm:pr-10">{text}
                  <span className="title-gradient block h-1 -mt-4 self-stretch w-full"></span>
              </div>
          </div>
  )
}

const PageSection = ({body, head}) => {
  return (
        <div className="sm:w-full w-11/12">
          <PageHeadText text={head} />
          <div className="text-left sm:text-4xl text-2xl sm:leading-normal leading-normal font-thin sm:p-10 pl-2 pr-1 py-8  ">
            {body}
          </div>
        </div>

  )
}