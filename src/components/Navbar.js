import React, { useState} from 'react'
import { Link } from 'gatsby'
import logo from "../assets/img/yarc_logo_english_horizontal.svg"




/*
    header will have links to:
        about
            about page with basic text info, header, footer
        mission
            text info, header, footer
        events
            past events
                event card:
                    page to event write up, details etc
            coming events:
                component, pull data from new events markdown 
                    event card:
                        info, duration, location, 
        our programs

        contact
        excecutive contributors
        staff contributors
*/
const Navbar = ({transparent}) => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
       <>
       <nav
       className={(transparent
           ? "top-0 absolute z-50 w-full"
           : "relative shadow-lg bg-indigo-800 shadow-lg") +
         " flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg"
       }
     >
       <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
         <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link to="/">
              <img heigth="150" width="150" src={logo} alt="logo"></img>
          </Link>
          
           <button
             className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
             type="button"
             onClick={() => setNavbarOpen(!navbarOpen)}
           >
           <svg className=" bg-white fill-current h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
           </button>
         </div>
         <div
           className={
             "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
             (navbarOpen ? " block rounded shadow-lg" : " hidden")
           }
           id="example-navbar-warning"
         >
           <ul className="flex flex-col lg:flex-row list-none mr-auto">
             <li className="flex items-center">
               <a
                 className={
                   (transparent
                     ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                     : "text-gray-800 hover:text-gray-600") +
                   " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                 }
                 href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/landing"
               >
                 <i
                   className={
                     (transparent
                       ? "lg:text-gray-300 text-gray-500"
                       : "text-gray-500") +
                     " far fa-file-alt text-lg leading-lg mr-2"
                   }
                 />{" "}
                 About
               </a>
             </li>
             <li className="flex items-center">
               <a
                 className={
                   (transparent
                     ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                     : "text-gray-800 hover:text-gray-600") +
                   " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                 }
                 href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/landing"
               >
                 <i
                   className={
                     (transparent
                       ? "lg:text-gray-300 text-gray-500"
                       : "text-gray-500") +
                     " far fa-file-alt text-lg leading-lg mr-2"
                   }
                 />{" "}
                 Mission
               </a>
             </li>
             <li className="flex items-center">
               <a
                 className={
                   (transparent
                     ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                     : "text-gray-800 hover:text-gray-600") +
                   " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                 }
                 href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/landing"
               >
                 <i
                   className={
                     (transparent
                       ? "lg:text-gray-300 text-gray-500"
                       : "text-gray-500") +
                     " far fa-file-alt text-lg leading-lg mr-2"
                   }
                 />{" "}
                 Blog
               </a>
             </li>
           </ul>
           <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
             <li className="flex items-center">
               <a
                 className={
                   (transparent
                     ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                     : "text-gray-800 hover:text-gray-600") +
                   " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                 }
                 href="#pablo"
               >
                 <i
                   className={
                     (transparent
                       ? "lg:text-gray-300 text-gray-500"
                       : "text-gray-500") +
                     " fab fa-facebook text-lg leading-lg "
                   }
                 />
                 <span className="lg:hidden inline-block ml-2">Share</span>
               </a>
             </li>

             <li className="flex items-center">
               <a
                 className={
                   (transparent
                     ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                     : "text-gray-800 hover:text-gray-600") +
                   " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                 }
                 href="#pablo"
               >
                 <i
                   className={
                     (transparent
                       ? "lg:text-gray-300 text-gray-500"
                       : "text-gray-500") +
                     " fab fa-twitter text-lg leading-lg "
                   }
                 />
                 <span className="lg:hidden inline-block ml-2">Tweet</span>
               </a>
             </li>

             <li className="flex items-center">
               <a
                 className={
                   (transparent
                     ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                     : "text-gray-800 hover:text-gray-600") +
                   " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                 }
                 href="#pablo"
               >
                 <i
                   className={
                     (transparent
                       ? "lg:text-gray-300 text-gray-500"
                       : "text-gray-500") +
                     " fab fa-github text-lg leading-lg "
                   }
                 />
                 <span className="lg:hidden inline-block ml-2">Star</span>
               </a>
             </li>
           </ul>
         </div>
       </div>
     </nav>
    </> 
    )
}
export default Navbar;