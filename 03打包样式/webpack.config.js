/**
 * 
 * 
 * 所有的构建工具都是基于node运行的
 */


// resolve来解决路径
const { resolve } = require('path')

module.exports = {
    // webpack配置
    // 入口起点
    entry: './src/index.js',
    // 输出
    output: {
        // 输出文件名
        filename: 'built.js',
        // 输出路径
        // __dirname是 nodejs变量，表示当前文件的目录绝对路径
        path: resolve(__dirname, 'build')
    },
    // loader的配置
    module: {
        rules: {
            // 详细loader配置
            {
                // 匹配哪些文件
                test: /\.css$/,
                use: [
                    // use数组中的loader执行顺序：从右到左，从下到上，依次执行
                    // 创建style标签，将js中的样式资源插入head中
                    'style-loader',
                    // 将css变成commonjs模块加载js中，里面内容是样式字符串
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use： [
                    'style-loader',
                    'css-loader',
                    // 把less编译成css
                    'less-loader'
                ]
            }
        }
    },
    // plugins的配置
    plugins: [
        // 详细plugins的配置
    ],
    // 模式
    mode: 'development' // 开发模式
    // mode: 'production'   // 生产模式
}