/**
 * Created by miaoce on 17/7/12.
 */
//,这个属于webpack内置的一个插件，需要在当前目录安装webpack
//用于提取多个入口文件的公共脚本部分
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

module.exports = {
    entry:{
        bundle1:"./module/page1",
        bundle2:"./module/page2"
    },
    output:{
        filename:"./js/[name].js"
    },
    //插件
    plugins: [
        new CommonsChunkPlugin("commons.js")
    ]
}