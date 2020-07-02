import React from 'react'
import { EventTemplate, eventMarkdownStyle } from  '../templates/events-template'


const EventPreviewTemplate = ({entry, widgetFor, getAsset}) => {
    const data = entry.get('data').toJS();
    const { title, eventImage, description } = data;
    const imgPath =  eventImage && getAsset(eventImage).url
    
    return (
        <EventTemplate 
            heroTitle={title}
            content={widgetFor('body')}
            image={imgPath}
            mdStyle={eventMarkdownStyle}
            description={description}
        />
    )}

export default EventPreviewTemplate