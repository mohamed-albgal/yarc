import React from 'react'

export default ({mainText, caption, heroImage}) => {
    return (
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
      style={{
          minHeight: "75vh"
      }}>
      {/* hero image*/}
      <div className=" absolute top-0 w-full h-full bg-center bg-cover"
          style={{
          backgroundImage: `url(${heroImage})`,
          
          }}>
            <span id="blackOverlay" className="w-full h-full absolute opacity-50 bg-gray-900"></span> 
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