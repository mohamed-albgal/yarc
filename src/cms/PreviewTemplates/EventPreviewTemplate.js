import React from 'react'
import { eventMarkdownStyle, EventTemplate } from  '../../templates/events-template'


const EventPreviewTemplate = ({entry, widgetFor}) => (
    <EventTemplate 
        heroTitle={entry.getIn(['data', 'title'])}
        content={widgetFor('body')}
        eventImageFluid={widgetFor('eventImage')}
        mdStyle={eventMarkdownStyle}
    />
)

export default EventPreviewTemplate