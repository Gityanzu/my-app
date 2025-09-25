import { defineConfig, loadEnv } from "vite";
import autoprefixer from "autoprefixer"; // css自动添加兼容性前缀
import react from "@vitejs/plugin-react";
import createPlugins from "./vite/plugins";
import path from "path";

export default defineConfig(({ mode, command }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    // 部署生产环境和开发环境下的URL。
    // 默认情况下，vite 会假设你的应用是被部署在一个域名的根路径上
    base: env.VITE_APP_CONTEXT_PATH,
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "./"),
        "@": path.resolve(__dirname, "./src"),
        "@components": path.resolve(__dirname, "./src/components"),
        "@pages": path.resolve(__dirname, "./src/pages"),
        "@utils": path.resolve(__dirname, "./src/utils"),
      },
      extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
    },
    // https://cn.vitejs.dev/config/#resolve-extensions
    plugins: createPlugins(env, command === "build"),
    // plugins: [react()],
    server: {
      host: "0.0.0.0",
      port: Number(env.VITE_APP_PORT),
      open: true,
      proxy: {
        [env.VITE_APP_BASE_API]: {
          target: "http://localhost:3000",
          changeOrigin: true,
          ws: true,
          rewrite: (path) =>
            path.replace(new RegExp("^" + env.VITE_APP_BASE_API), ""),
        },
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          // additionalData: '@use "@/assets/styles/variables.module.scss as *";'
          javascriptEnabled: true,
          api: "modern-compiler",
        },
      },
      // postcss: {
      //   plugins: [
      //     // 浏览器兼容性
      //     autoprefixer(),
      //     {
      //       postcssPlugin: 'internal:charset-removal',
      //       AtRule: {
      //         charset: (atRule) => {
      //           atRule.remove();
      //         }
      //       }
      //     }
      //   ]
      // }
    },
    // 预编译
    optimizeDeps: {
      // include: [
      //   'react',
      //   'react-router',
      //   'redux',
      //   'axios',
      //   'echarts',
      //   'image-conversion',
      // ]
    },
  };
});
