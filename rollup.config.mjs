import { babel } from '@rollup/plugin-babel'
import terser from '@rollup/plugin-terser'
import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)
const pkg = require('./package.json')

export default [
  // cjs & esm & browser
  // because of no import and export in this lib, we can use esm for cjs & browser
  {
    input: 'src/index.js',
    output: {
      file: pkg.main,
      format: 'es',
      sourcemap: true,
    },
    plugins: [],
  },
  // browser minify
  {
    input: 'src/index.js',
    output: {
      name: pkg.name,
      file: pkg.main.replace('.js', '.min.js'),
      format: 'umd',
      sourcemap: true,
    },
    plugins: [
      babel({
        babelHelpers: 'bundled',
        presets: ['@babel/preset-env'],
      }),
      terser(),
    ],
  },
]
