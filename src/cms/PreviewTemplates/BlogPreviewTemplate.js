import React from 'react'
import { BlogTemplate, markdownStyle } from  '../../templates/blog-template'
import dock from '../../images/oakland_dock.jpg'

const BlogPreviewTemplate = ({entry, widgetFor}) => (
    <BlogTemplate 
        author={entry.getIn(['data', 'author'])}
        title={entry.getIn(['data', 'title'])}
        content={widgetFor('body')}
        heroBg={dock}
        mdStyle={markdownStyle}
    />
)

export default BlogPreviewTemplate