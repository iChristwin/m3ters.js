import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";

export default [
  {
    input: "src/index.js",
    external: [/@babel\/core/, /@babel\/preset-react/, /react/, /react-dom/],
    output: [
      {
        file: "dist/index.cjs",
        format: "cjs",
      },
      {
        file: "dist/index.js",
        format: "es",
        exports: "named",
      },
    ],
    plugins: [
      resolve({
        moduleDirectories: ["node_modules", "src"],
        extensions: [".js", ".jsx"],
      }),
      commonjs(),
      babel({
        exclude: "node_modules/**",
        presets: ["@babel/preset-react"],
        babelHelpers: "bundled",
      }),
      terser(),
    ],
  },
];
