import js from '@eslint/js';
import astro from 'eslint-plugin-astro';
import importX from 'eslint-plugin-import-x';
import globals from 'globals';
import ts from 'typescript-eslint';

export default ts.config(
  js.configs.recommended,
  // eslint-disable-next-line import-x/no-named-as-default-member
  ts.configs.recommended,
  // eslint-disable-next-line import-x/no-named-as-default-member
  astro.configs.recommended,
  // eslint-disable-next-line import-x/no-named-as-default-member
  astro.configs['jsx-a11y-recommended'],
  importX.flatConfigs.recommended,
  importX.flatConfigs.typescript,
  {
    rules: {
      'import-x/order': [
        'error',
        {
          alphabetize: {
            order: 'asc',
          },
        },
      ],
    },
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
);
