import type { UserConfig } from '@commitlint/types';

export default defineConfig({
  extends: ['@commitlint/config-conventional'],
});

function defineConfig(config: UserConfig) {
  return config;
}
