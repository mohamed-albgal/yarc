import React from 'react'

import Layout from '../../components/Layout'
import Hero from '../../components/homogenous/Hero'
import heroImage from '../../images/open-space.jpg'
import staff1  from '../../images/izz.jpg'
import staff2 from '../../images/mokh1.jpg'
import staff3 from '../../images/seena.jpg'
import staff4 from '../../images/default-profile.png'


const heroText = "Our Staff and Contributors"
const staffContent = {
    head: "Featured Contributors",
    caption:"YAR Center Would Be Impossible Without These People",
    card1: {
      image: staff1,
      name: " Izzuddin Ahmed",
      title: "Executive Director",
      bio: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    card2: {
      image: staff2,
      name: "Mokhtar Mohamed",
      title: "General Manager",
      bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum "
    },
    card3: {
      image: staff3,
      name: "Seena Almahan",
      title: "Program Specialist",
      bio: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
    card4: {
      image: staff4,
      name: "Fatima Ali",
      title: "Administrative Assistant",
      bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum "
    },
  
  };

export default () => {
    return (
        <Layout navWithHero bgGradientColor="yellow-green">
            <Hero mainText={heroText} heroImage={heroImage} />
            <div className="py-32">
              <div className="flex flex-wrap w-screen justify-between sm:mx-4" >
                <StaffCard  card={staffContent.card1}/>
                <StaffCard  card={staffContent.card2}/>
                <StaffCard  card={staffContent.card3}/>
                <StaffCard  card={staffContent.card4}/>
              </div>
            </div>
            
        </Layout>
    )
}


const StaffCard = ({card}) => {
  const {image, name, title, bio } = card;
  return (
    <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
    <div className="px-6">
        <img
        alt="..."
        src={image}
        className="shadow-2xl relative object-center object-cover overflow-hidden rounded-full  mx-auto"
        style={{ width: "200px", height:'200px' }}
        />
        <div className="border border-gray-200 -mt-10 bg-gray-100 shadow-lg">
          <div className="pt-6 mt-10 text-center">
            <h5 className="text-2xl font-extrabold">
                {name}
            </h5>
            <p className="mt-1 text-xl tracking-wider text-gray-500  font-semibold">
                {title}
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