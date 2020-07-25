import React from 'react'
//import { FaTwitter } from 'react-icons/fa'
import { FaBuilding } from 'react-icons/fa'
//import { FaYoutube } from 'react-icons/fa'
import { FaWhatsapp} from 'react-icons/fa'
//import { FaInstagram } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
//import { FaLinkedinIn } from 'react-icons/fa'
import { FcPhone } from 'react-icons/fc'
import { FcAddressBook } from 'react-icons/fc'
import ActionForm from '../homogenous/ActionForm'

// const form = {
//     head: "Interested In Working With Us?",
//     caption: "Complete this form and we will get back to you ASAP!",
//     nameLabel: "Name",
//     emailLabel: "Email",
//     messageLabel: 'Message',
//     sendLabel: 'Send',
//   }
//   const contact = {
//     head: "Contact",
//     addressLabel: 'Address',
//     address: "8001 Capwell Dr Oakland CA 94621",
//     phoneLabel: 'Phone',
//     phone: "510 200 4175",
//     emailLabel: 'Email', 
//     email: "info@yarcenter.org",
//   }
//   const social = {
//     head: "Let's keep in touch!",
//     caption: "Find us on any of these platforms, we'd love to connect!",
//     fbLinks:
//   }

const Footer = ({head, card1, card2, card3, form, contact, social}) => {
    return (
        <>
        <ActionForm {...form} />
        <footer className="relative bg-gray-300 pt-8 pb-6">
            
          <div className="container mx-auto px-4 sm:pt-4">
            <div className="sm:flex flex-wrap">
            <div className="sm:w-1/2 mb-6">
                  <div className="">
                    <div className="pb-3">
                      <div className="text-3xl font-semibold mb-4">
                        {contact.head}
                      </div>
                      {/* address */}
                      <a href={`https://maps.google.com/?q=${contact.address}`}>
                        <FaBuilding className=" inline-block text-gray-600 text-2xl" />
                        <div className="inline-block pl-1 text-xs text-gray-500 tracking-widest">{contact.addressLabel}</div>
                        <div className="inline-block pl-4 text-sm sm:text-base tracking-wide text-gray-700">{contact.address}</div>
                      </a>
                    </div>
                    {/* phone */}
                    <div className="pb-3">
                      
                      <a href={`tel:${contact.phone.replace(" ", "")}`}>
                        <FcPhone className=" inline-block text-2xl" />
                        <div className="inline-block text-xs pl-2 text-gray-500 tracking-widest">{contact.phoneLabel}</div>
                        <div className="inline-block pl-6 ml-1 text-sm sm:text-base tracking-wider text-gray-700">{contact.phone}</div>
                      </a>
                      
                    </div>
                    {/* email */}
                    <div className="pb-3">
                      
                      <a href={`mailto:${contact.email}`}>
                        <FcAddressBook className=" inline-block text-2xl" />
                        <div className="inline-block text-xs text-gray-500 pl-2 tracking-widest">{contact.emailLabel}</div>
                        <div className="inline-block pl-8 text-sm sm:text-base tracking-wider text-gray-700">{contact.email}</div>
                      </a>
                      
                    </div>
                    
                    
                      
                  </div>
              </div>
              <div className="sm:w-1/2 lg:w-6/12 sm:px-4">
                <h4 className="text-3xl mb-4 font-semibold">
                  {social.head}
                </h4>
                <h5 className="text-lg mt-0 mb-2 text-gray-700">
                  {social.caption}
                </h5>
                <div className="ml-0 flex flex-no-wrap">
                  {/* <button
                    className="bg-transparent sm:text-4xl text-2xl my-2 mr-3 ml-0" style={{color:'#1DA1F2'}}
                    type="button"
                  >
                  <FaTwitter />
                  </button> */}
                  <button
                    className="bg-transparent sm:text-4xl text-2xl my-2 mx-3" style={{color:'#3B5998'}}
                    type="button"
                  >
                    <a href={social.fbLink}>
                    <FaFacebook /></a>
                  </button>
                  {/* <button
                  className="bg-transparent sm:text-4xl text-2xl my-2 mx-3"
                    
                    type="button"
                  >
                    <FaInstagram style= {{
                      borderRadius:"7px",
                      color: 'white',
                      background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)',
                    }} />
                  </button>*/}
                  {/*<button
                    className="bg-transparent sm:text-4xl text-2xl my-2 mx-3" style={{color:'#FF0000'}}
                    type="button"
                  >
                    <FaYoutube />
                  </button> */}
                  <button
                    className="bg-transparent sm:text-4xl text-3xl my-2 mx-3" style={{color:'#4ac959'}}
                    type="button"
                  >
                    <a href={`https://api.whatsapp.com/send?phone=${contact.phone.replace(" ", "")}`}><FaWhatsapp /></a>
                  </button>
                  {/*<button
                    className="bg-transparent sm:text-4xl text-2xl my-2 mx-3" style={{color:'#0072b1'}}
                    type="button"
                  >
                    <FaLinkedinIn />
                  </button>*/}
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
        </>
    );
  }
  export default Footer;