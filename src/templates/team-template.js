import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/homogenous/Hero'
import PreviewCompatibleImage from '../components/homogenous/PreviewCompatibleImage'

//any caller needs to format the memberCards to be an array of objects named 'cards'
const TeamPageTemplate = (props) => {
  return (
    <Layout navWithHero bgGradientColor="yellow-green">
      <PageCore {...props} />
    </Layout>
  )
}

export const PageCore = ({head, caption, cards, heroImage}) => ( 
    <div>
      <Hero mainText={head} caption={caption} heroImage={heroImage} />
      <div className="py-32">
        <div className="flex flex-wrap w-screen justify-center sm:mx-auto" >
          {cards.map((card, i) => <StaffCard key={i} card={card} /> ) }
        </div>
      </div>
    </div>
)



const StaffCard = ({card}) => {
  const {image, member, role, bio } = card;
  const imageClass =" shadow-2xl  relative object-center object-cover overflow-hidden rounded-full w-56 h-56  mx-auto"
  const cardImage = (image && image.publicURL) || image 
  return (
    <div className="w-full lg:w-6/12 mb-12 mt-16 px-4">
      <div className="sm:px-6">
            <PreviewCompatibleImage image={cardImage} imageStyle={imageClass} />
            <div className="-mt-24 rounded-lg sm:p-10 pt-20 p-2 bg-gray-100 shadow-2xl">
              <div className="pt-6 mt-10 text-center">
                <h5 className="text-2xl font-extrabold">
                    {member}
                </h5>
                <p className="mt-1 text-xl tracking-wider text-gray-500  font-semibold">
                    {role}
                </p>
                <p className="mt-6 leading-7 font-hairline text-lg text-gray-900 mx-2 text-left ">
                    {bio}
                </p>
              </div>
          </div>
      </div>
  </div>
  )
}

export default TeamPageTemplate