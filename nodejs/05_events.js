/**
 * Created by miaoce on 17/5/31.
 */
//导入一个新的模块,在当前文件中可以使用这个模块
var events = require("events");
var emitter = new events.EventEmitter(); //创建一个事件发射器,可以触发事件,也可以监听事件
emitter.on("my1",function () {
    console.log("发生了my1 事件")
})
emitter.on("my2",function (a,b) {
    console.log("发生了my2 事件",a,b)
})

// emitter.emit("my2",10,20)
// emitter.emit("my1")

process.stdin.on("data",function (msg) {
    var t1 = msg.toString();
    // console.log(t1)
    var t2 = t1.slice(0,t1.length -1)
    emitter.emit(t2,10,20)
})

// var events = require("events");
// var emitter = new events.EventEmitter();
// emitter.on("my1",function () {
//     console.log("m1事件")
// })
// emitter.on("my2",function (a,b) {
//     console.log("m2事件",a,b)
// })
// emitter.emit("my1")
// emitter.emit("my2",10,20)
// process.stdin.on("data",function (msg) {
//     var t1 = msg.toString();
//     var t2 = t1.slice(0,length-1)
//     emitter.emit(t2,10,20)
// })