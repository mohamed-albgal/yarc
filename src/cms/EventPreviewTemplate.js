import React from 'react'
import { EventTemplate, eventMarkdownStyle } from  '../templates/events-template'


const EventPreviewTemplate = ({entry, widgetFor, getAsset}) => {
    const data = entry.get('data').toJS();
    const imgPath = (getAsset(entry.getIn(['data', 'eventImage'])))
    console.log(imgPath)
    
    return (
        <EventTemplate 
            heroTitle={data.title}
            content={widgetFor('body')}
            image={imgPath.url}
            mdStyle={eventMarkdownStyle}
        />
    )}

export default EventPreviewTemplate