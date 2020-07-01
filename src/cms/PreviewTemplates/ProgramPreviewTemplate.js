import React from 'react'
import { ProgramsTemplate, programMdStyle } from  '../../templates/programs-template'
import dock from '../../images/oakland_dock.jpg'
import sq from '../../images/Protruding-Squares.svg'

const ProgramPreviewTemplate = ({entry, widgetFor, getAsset}) => {
    const data = entry.get('data').toJS();
    const {title, image, } = data;
    return (
        <ProgramsTemplate 
        content={widgetFor('body')}
        mainText={title}
        heroBg={dock}
        programImageFluid={image}
        markdownStyle={programMdStyle}
        pageBg={sq}
        />
    )
}

export default ProgramPreviewTemplate