import React from 'react'
import { CMSMissionTemplate } from '../templates/mission-template.js'

const MissionPreviewTemplate = ({entry, getAsset}) => {
    const data = entry.get('data').toJS();
    const { bgImage, ...rest} = data;
    console.log(bgImage, 'from raw');
    const publicImage = getAsset(bgImage).url;
    
    return (
        <CMSMissionTemplate bgImage={publicImage} {...rest} />
    )
}

export default MissionPreviewTemplate