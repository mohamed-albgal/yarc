import React from 'react'


const MarkdownHTML = ({className, content}) => (
    <div className=" text-center relative z-10">
        <div className={` ${className}`} dangerouslySetInnerHTML={{__html:content}} />
    </div>
);

export const Content = ( {content, className} ) => (
    <div className={className}>
        {content}
    </div>
)

export default MarkdownHTML