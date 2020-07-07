import React from 'react'
import MissionTemplate from '../templates/mission-template.js'

const MissionPreviewTemplate = ({entry, getAsset}) => {
    const data = entry.get('data').toJS();
    const { bgImage, ...rest} = data;
    const publicImage = getAsset(bgImage).url;
    console.log(publicImage)
    return (
        <MissionTemplate bgImage={publicImage} {...rest} />
    )
}

export default MissionPreviewTemplate