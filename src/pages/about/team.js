import React from 'react'
import useTranslations from '../../hooks/useTranslations'
import TeamPageTemplate from '../../templates/team-template'

export default () => {
  const translatedText = useTranslations("team");
  
  const { memberCards } = translatedText;
  const cards = Object.keys(memberCards).map(card => memberCards[card]);
  const props = { cards, ...translatedText }
    return (
        <TeamPageTemplate {...props } />
    )
}


