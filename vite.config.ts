import { defineConfig, normalizePath } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import postcssPresetEnv from "postcss-preset-env";
// import autoprefixer from 'autoprefixer'
import viteEslint from "vite-plugin-eslint";
import svgr from "vite-plugin-svgr";

const variablePath = normalizePath(path.resolve("./src/assets/variable.scss"));

// https://vitejs.dev/config/
export default defineConfig({
  // root: path.resolve(__dirname, 'src'),
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "src/assets")
    }
  },
  plugins: [
    react({
      babel: {
        plugins: ["babel-plugin-styled-components"]
      }
    }),
    viteEslint({
      cache: false, // 禁用缓存
      include: ["src/**/*.ts", "src/**/*.tsx", "src/**/*.js", "src/**/*.jsx"],
      exclude: ["node_modules"]
    }),
    svgr()
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "${variablePath}" as *;`
      }
    },
    modules: {
      // css module 生成hash格式
      generateScopedName: "[name]__[local]___[hash:base64:5]"
    },
    postcss: {
      plugins: [
        // autoprefixer({
        //   overrideBrowserslist: ['Chrome > 40', 'ff > 31', 'ie 11']
        // })
        postcssPresetEnv()
      ]
    }
  }
});
