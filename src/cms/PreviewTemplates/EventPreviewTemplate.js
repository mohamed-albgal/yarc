import React from 'react'
import { EventTemplate } from  '../../templates/events-template'


const EventPreviewTemplate = ({entry, widgetFor}) => (
    <EventTemplate 
        heroTitle={entry.getIn(['data', 'title'])}
        content={widgetFor('body')}
        eventImageFluid={getAsset(entry.getIn(['data', 'eventImage']))}
    />
)

export default EventPreviewTemplate