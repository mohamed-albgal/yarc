import React from 'react'
import { ProgramsTemplate, programMdStyle } from  '../../templates/programs-template'
import dock from '../../images/oakland_dock.jpg'
import sq from '../../images/Protruding-Squares.svg'

const ProgramPreviewTemplate = ({entry, widgetFor, getAsset}) => {
    const data = entry.get('data').toJS();
    console.log(data);
    const {body, title, image, } = data;
    return (
        <ProgramsTemplate 
        content={body}
        mainText={title}
        heroBg={dock}
        programImageFluid={image}
        markdownStyle={programMdStyle}
        pageBg={sq}
        />
    )
}

export default ProgramPreviewTemplate