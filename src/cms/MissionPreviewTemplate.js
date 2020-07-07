import React from 'react'
import MissionTemplate from '../templates/MissionTemplate'

const MissionPreviewTemplate = ({entry, getAsset}) => {
    const data = entry.get('data').toJS();
    console.log(data, "from mission");
    const { bgImage, ...rest} = data;
    const publicImage = getAsset(bgImage).url;
    return (
        <MissionTemplate bgImage={publicImage} {...rest} />
    )
}

export default MissionPreviewTemplate