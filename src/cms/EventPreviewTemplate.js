import React from 'react'
import { EventTemplate, eventMarkdownStyle } from  '../templates/events-template.js'
import bayView from '../images/bay_view.jpg'


const EventPreviewTemplate = ({entry, widgetFor, getAsset}) => {
    const data = entry.get('data').toJS();
    const { title, eventImage, description } = data;
    const imgPublicURL =  eventImage && getAsset(eventImage).url
    
    return (
        <EventTemplate 
            heroTitle={title}
            content={widgetFor('body')}
            image={imgPublicURL}
            mdStyle={eventMarkdownStyle}
            description={description}
            heroBg={bayView}
        />
    )}

export default EventPreviewTemplate