import CMS from 'netlify-cms-app'
import BlogPreviewTemplate from './PreviewTemplates/BlogPreviewTemplate'
import ProgramPreviewTemplate from './PreviewTemplates/ProgramPreviewTemplate';
import EventPreviewTemplate from './PreviewTemplates/EventPreviewTemplate';
import styles from '../styles/site.css'

CMS.registerPreviewStyle(styles)
CMS.registerPreviewTemplate('blog', BlogPreviewTemplate)
CMS.registerPreviewTemplate('event', EventPreviewTemplate)
CMS.registerPreviewTemplate('programs', ProgramPreviewTemplate)

