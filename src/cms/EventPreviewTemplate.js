import React from 'react'
import { EventTemplate, eventMarkdownStyle } from  '../templates/events-template'


const EventPreviewTemplate = ({entry, widgetFor, getAsset}) => {
    const data = entry.get('data').toJS();
    const {title, eventImage, } = data;
    const imgPath = (getAsset(eventImage).path)
    return(
        <EventTemplate 
            heroTitle={title}
            content={widgetFor('body')}
            eventImageFluid={imgPath}
            mdStyle={eventMarkdownStyle}
        />
    )}

export default EventPreviewTemplate