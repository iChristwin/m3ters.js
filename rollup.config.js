import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'src/index.js', // Entry point
  output: {
    file: 'dist/index.js', // Output bundle
    format: 'cjs', // CommonJS module format
    sourcemap: true, // Generate sourcemaps
  },
  plugins: [
    resolve(),
    commonjs(),
  ],
};
