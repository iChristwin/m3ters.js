import esbuild from "rollup-plugin-esbuild";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import dts from "rollup-plugin-dts";

export default [
  {
    input: "src/index.ts",
    external: [/react/, /react-dom/],
    output: [
      {
        dir: "dist/cjs/",
        format: "cjs",
        sourcemap: true,
        entryFileNames: "[name].cjs",
      },
      {
        dir: "dist/esm/",
        format: "esm",
        exports: "named",
        sourcemap: true,
        entryFileNames: "[name].js",
      },
    ],
    plugins: [
      resolve({
        moduleDirectories: ["node_modules", "src"],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      }),
      commonjs(),
      esbuild({
        include: /\.[jt]sx?$/,
        minify: true,
        jsx: "automatic",
        target: "es2018",
      }),
    ],
  },

  {
    input: "src/index.ts",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [dts()],
  },
];
