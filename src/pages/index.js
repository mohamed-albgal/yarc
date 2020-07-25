import React from      "react"
import useTranslations from '../hooks/useTranslations'
import HomePageTemplate from '../templates/home-template'

export default () => {
  const translatedText = useTranslations("index");
  
  return (
    <HomePageTemplate {...translatedText} />
  )
}