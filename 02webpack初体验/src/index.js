/**
 * index.js webpack入口起点文件
 * 
 * 1.运行指令
 * 开发环境：webpack    ./src/index -o ./build/built.js --mode=development
 * webpack会以  .src/index.js   为入口文件开始打包，打包后输出到    ./build/bulit.js
 * 整体打包环境，是开发环境
 * 生成环境
 * 
 * 2.结论
 * 1.能处理js/json不能处理css/img
 * 2.把es6转成浏览器认识的
 * 3.生产比开发多一个js文件
 */



import data from './data.json'
console.log(data)

function add(x, y) {
    return x + y
}

console.log(add(1, 2))