import React from 'react'
import TeamPageTemplate from '../templates/team-template.js'

const TeamPreviewTemplate = ({entry, getAsset}) => {
    const data = entry.get('data').toJS();
    const { heroImage, memberCards, ...rest } = data;
    const cards = []
    for (let card in memberCards) {
        memberCards[card].image = getAsset(memberCards[card].image).url
        cards.push(memberCards[card])
    }
    const properties = {cards, ...rest}
    return (
        <TeamPageTemplate heroImage={getAsset(heroImage).url} {...properties } />
    )
}

export default TeamPreviewTemplate