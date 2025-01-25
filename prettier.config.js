/** @type {Config} */
export default {
  arrowParens: 'avoid',
  singleQuote: true,

  plugins: ['prettier-plugin-astro'],

  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};

/** @import { Config } from 'prettier' */
