import React from 'react'
import { ProgramsTemplate } from  '../../templates/programs-template'
import dock from '../../images/oakland_dock.jpg'

const ProgramPreviewTemplate = ({entry, widgetFor, getAsset}) => (
    <ProgramsTemplate 
        content={widgetFor('body')}
        mainText={entry.getIn(['data', 'title'])}
        heroBg={dock}
        programImageFluid={getAsset(entry.getIn(['data', 'programImage']))}
    />
)

export default ProgramPreviewTemplate