const viteTsconfig = require('vite-tsconfig-paths');
const tsconfigPaths = viteTsconfig.default;
const { mergeConfig } = require('vite');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
  },
  features: {
    storyStoreV7: true,
  },
  async viteFinal(config) {
    // This is a temporary workaround for vite to hnadle absolute pathing
    // will be fixed in 7.0 https://github.com/storybookjs/storybook/issues/18891#issuecomment-1254390167
    return mergeConfig(config, {
      plugins: [tsconfigPaths()],
    });
  },
};
