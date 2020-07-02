import React from 'react'
import { ProgramsTemplate, programMdStyle } from  '../templates/programs-template'
import kids_learning from '../images/kids-learning.jpg'
import sq from '../images/Protruding-Squares.svg'

const ProgramPreviewTemplate = ({entry, widgetFor, getAsset}) => {
    const data = entry.get('data').toJS();
    const { title, description, programImage} = data;
    const imageSrc = programImage && getAsset(programImage).url
    return (
        <ProgramsTemplate 
        content={widgetFor('body')}
        mainText={title}
        heroBg={kids_learning}
        subText={description}
        image={imageSrc}
        markdownStyle={programMdStyle}
        pageBg={sq}
        />
    )
}

export default ProgramPreviewTemplate