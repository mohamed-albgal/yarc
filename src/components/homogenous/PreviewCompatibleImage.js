import React from 'react'
import Img from 'gatsby-image'

const PreviewCompatibleImage = ({ image }) => {
  if (image && image.childImageSharp) 
    return  <Img fluid={image.childImageSharp.fluid} alt={' fluid '} />

  if (typeof image === 'string')
    return <img  src={image} alt={' '} />
  
  return null
}

export default PreviewCompatibleImage;