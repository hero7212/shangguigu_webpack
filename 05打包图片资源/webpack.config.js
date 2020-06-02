const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bulit.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                // 使用多个loader
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                // 问题：处理不了html中img图片
                // 处理图片资源
                test: /\.(jpg|png|gif)$/,
                // 使用一个loader
                // 下载 url-loader file-loader
                loader: 'url-loader',
                options: {
                    // 图片小于8kb,就会被base64处理
                    // 优点：减少请求
                    // 缺点：图片会变大
                    limit: 8 * 1024,
                    // 问题： 因为url-loader默认使用es6模块化解析，而html-loader引入图片是commonjs
                    // 解析时就会出问题：[object Module]
                    // 解决：关闭url-loader的es6模块化，使用commonjs解析
                    esModule: false,
                    // 图片重命名
                    // [ext]表示取文件原来的后缀名
                    name: '[hash:10].[ext]'
                }
            },
            {
                test: /\.html$/,
                // 处理html文件的img图片（负责引入img,从而能被url-loader进行处罚）
                loader: 'html-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    mode: 'development'
}