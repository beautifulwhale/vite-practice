import { defineConfig, normalizePath } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import postcssPresetEnv from "postcss-preset-env";
// import autoprefixer from 'autoprefixer'
// import viteEslint from "vite-plugin-eslint";
import svgr from "vite-plugin-svgr";
import viteImagemin from 'vite-plugin-imagemin';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

const variablePath = normalizePath(path.resolve("./src/assets/variable.scss"));

// https://vitejs.dev/config/
export default defineConfig({
  // root: path.resolve(__dirname, 'src'),
  // base: 'https://www.baidu.com',
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
    // viteEslint({
    //   cache: false, // 禁用缓存
    //   include: ["src/**/*.ts", "src/**/*.tsx", "src/**/*.js", "src/**/*.jsx"],
    //   exclude: ["node_modules"]
    // }),
    svgr(),
    viteImagemin({
      optipng: {
        optimizationLevel: 5
      },
      pngquant: {
        quality: [0.3, 0.8]
      },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox'
          },
          {
            name: 'removeEmptyAttrs',
            active: false
          }
        ]
      },
      gifsicle: {
        optimizationLevel: 7
      },
      mozjpeg: {
        quality: 70
      }
    }),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(__dirname, 'src/assets/icons')]
    })
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
  },
  // 加载其他格式的静态资源
  assetsInclude: ['.gltf'],
  build: {
    // assetsInlineLimit: 350 * 1024
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          // 雪碧图svg不携带hash，否则不能正常展示
          if (assetInfo.name && assetInfo.name.endsWith('.svg')) {
            return 'assets/icons/[name][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    }
  }
});
