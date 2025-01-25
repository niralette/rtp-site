export default defineConfig({
  extends: ['stylelint-config-standard'],
  plugins: ['stylelint-order'],

  rules: {
    'order/order': [
      ['custom-properties', 'declarations', 'at-rules', 'rules'],
      {
        unspecified: 'bottom',
      },
    ],
    'order/properties-alphabetical-order': true,
  },
});

/** @param {Config} config */
function defineConfig(config) {
  return config;
}

/** @import { Config } from 'stylelint' */
