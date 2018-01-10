//fs模块
var fs = require("fs");
//异步的方式读取文件,err: 如果读取文件发生错误,则err就是个错误对象,否则就是undefined
//node的回调函数,错误优先,函数里参数2就表示'1hello.js'数据
fs.readFile("1hello.js","utf-8",function (err, data) {
    if(!err){
        console.log(data)
    }else{
        console.log("文件读取错误,请重试...")
    }
})
console.log("abccccc") //异步的,会打印不会影响

// var fs = require("fs");
// fs.readFile("03_猜数.js","utf-8",function (err,data) {
//     if(!err){
//         console.log(data)
//     }else {
//         console.log("y有误")
//     }
// })