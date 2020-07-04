import React from 'react'
import HomePageTemplate from '../templates/home-template'

const HomePreviewTemplate = ({entry, getAsset}) => {
    const data = entry.get('data').toJS();
    console.log(data);
    const { bgImage, caption, head, section1, section2, section3, section4 } = data;
    const bgImagePre = getAsset(bgImage).url
    
    const section2Pre = {
        side: section2.side,
        slantCard: {
            body: section2.slantCard.body,
            head: section2.slantCard.head,
            image: getAsset(section2.slantCard.image).url,
        },
        linkText: section2.linkText,
    }

    const section3Pre = {
        linkText: section3.linkText,
        image: getAsset(section3.image).url,
        side: section3.side,
    }

    const section4Pre = {
        head: section4.head,
        linkText: section4.linkText,
        caption: section4.caption,
        card1: {
            member: section4.card1.member,
            title: section4.card1.title,
            image: getAsset(section4.card1.image).url,
        },
        card2: {
            member: section4.card2.member,
            title: section4.card2.title,
            image: getAsset(section4.card2.image).url,
        },
        card3: {
            member: section4.card3.member,
            title: section4.card3.title,
            image: getAsset(entry.getIn(['data', 'section4', 'card3','image'])).url,
        },
        card4: {
            member: section4.card4.member,
            title: section4.card4.title,
            image: getAsset(section4.card4.image).url,
        },
    }

    console.log(getAsset(entry.getIn(['data','section4','card1','image'])).url, 'right?')
    


    
    return (
        <HomePageTemplate 
        bgImage={bgImagePre}
        caption={caption}
        head={head}
        section1={section1}
        section2={section2Pre}
        section3={section3Pre}
        section4={section4Pre}
          />

    )
}

export default HomePreviewTemplate