/**
 * loader: 1.下载   2.使用
 * plugins: 1.下载  2.引入  3.使用
 */
const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'built.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            // loader配置
        ]
    },
    plugins: [
        // plugins的配置
        // html-webpack-plugin
        // 默认创建一个html文件，自动引入所有打包输出的资源（js/css）
        // 需求： 需要有结构的html文件
        new HtmlWebpackPlugin({
            // 复制 './src/index.html'文件， 并自动引入打包输出的所有资源（js/css）
            template: './src/index.html'
        })
    ],
    mode: 'development'
}