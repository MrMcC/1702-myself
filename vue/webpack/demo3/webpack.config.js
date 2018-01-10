/**
 * Created by miaoce on 17/7/12.
 */
module.exports = {
    entry:"./module/main.js",
    output:{
        filename: './js/bundle.js'
    },
    //模块->针对不同文件进行不同的模块处理
    module:{
        loaders:[
            {
                test: /\.(css|less|scss)$/,
                loader: 'style-loader!css-loader!sass-loader'
            }
            // {
            //     test: /\.(css|less|scss)$/,
            //     loader: 'style-loader!css-loader!less-loader'
            // }
        ]
    },
    resolve:{
        //自动扩展我文件后缀名,意味着require模块可以省略后缀不写app.css
        extensions:['.js','.scss','.css','.less'],

        //后续直接 require('style') 即可
        alias: {
            style: '../css/style.scss'
        },

    },

    //观察文件变化 ,可以每次不手动输入webpack,自动打包
    watch: true
}