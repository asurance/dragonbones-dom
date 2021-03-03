import { resolve } from 'path'
import { Configuration } from 'webpack'
const config: Configuration = {
    mode: 'production',
    entry: resolve(__dirname, '../libs/index.ts'),
    output: {
        path: resolve(__dirname, '..'),
        filename: 'index.js',
        libraryTarget: 'commonjs2',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.tsx?/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        transpileOnly: true,
                        configFile: resolve(__dirname, '../tsconfig.json')
                    }
                },
            }
        ]
    }
}
export default config