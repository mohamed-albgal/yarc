import React, { useState} from 'react'
import { Link } from 'gatsby'
import logo from "../assets/img/duo_logo.svg"

export default ({caption, mainText, heroImage}) => {

    const [open, setOpen] = useState("false");
    const hamburgerClick = (e) => {
        e.preventDefault();
        setOpen(!open);
    }

    //this exports a NavBar + Hero component , modularize to make ideal
    //props come from layout for page making layout, it should know what image, caption and main text it wants;
    return (
        <div>
            <nav className="  z-50 w-full absolute top-0 sm:flex sm:items-center sm:justify-between bg-transparent">
                <div className="py-3 pl-2 pr-6 flex justify-between space-x-1items-center">
                    {/*left*/}
                    <div className="sm:px-6">
                        <Link to="/">
                            <img className="sm:h-48 h-24"  src={logo} alt="YARC LOGO"/>
                        </Link>
                    </div>
                    {/*right*/}
                    <>
                        <button onClick={e=> hamburgerClick(e)} type="button" className="sm:hidden block text-gray-400">
                            <svg viewBox="0 0 100 80" className=" fill-current h-4 lg:h-6">
                                <rect rx="10" x={70/!open} width="180" height="9"></rect>
                                <rect rx="10" x={40/!open} y="30" width="100" height="9"></rect>
                                <rect rx="10" x={10/!open} y="60" width="120" height="9"></rect>
                            </svg>
                        </button>
                    </>
                </div>
                <div className={`${(!open ? "visible bg-indigo-900 opacity-75 h-64":"hidden")} sm:px-20 sm:block pt-2 pb-4 sm:flex sm:p-8 sm:items-center sm:justify-between`} >
                    <NavElement  text="About" linkTo="/about"/>
                    <NavElement  text="Mission" linkTo="/"/>
                    <NavElement  text="Blog" linkTo="/"/>
                    <NavElement  text="About" linkTo="/"/>
                    <NavElement  text="About" linkTo="/"/>
                    <NavElement  text="About" linkTo="/"/>
                </div>
            </nav>
            <Hero mainText={open? mainText:""} caption={open?caption:""} heroImage={heroImage}/>
        </div>
    )
};

const Hero = ({mainText, caption, heroImage}) => {
    return (
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
      style={{
          minHeight: "75vh"
      }}>
      {/* hero image*/}
      <div className=" absolute top-0 w-full h-full bg-center bg-cover"
          style={{
          backgroundImage: `url(${heroImage})`
          }}>
      <span id="blackOverlay" className="w-full h-full absolute opacity-50 bg-black"></span> 
      </div>
      <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                  <div className="pr-0">
                      <h1 className="text-white font-semibold text-3xl pt-10 lg:text-5xl">
                          {mainText}
                      </h1>
                  <p className="mt-4 text-lg sm:text-base text-gray-300">
                      {caption}
                  </p>
                  </div>
              </div>
          </div>
      </div>
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
  </div>
    )
};

const NavElement = ({linkTo, text}) => {
    return (
        <Link className=" block  py-1 hover:underline hover:bg-indigo-200 hover:text-gray-900 hover:font-semibold font-hairline px-4 text-white sm:ml-4" to={linkTo}>
            {text}
        </Link>
    )

}
