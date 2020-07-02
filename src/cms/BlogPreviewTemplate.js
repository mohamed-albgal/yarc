import React from 'react'
import { BlogTemplate, markdownStyle } from  '../templates/blog-template'

const BlogPreviewTemplate = ({entry, widgetFor}) => (
    <BlogTemplate 
        author={entry.getIn(['data', 'author'])}
        title={entry.getIn(['data', 'title'])}
        content={widgetFor('body')}
        mdStyle={markdownStyle}
    />
)

export default BlogPreviewTemplate