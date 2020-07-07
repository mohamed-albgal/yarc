import React from 'react'
import { BlogTemplate, markdownStyle } from  '../templates/blog-template.js'
import dock from '../images/oakland_dock.jpg'

const BlogPreviewTemplate = ({entry, widgetFor}) => {
    const data = entry.get('data').toJS();
    const { author, title } = data;
    return (
        <BlogTemplate
            author={author}
            title={title}
            content={widgetFor('body')}
            mdStyle={markdownStyle}
            heroBg={dock}
        />
    )
}

export default BlogPreviewTemplate