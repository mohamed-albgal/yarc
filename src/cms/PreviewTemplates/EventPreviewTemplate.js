import React from 'react'
import { EventTemplate, eventMarkdownStyle } from  '../../templates/events-template'


const EventPreviewTemplate = ({entry, widgetFor, getAsset}) => (
    <EventTemplate 
        heroTitle={entry.getIn(['data', 'title'])}
        content={widgetFor('body')}
        eventImageFluid={getAsset(entry.getIn(['data', 'eventImage']))}
        mdStyle={eventMarkdownStyle}
    />
)

export default EventPreviewTemplate