import React from 'react'
import { PageCore } from '../templates/team-template.js'
import { CMSLayout } from '../components/Layout'

const TeamPreviewTemplate = ({entry, getAsset}) => {
    const data = entry.get('data').toJS();
    const { heroImage, memberCards, ...rest } = data;
    const cards = []
    for (let card in memberCards) {
        memberCards[card].image = getAsset(memberCards[card].image).url
        cards.push(memberCards[card])
    }
    
    const imgURL = getAsset(heroImage).url
    const properties = {cards, ...rest}
    
    return (
        <CMSLayout bgGradientColor="yellow-green" >
            <PageCore heroImage={imgURL} {...properties } />
        </CMSLayout>
    )
    
}

export default TeamPreviewTemplate