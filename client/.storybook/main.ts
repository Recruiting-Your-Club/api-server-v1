import type { StorybookConfig } from '@storybook/react-webpack5';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import path from 'path';
const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-webpack5-compiler-babel',
        '@storybook/addon-onboarding',
        '@storybook/addon-essentials',
        '@chromatic-com/storybook',
        '@storybook/addon-interactions',
        '@storybook/addon-themes',
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },
    docs: {
        autodocs: true,
    },
    webpackFinal: async (config) => {
        if (config.resolve) {
            config.resolve.plugins = [
                ...(config.resolve.plugins || []),
                new TsconfigPathsPlugin({
                    extensions: config.resolve.extensions,
                }),
            ];
            config.resolve.alias = {
                ...config.resolve.alias,
                '@styles': path.resolve(__dirname, 'src/styles'),
                '@assets': path.resolve(__dirname, 'src/assets'),
                '@components': path.resolve(__dirname, 'src/components'),
                '@constants': path.resolve(__dirname, 'src/constants'),
                '@layouts': path.resolve(__dirname, 'src/layouts'),
                '@pages': path.resolve(__dirname, 'src/pages'),
                '@types': path.resolve(__dirname, 'src/types'),
                '@utils': path.resolve(__dirname, 'src/utils'),
            };
        }
        // SVG 관련 설정 추가
        if (!config.module || !config.module.rules) {
            return config;
        }

        config.module.rules = [
            ...config.module.rules.map((rule) => {
                if (!rule || rule === '...') {
                    return rule;
                }

                if (rule.test && /svg/.test(String(rule.test))) {
                    return { ...rule, exclude: /\.svg$/i };
                }
                return rule;
            }),
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            },
        ];

        return config;
    },
};
export default config;
