import React from 'react'
import Hero from './homogenous/Hero'
import NavBar from './homogenous/NavBar'


const Header = ({caption, mainText, heroImage, SvgSep}) => {

    
    //this exports a NavBar + Hero component , modularize to make ideal
    //props come from layout for page making layout, it should know what image, caption and main text it wants;
    return (
        <div>
            <NavBar />
            <Hero  mainText={open? mainText:""} caption={open?caption:""} heroImage={heroImage} SvgSep={SvgSep}/>
        </div>
    )
};


 export default Header;