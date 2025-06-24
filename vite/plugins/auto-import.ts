import AutoImport from 'unplugin-auto-import/vite';

export default (path: any) => {
  return AutoImport({
    // 自动导入 React 相关函数
    imports: ['react'],
    eslintrc: {
      enabled: true,
      filepath: './.eslintrc-auto-import.json',
      globalsPropValue: true
    },
    vueTemplate: true, // 是否在 react 模板中自动导入
    dts: path.resolve(path.resolve(__dirname, '../../src'), 'types', 'auto-imports.d.ts')
  });
};
