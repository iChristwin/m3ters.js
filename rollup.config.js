import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";

export default [
  {
    input: "src/index.js",
    external: ["react", "react-dom", "seedrandom"],
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
      babel({
        exclude: "node_modules/**",
        presets: ["@babel/preset-react"],
        babelHelpers: "bundled",
      }),
      resolve({
        moduleDirectories: ["node_modules", "src"],
        extensions: [".js", ".jsx"],
      }),
      commonjs(),
      terser(),
    ],
  },
];
