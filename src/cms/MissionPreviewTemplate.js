import React from 'react'
import { PageContent } from '../templates/mission-template.js'
import { CMSLayout } from '../components/Layout'

const MissionPreviewTemplate = ({entry, getAsset}) => {
    const data = entry.get('data').toJS();
    const { bgImage, ...rest} = data;
    const publicImage = getAsset(bgImage).url;
    
    return (
        <CMSLayout bgGradientColor="blue-top" >
            <PageContent bgImage={publicImage} {...rest} />
        </CMSLayout>
    )
}

export default MissionPreviewTemplate