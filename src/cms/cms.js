import CMS from 'netlify-cms-app'
import BlogPreviewTemplate from './PreviewTemplates/BlogPreviewTemplate'

//CMS.registerPreviewTemplate('event', AboutPagePreview)
//CMS.registerPreviewTemplate('programs', ProductPagePreview)
console.log('test visibility');
CMS.registerPreviewTemplate('blog', BlogPreviewTemplate)
