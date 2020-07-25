import React from 'react'
import { PageCore } from '../templates/home-template.js'
import { HomeCMSLayout } from '../components/Layout'

const HomePreviewTemplate = ({entry, getAsset}) => {
    const data = entry.get('data').toJS();
    
    const { bgImage, caption, head, section1, section2, section3, section4, section5 } = data;
    //get image location of hero
    const bgImagePre = getAsset(bgImage).url
    
    const section2Pre = () => {
        const { side, slantCard, linkText } = section2;
        const { body, head, image } = slantCard
        return (
            {
                side,
                slantCard: {
                    body, 
                    head,
                    image: getAsset(image).url,
                },
                linkText
            }
        )
    }

    const section3Pre = () =>  {
        const { linkText, image, side} = section3
        return(
            {
                linkText,
                image: getAsset(image).url,
                side,
            }
        )
    }

    const section4Pre = () => {
        const {head, linkText, caption, card1, card2,card3, card4} = section4;
        //created functions to make a local scope to pick off image member title from each card individually, otherwise can only pick off once since each card has a 'member, image, title' variable
        /**
         * cant do:
         *  const { member, image, title} = card1
         *  const { member, image, title} = card2
         *  const { member, image, title} = card3
         *  const { member, image, title} = card4
         * 
         * so the local scope helps
         * 
         * rest of code can most likely become cleaner with spread operator, but is breaking for some reason, revisit (?)
         * { 
         *  image: getAsset(image).url,
         *  ...card1
         * }
         *      ^ does not modify key image for some, reason, object remains unchanged, some bug or misunderstanding
         * 
         */
        const fixImage = ({ image, ...rest }) => ({
            image: getAsset(image).url,
            ...rest,
        })
        return (
            {
                head,
                linkText,
                caption,
                card1: fixImage(card1),
                card2: fixImage(card2),
                card3: fixImage(card3),
                card4: fixImage(card4)
            })
    }
    
    const coreProps = {caption,head, section1}
    console.log(bgImage)
    return (
        <HomeCMSLayout section5={section5} >
            <PageCore 
            fromCMS
            bgImage={bgImagePre}
            section2={section2Pre()}
            section3={section3Pre()}
            section4={section4Pre()}
            {...coreProps}
            />
        </HomeCMSLayout>

    )
}

export default HomePreviewTemplate