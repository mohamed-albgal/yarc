import React from 'react'
import Img from 'gatsby-image'

const PreviewCompatibleImage = ({ image }) => {
  const style = "rounded-lg "
  if (image && image.childImageSharp) 
    return  <Img className={style} fluid={image.childImageSharp.fluid} alt={' fluid '} />

  if (typeof image === 'string')
    return <img className={style} src={image} alt={' '} />
  
  return null
}

export default PreviewCompatibleImage;