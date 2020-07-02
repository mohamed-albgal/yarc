import React from 'react'
import { ProgramsTemplate, programMdStyle } from  '../templates/programs-template'
import dock from '../images/oakland_dock.jpg'
import sq from '../images/Protruding-Squares.svg'

const ProgramPreviewTemplate = ({entry, widgetFor, getAsset}) => {
    const data = entry.get('data').toJS();
    const { title, description, programImage} = data;
    const imageSrc = programImage && getAsset(programImage).url
    return (
        <ProgramsTemplate 
        content={widgetFor('body')}
        mainText={title}
        heroBg={dock}
        subText={description}
        image={imageSrc}
        markdownStyle={programMdStyle}
        pageBg={sq}
        />
    )
}

export default ProgramPreviewTemplate