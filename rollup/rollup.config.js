import json from "rollup-plugin-json";
import resolve from "rollup-plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import babel from "rollup-plugin-babel";
import { version } from './package.json';

export default {
  input: "src/main.js",
  output: [
    {
      file: "dist/index-cjs.js",
      format: "cjs",
      chunkFileNames: "[name]-[hash].js",
      banner: '/* Drex version ' + version + ' */',
    },
    {
      file: "dist/index-es.js",
      format: "esm",
      chunkFileNames: "[name]-[hash].js",
      banner: '/* Drex version ' + version + ' */',
    },
    {
      file: "dist/bundle.min.js",
      format: "cjs",
      name: "version",
      plugins: [terser()],
      sourcemap: true,
    },
  ],
  plugins: [
    json(),
    resolve({
      // 将自定义选项传递给解析插件
      customResolveOptions: {
        moduleDirectory: "node_modules",
      },
    }),
    babel({
      exclude: "node_modules/**", // 只编译我们的源代码
    }),
  ],
  external: ["react"],
};
