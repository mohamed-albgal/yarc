import React from 'react'
import { FaTwitter } from 'react-icons/fa'
import { FaAddressBook } from 'react-icons/fa'
import { FaBuilding } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
import { FaWhatsapp} from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { FcPhone } from 'react-icons/fc'
import { FcAddressBook } from 'react-icons/fc'


const Footer = () => {
    return (
        <footer className="relative bg-gray-300 pt-8 pb-6">
            
          <div className="container mx-auto px-4 sm:pt-4">
            <div className="sm:flex flex-wrap">
            <div className="sm:w-1/2 mb-6">
                  <div className="">
                    <div className="pb-3">
                      <div className="text-3xl font-semibold mb-4">
                        Contact
                      </div>
                      {/* address */}
                      <a href="https://maps.google.com/?q=8001 Capwell Dr Oakland CA 94621">
                        <FaBuilding className=" inline-block text-gray-600 text-2xl" />
                        <div className="inline-block text-xs text-gray-500 tracking-widest">Address</div>
                        <div className="inline-block pl-4 text-sm sm:text-base tracking-wide text-gray-700"> 8001 Capwell Dr Oakland CA 94621</div>
                      </a>
                    </div>
                    {/* phone */}
                    <div className="pb-3">
                      
                      <a href="tel:5102104175">
                        <FcPhone className=" inline-block text-2xl" />
                        <div className="inline-block text-xs text-gray-500 tracking-widest">Phone</div>
                        <div className="inline-block pl-6 ml-1 text-sm sm:text-base tracking-wider text-gray-700">510-210-4175</div>
                      </a>
                      
                    </div>
                    {/* email */}
                    <div className="pb-3">
                      
                      <a href="mailto:yayouthcenter@gmail.com">
                        <FcAddressBook className=" inline-block text-2xl" />
                        <div className="inline-block text-xs text-gray-500 tracking-widest">Email</div>
                        <div className="inline-block pl-8 text-sm sm:text-base tracking-wider text-gray-700">info@yarc.org</div>
                      </a>
                      
                    </div>
                    
                    
                      
                  </div>
              </div>
              <div className="sm:w-1/2 lg:w-6/12 sm:px-4">
                <h4 className="text-3xl mb-4 font-semibold">
                  Let's keep in touch!
                </h4>
                <h5 className="text-lg mt-0 mb-2 text-gray-700">
                  Find us on any of these platforms, we'd love to connect!
                </h5>
                <div className="ml-0 flex flex-no-wrap">
                  <button
                    className="bg-transparent sm:text-4xl text-2xl my-2 mr-3 ml-0" style={{color:'#1DA1F2'}}
                    type="button"
                  >
                    <FaTwitter />
                  </button>
                  <button
                    className="bg-transparent sm:text-4xl text-2xl my-2 mx-3" style={{color:'#3B5998'}}
                    type="button"
                  >
                    <FaFacebook />
                  </button>
                  <button
                  className="bg-transparent sm:text-4xl text-2xl my-2 mx-3"
                    
                    type="button"
                  >
                    <FaInstagram style= {{
                      borderRadius:"7px",
                      color: 'white',
                      background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)',
                    }} />
                  </button>
                  <button
                    className="bg-transparent sm:text-4xl text-2xl my-2 mx-3" style={{color:'#FF0000'}}
                    type="button"
                  >
                    <FaYoutube />
                  </button>
                  <button
                    className="bg-transparent sm:text-4xl text-3xl my-2 mx-3" style={{color:'#4ac959'}}
                    type="button"
                  >
                    <FaWhatsapp />
                  </button>
                  <button
                    className="bg-transparent sm:text-4xl text-2xl my-2 mx-3" style={{color:'#0072b1'}}
                    type="button"
                  >
                    <FaLinkedinIn />
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