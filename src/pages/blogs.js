
import React, {useState} from 'react'
import { Link } from 'gatsby'
import logo from "../assets/img/duo_logo.svg"
import Navbar from '../components/homogenous/NavBar'
import Hero from '../components/homogenous/Hero'
import image from '../assets/img/youth_sunset.jpg'

export default () => {
    return (
        <div>
            <Navbar  />
            <Hero caption="changeNav, merge ui-ref to master" mainText="Bismillah" heroImage={image} />
            
            
        </div>

    )
}

/**
 * flex box 1/2 width on mobile go columns
 *  img
 *  hamburger
 *  flexbox on mobile go columns
 *      links 1-4
 * 
 * 
 */