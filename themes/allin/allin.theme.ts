// The allin theme. `astryx experimental theme editor` wrote this file once and never changes it again.
// The checked settings live in allin.settings.json and the generated allin.settings.ts;
// change them with `astryx experimental theme editor set allin ...`. Add your own changes below: they win over the settings.
import {defineTheme} from '@astryxdesign/core/theme';
import {allinSettings} from './allin.settings';

export const allinTheme = defineTheme({
  extends: allinSettings,
  name: 'allin',
});
