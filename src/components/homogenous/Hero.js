import React from 'react'

export default ({mainText, caption, heroImage, slanted}) => {
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
            <span id="blackOverlay" className="w-full h-full absolute opacity-50 bg-black"></span> 
      </div>
      <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                  <div className="pr-0">
                      <h1 className="text-white font-semibold text-2xl pt-20 sm:mt-20 sm:text-5xl">
                          {mainText}
                      </h1>
                  <p className="mt-4 sm:text-lg text-base text-gray-300">
                      {caption}
                  </p>
                  </div>
              </div>
          </div>
      </div>
      
        {slanted && <SvgSep />}
      
  </div>
    )
};

const SvgSep = () => {
    return (
        <div
        className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
        style={{ height: "70px", transform: "translateZ(0)" }}
        >
            <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
            >
            <polygon
            className="text-gray-300 fill-current"
            points="2560 0 2560 100 0 100"
            ></polygon>
        </svg>
      </div>
    )
}