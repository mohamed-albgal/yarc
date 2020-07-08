import React from 'react'

const generalStyle = " text-center relative z-10"
const MarkdownHTML = ({className,containerStyle, content}) => (
    <div className={containerStyle || generalStyle}>
        <div className={` ${className}`} dangerouslySetInnerHTML={{__html:content}} />
    </div>
);

export const Content = ( {content, containerStyle,  className} ) => (
    <div className={containerStyle || generalStyle}>
        <div className={`${className}`}>
            {content}
        </div>
    </div>
)

export default MarkdownHTML