import React from 'react'
import { EventTemplate, eventMarkdownStyle } from  '../../templates/events-template'


const EventPreviewTemplate = ({entry, widgetFor, getAsset}) => {
    const imageAsset = getAsset(entry.getIn(['data', 'eventImage']))
    console.log(imageAsset)
    const otherImgOption = entry.getIn(['data', 'eventImage']);
    return(
        <EventTemplate 
            heroTitle={entry.getIn(['data', 'title'])}
            content={widgetFor('body')}
            eventImageFluid={imageAsset.path || otherImgOption}
            mdStyle={eventMarkdownStyle}
        />
    )}

export default EventPreviewTemplate