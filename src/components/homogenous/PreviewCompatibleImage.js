import React from 'react'
import Img from 'gatsby-image'

const PreviewCompatibleImage = ({ image }) => {
  if (image.aspectRatio) {
    return (
      <Img fluid={image} alt={' fluid '} />
    )
  }

  if (typeof imageInfo === 'string')
    return <img  src={image} alt={alt} />
  return null
}

export default PreviewCompatibleImage;