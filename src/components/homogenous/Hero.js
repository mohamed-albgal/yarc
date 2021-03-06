import React from 'react'

export default ({mainText, caption, heroImage}) => {
    
    return (
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
      style={{
          minHeight: "75vh"
      }}>
      {/* hero image*/}
      <div className=" md:shadow-2xl absolute sm:inset-0 w-full h-full sm:bg-fixed bg-cover sm:bg-center bg-scroll"
          style={{
          backgroundImage: `url(${heroImage})`,
          WebkitOverflowScrolling: "touch",
          WebkitBackgroundSize: 'cover',
          MozBackgroundSize:"cover",
          }}>
            <span id="blackOverlay" className="w-full h-full absolute opacity-50 bg-gray-500"></span> 
      </div>
      <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                  <div className="pr-0">
                    <h1 className="text-black leading-none tracking-wide  font-extrabold text-5xl pt-20 pb-3 sm:text-6xl">
                        {mainText}
                    </h1>
                    <span className="title-gradient block h-1 -mt-2 self-stretch"></span>
                    <p className="mt-4 text-lg sm:text-2xl font-bold text-gray-900">
                        {caption}
                    </p>
                  </div>
              </div>
          </div>
      </div>
  </div>
    )
};