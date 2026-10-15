import path from 'path';
import webpack, { RuleSetRule } from 'webpack';
import { buildCssLoader } from '../build/loaders/buildCssLodaers';
import { BuildPaths } from '../build/types/config';

export default ({ config } : {config: webpack.Configuration}) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };

    config.resolve?.modules?.push(paths.src);
    config.resolve?.extensions?.push('.ts', '.tsx');
    config.module?.rules?.push(buildCssLoader(true));
    // eslint-disable-next-line no-param-reassign
    if (config.module) {
        // eslint-disable-next-line no-param-reassign
        config.module.rules = config.module?.rules?.map((rule: RuleSetRule | '...') => {
            if (typeof rule !== 'string' && /svg/.test(rule.test as string)) {
                return { ...rule, exclude: /\.svg$/i };
            }
            return rule;
        });
    }

    config.module?.rules?.push({
        test: /\.svg$/i,
        use: ['@svgr/webpack'],
    });

    return config;
};
