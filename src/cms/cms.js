import CMS from 'netlify-cms-app'
import BlogPreviewTemplate from './BlogPreviewTemplate'
import ProgramPreviewTemplate from './ProgramPreviewTemplate';
import EventPreviewTemplate from './EventPreviewTemplate';


CMS.registerPreviewTemplate('blog', BlogPreviewTemplate)
CMS.registerPreviewTemplate('event', EventPreviewTemplate)
CMS.registerPreviewTemplate('programs', ProgramPreviewTemplate)

