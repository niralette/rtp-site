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
    'selector-class-pattern': [
      '^[a-z]([-]?[a-z0-9]+)*(__[a-z0-9]([-]?[a-z0-9]+)*)?(--[a-z0-9]([-]?[a-z0-9]+)*)?$',
    ],
  },
});

/** @param {Config} config */
function defineConfig(config) {
  return config;
}

/** @import { Config } from 'stylelint' */
