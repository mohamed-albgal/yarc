import React from 'react'
import { LeadersTemplate, } from '../templates/leaders-template'
import dock from '../images/oakland_dock.jpg'

const LeaderPreviewTemplate = ( {entry, widgetFor, getAsset}) => {
    const data = entry.get('data').toJS();
    const { leader, startDate, image, caption } = data;
    const profileImage = getAsset(image).url;
    const props = { title:leader, caption, content: widgetFor('body'), profileImage: profileImage, heroBg:dock, date:startDate}
    return (
        <LeadersTemplate { ...props} />
    )
}

export default LeaderPreviewTemplate
