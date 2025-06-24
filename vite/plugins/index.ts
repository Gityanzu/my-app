import react from '@vitejs/plugin-react';
// import vueDevTools from 'vite-plugin-vue-devtools';

import createAutoImport from './auto-import';
import createComponents from './auto-components';
// import createIcons from './icons';
// import createSvgIconsPlugin from './svg-icon';
// import createCompression from './compression';
// import createSetupExtend from './setup-extend';
import path from 'path';

export default (viteEnv: any, isBuild = false): [] => {
  const vitePlugins: any = [];
  vitePlugins.push(react());
  // vitePlugins.push(vueDevTools());
  vitePlugins.push(createAutoImport(path));
  vitePlugins.push(createComponents(path));
  // vitePlugins.push(createCompression(viteEnv));
  // vitePlugins.push(createIcons());
  // vitePlugins.push(createSvgIconsPlugin(path));
  // vitePlugins.push(createSetupExtend());
  return vitePlugins;
};
