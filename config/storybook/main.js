const webpack = require('webpack');

module.exports = {
    stories: [
        '../../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
    ],
    framework: '@storybook/react',
    core: {
        builder: 'webpack5',
    },
    webpackFinal: async (config) => {
        config.plugins = [
            ...(config.plugins || []),
            new webpack.DefinePlugin({
                __IS_DEV__: JSON.stringify(true),
            }),
        ];

        return config;
    },
};
