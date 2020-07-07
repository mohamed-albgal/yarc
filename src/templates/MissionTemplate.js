import React from 'react'
import Layout from '../components/Layout';
import Hero from '../components/homogenous/Hero'
import PageHeadText from '../components/homogenous/PageHeadText'

const PageSection = ({body, head}) => {
  return (
        <div className="sm:w-full w-11/12">
          <PageHeadText text={head} size="6xl" />
          <div className="text-left sm:text-4xl text-2xl sm:leading-normal leading-normal font-thin sm:p-10 pl-2 pr-1 py-8  ">
            {body}
          </div>
        </div>
  )
}

const MissionTemplate = ({head, caption, bgImage, vision, visionHead, mission, missionHead, goals, goalsHead }) => {
    const sections = []
    sections.push({head: visionHead, body: vision})
    sections.push({head: missionHead, body: mission})
    sections.push({head: goalsHead, body: goals})
  const makeSections = sections.map(section => <PageSection head={section.head} body={section.body} />)
  return (
        <div>
            <Layout navWithHero bgGradientColor={"blue-top"}>
                <Hero caption={caption} mainText={head} heroImage={bgImage && bgImage.publicURL || bgImage} />
                <div className="relative z-10 container shadow-xl bg-white rounded-lg p-6 sm:p-20 sm:mx-20 sm:-my-10 mt-4">
                  {makeSections}
                </div>
            </Layout>
        </div>
  )

}

export default MissionTemplate