/**
 * Created by miaoce on 17/6/1.
 */
var http = require("http");
var url = require("url");
//创建一个服务器
var server = http.createServer();
var count = 1;
//使用server监听 request (请求)事件
//回调函数的参数1:request 接受数据 参数2: response 返回给浏览器数据
server.on("request",function (req,res) { //每有个请求,回调执行一次,其他行都是启动服务器时候都执行一遍
    console.log(url.parse(req.url));
    console.log(url.parse(req.url).query);
    //告诉浏览器,服务器发给它的是什么编码
    res.setHeader("Content-Type","text/html;charset=utf-8");
    //给浏览器响应数据
    res.write(`<h1>你是本网站的第${count++}个访问者</h1>`);
    res.end(); //把写入到缓存的数据发给客户端
});
server.listen(8888);//监听端口

// var http = require("http");
// var server = http.createServer();
// server.on("request",function (req,res) {
//     res.setHeader("Content-Type","text/html;charset=utf-8")
//     res.write(`<h1>你是第${count++}个访问者</h1>`)
//     res.end()
// })
// server.listen(8888)