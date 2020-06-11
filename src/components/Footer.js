import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../utils/font-awesome"


const Footer = () => {
    return (
        <footer className="relative bg-gray-300 pt-8 pb-6">
            
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <h4 className="text-3xl font-semibold">
                  Let's keep in touch!
                </h4>
                <h5 className="text-lg mt-0 mb-2 text-gray-700">
                  Find us on any of these platforms, we'd love to connect!
                </h5>
                <div className="mt-6">
                  <button
                    className="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                    type="button"
                  >
                    <FontAwesomeIcon icon={["fab", "twitter"]}/>
                  </button>
                  <button
                    className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                    type="button"
                  >
                    <FontAwesomeIcon icon={["fab", "facebook"]}/>
                  </button>
                  <button
                    className="bg-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                    type="button"
                  >
                  <FontAwesomeIcon icon={["fab", "instagram"]}/>
                  </button>
                  <button
                    className="bg-white text-red-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                    type="button"
                  >
                    <FontAwesomeIcon icon={["fab", "youtube"]}/>
                  </button>
                </div>
              </div>
            </div>
            <hr className="my-6 border-gray-400" />
            <div className="flex flex-wrap items-center md:justify-between justify-center">
              <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                <div className="text-sm text-gray-600 font-semibold py-1">
                  Copyright © {new Date().getFullYear()}{" "}{" "} Yemeni American Resource Center
                </div>
              </div>
            </div>
          </div>
        </footer>
    );
  }
  export default Footer;