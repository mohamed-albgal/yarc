import React from 'react';
import Hero from '../components/homogenous/Hero'
import NavBar from '../components/homogenous/NavBar'
import testImage from '../assets/img/bay_bridge_ariel.jpg'
export default () => {
    return (
        <>
            <Hero mainText={`Test Data Goes Here`} caption={`UI needs to be better`} heroImage={testImage} />
            <NavBar />
        </>
    )
}
