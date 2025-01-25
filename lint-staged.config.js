export default defineConfig({
  '*.{astro,ts}': ['eslint --fix', 'prettier --write'],
  '*.css': ['stylelint --fix', 'prettier --write'],
  '!(*.{astro,css,ts})': ['prettier --ignore-unknown --write'],
});

/** @param {Configuration} config */
function defineConfig(config) {
  return config;
}

/** @import { Configuration } from 'lint-staged' */
