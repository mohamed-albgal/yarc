import CMS from 'netlify-cms-app'
import BlogPreviewTemplate from './PreviewTemplates/BlogPreviewTemplate'

//CMS.registerPreviewTemplate('event', AboutPagePreview)
//CMS.registerPreviewTemplate('programs', ProductPagePreview)
CMS.init();
console.log(CMS, 'seems to be working');
CMS.registerPreviewTemplate('blog', BlogPreviewTemplate)
