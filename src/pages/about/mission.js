import React from 'react'
import useTranslations from '../../hooks/useTranslations'
import MissionTemplate from '../../templates/mission-template'

export default () => {
  const translatedText = useTranslations("mission");
  return (
      <MissionTemplate { ...translatedText}/>   
  )
}