import React from 'react'
import { BlogTemplate, markdownStyle } from  '../templates/blog-template'

const BlogPreviewTemplate = ({entry, widgetFor}) => {
    const data = entry.get('data').toJS();
    const { author, title } = data;
    return (
        <BlogTemplate
            author={author}
            title={title}
            content={widgetFor('body')}
            mdStyle={markdownStyle}
        />
    )
}

export default BlogPreviewTemplate