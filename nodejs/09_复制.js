var fs = require("fs");
fs.readFile("03_猜数.js","utf-8",function (err,data) {
    if(!err){
        fs.writeFile("hello.js",data,"utf-8",function (err) {
            if(err){
                console.log("文件写入失败")
            }else{
                console.log("文件写入成功")
            }
        })
    }else{
        console.log("文件读取错误")
    }

})