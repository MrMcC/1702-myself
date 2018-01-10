var num = randomInt(0,100)
console.log("请猜一个 0 --- 100 的整数:")
process.stdin.on("data",function(n){ //用户猜的数字
	if(n > num){
		console.log("你猜大了")
	}else if(n == num){
		console.log("你猜对了")
		process.exit();//退出进程
		// num = randomInt(0,100)
	}else{
		console.log("你猜小了")
	}
})
function randomInt(from,to){
    return parseInt(Math.random() * (to - from + 1)+ from)
}

// var num = randomInt(0,100);
// console.log("请猜一个0--100的整数")
// process.stdin.on("data",function (msg) {
//     if(msg > num){
//         console.log("大了")
//     }else if(msg == num){
//         console.log("对了")
//         process.exit();
//     }else{
//         console.log("小了")
//     }
// })