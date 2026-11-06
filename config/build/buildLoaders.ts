import webpack from 'webpack';
import { buildBabelLoader } from './loaders/buidBabalLoader';
import { buildCssLoader } from './loaders/buildCssLodaers';
import { BuildOptions } from './types/config';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const { isDev } = options;

    const svgLoader = {
        test: /\.svg$/i,
        use: ['@svgr/webpack'],
    };

    const babelLoader = buildBabelLoader(options);
    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const scssLoader = buildCssLoader(isDev);

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    return [
        fileLoader,
        svgLoader,
        babelLoader,
        typescriptLoader,
        scssLoader,
    ];
}
