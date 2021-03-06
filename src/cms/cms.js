import CMS from 'netlify-cms-app'
import BlogPreviewTemplate from './BlogPreviewTemplate'
import ProgramPreviewTemplate from './ProgramPreviewTemplate';
import EventPreviewTemplate from './EventPreviewTemplate';
import HomePreviewTemplate from './HomePreviewTemplate';
import MissionPreviewTemplate from './MissionPreviewTemplate'
import TeamPreviewTemplate from './TeamPreviewTemplate'
import LeaderPreviewTemplate from './LeaderPreviewTemplate';


CMS.registerPreviewTemplate('blog', BlogPreviewTemplate)
CMS.registerPreviewTemplate('event', EventPreviewTemplate)
CMS.registerPreviewTemplate('programs', ProgramPreviewTemplate)
CMS.registerPreviewTemplate('index', HomePreviewTemplate)
CMS.registerPreviewTemplate('mission', MissionPreviewTemplate)
CMS.registerPreviewTemplate('team', TeamPreviewTemplate)
CMS.registerPreviewTemplate('leaders', LeaderPreviewTemplate)

