/**
 * Created by miaoce on 17/5/31.
 */
var fs = require("fs");
var msg = "这个是个通过代码写入的信息";
fs.writeFile("test.txt",msg,"utf-8",function (err) { //当文件写完成之后的回调,把msg写到test.txt中,
    if(err){
        console.log("文件写入失败")
    }else {
        console.log("文件写入成功")
    }
})

// var fs = require("fs");
// fs.writeFile("test.txt","这个是个通过代码写入的信息","utf-8",function (err) {
//     if(err){
//         console.log("失败")
//     }else {
//         console.log("成功")
//     }
// })