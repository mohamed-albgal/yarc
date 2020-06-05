import React from 'react'
import Navbar2 from '../components/Navbar2'
import Footer from '../components/Footer'
import Hero from '../components/Hero';
import jamb from '../assets/img/jambiyyahs.jpg'

const mt = `About The YAR Center`;
const cp = `Who We Are, What We Do, The Basics`;
export default () => {
return (
    <>
    <Navbar2 />
    <Hero bgImage={jamb} mainText={mt} caption={cp}/>
        <div className="container m-auto">
        <div className="text-xl text-gray-800">
        <p> "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
        laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto 
        beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut 
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, 
        sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat 
        voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit 
        laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit 
        qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum 
        fugiat quo voluptas nulla pariatur?" </p>
        </div>
        </div>
        <Footer />
    </>
    
)
}