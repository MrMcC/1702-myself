console.log("请输入信息")

//process是查看进程的
//标准输入流需要手动在控制台输入msg信息
process.stdin.on("data",function(msg){
    console.log("你输入的信息是"+msg)
})
