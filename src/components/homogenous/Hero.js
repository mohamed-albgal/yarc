import React from 'react'
// import {useStaticQuery } from 'gatsby'

export default ({mainText, caption, heroImage}) => {
//       const data = useStaticQuery(graphql`
//   {
//     file(relativePath: { eq: "images/kids_playing.jpg" }) {
//       childImageSharp {
//         fixed(width: 400, height: 400) {
//           ...GatsbyImageSharpFixed
//         }
//       }
//     }
//   }
//   `)
    return (
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
      style={{
          minHeight: "75vh"
      }}>
      {/* hero image*/}
      <div className=" shadow-inner shadow-2xl absolute top-0 w-full h-full bg-center sm:bg-fixed bg-cover bg-center sm:bg-left-top"
          style={{
          backgroundImage: `url(${heroImage})`,
          
          }}>
            <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span> 
      </div>
      <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                  <div className="pr-0">
                      <h1 className="text-white font-semibold text-4xl pt-20 sm:text-5xl">
                          {mainText}
                      </h1>
                  <p className="mt-4 text-lg sm:text-base text-gray-300">
                      {caption}
                  </p>
                  </div>
              </div>
          </div>
      </div>
  </div>
    )
};