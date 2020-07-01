import React from 'react'
import { ProgramsTemplate, programMdStyle } from  '../../templates/programs-template'
import dock from '../../images/oakland_dock.jpg'
import sq from '../../images/Protruding-Squares.svg'

const ProgramPreviewTemplate = ({entry, widgetFor, getAsset}) => {
    const data = entry.get('data').toJS();
    const imageAsset = getAsset(entry.getIn(['data', 'programImage']))
    const {title, image, } = data;
    console.log('from programpreview template')
    console.log(image)
    return (
        <ProgramsTemplate 
        content={widgetFor('body')}
        mainText={title}
        heroBg={dock}
        programImageFluid={imageAsset.path}
        markdownStyle={programMdStyle}
        pageBg={sq}
        />
    )
}

export default ProgramPreviewTemplate