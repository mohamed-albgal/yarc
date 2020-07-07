import CMS from 'netlify-cms-app'
import BlogPreviewTemplate from './BlogPreviewTemplate'
import ProgramPreviewTemplate from './ProgramPreviewTemplate';
import EventPreviewTemplate from './EventPreviewTemplate';
import HomePreviewTemplate from './HomePreviewTemplate';
import MissionPreviewTemplate from './MissionPreviewTemplate'

CMS.registerPreviewTemplate('blog', BlogPreviewTemplate)
CMS.registerPreviewTemplate('event', EventPreviewTemplate)
CMS.registerPreviewTemplate('programs', ProgramPreviewTemplate)
CMS.registerPreviewTemplate('index', HomePreviewTemplate)
CMS.registerPreviewTemplate('mission', MissionPreviewTemplate)

