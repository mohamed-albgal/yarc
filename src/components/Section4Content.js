import React from 'react'
import StaffCard from './homogenous/StaffDisplayCard'


export default ({section4}) => {
    
    const {card1, card2, card3, card4, caption, head} = section4;
    return (
        <div className=" relative pt-10 bottom-0">
            <div className="w-full px-4">
                    <p className="lg:text-6xl text-5xl font-bold text-center">
                        {head}
                    </p>
                    <p className="text-center text-lg text-gray-900 mb-10">
                        {caption}
                    </p>
            </div>
            <div className="flex flex-wrap">
                
                <StaffCard name={card1.member} title={card1.title} image={card1.image &&card1.image.publicURL || card1.image}/>
                <StaffCard name={card2.member} title={card2.title} image={card2.image &&card2.image.publicURL || card2.image}/>
                <StaffCard name={card3.member} title={card3.title} image={card3.image &&card3.image.publicURL || card3.image}/>
                <StaffCard name={card4.member} title={card4.title} image={card4.image &&card4.image.publicURL || card4.image} />
            </div>
        </div>
    );
}