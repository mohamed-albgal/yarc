import React from 'react'
import { ProgramsTemplate, programMdStyle } from  '../templates/programs-template'
import dock from '../images/oakland_dock.jpg'
import sq from '../images/Protruding-Squares.svg'

const ProgramPreviewTemplate = ({entry, widgetFor, getAsset}) => {
    const data = entry.get('data').toJS();
    const {title, programImage, } = data;
    console.log("data----->>>>>>>>>>>>")
    console.log(...entry.toJS().data)
    const ass = getAsset(entry.getIn(['data', 'programImage']));
    console.log( "asset.fileObj.name::::::::::")
    console.log(ass);
    console.log("img from data 1:::::::::::::::")
    console.log(programImage)
    console.log('img from data2, should be identical to data 1::::::::::::::')
    console.log(entry.getIn(['data', 'programImage']))
    return (
        <ProgramsTemplate 
        content={widgetFor('body')}
        mainText={title}
        heroBg={dock}
        programImageFluid={programImage}
        markdownStyle={programMdStyle}
        pageBg={sq}
        />
    )
}

export default ProgramPreviewTemplate