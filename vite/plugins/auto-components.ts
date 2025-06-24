import Components from 'unplugin-react-components/vite';
import { AntDesignMobileResolver } from 'unplugin-react-components/resolvers';

export default (path: any) => {
  return Components({
    resolvers: [
      // 自动导入 AntDesignMobile 组件
      AntDesignMobileResolver(),
      // 自动注册图标组件
      // IconsResolver({
      //   enabledCollections: ['ep']
      // })
    ],
    dts: path.resolve(path.resolve(__dirname, '../../src'), 'types', 'components.d.ts')
  });
};
