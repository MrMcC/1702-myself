/**
 * Created by lzc on 2017/3/24.
 */
var mouseArea = document.getElementById("mouseArea");
//1. 给开始按钮添加点击事件
var start = document.getElementById("start");
var intervalId; //随机出现mouse的定时器id
start.onclick = function (){
    //清除以前的定时器
    clearInterval(intervalId);
    //点击开始按钮的时候，清除容器中的所有img
    mouseArea.innerHTML = "";
    //周期性的创建mouse
    intervalId = setInterval(function (){
        //创建mouse
        var img = createMouse();
        //把创建的mouse添加到容器中
        mouseArea.appendChild(img);
        //判断游戏是否应该结束
        judgeGameOver();
    }, 1000)
}
//2. 创建mouse，并随机分配mouse的位置，返回创建的mouse
function createMouse(){
    var img = document.createElement("img");
    img.src = "./img/mouse.png";
    img.className = "mouse";
    img.style.left = randomInt(0, 900) + "px";
    img.style.top = randomInt(0, 500) + "px";
    //给mouse添加点击事件
    img.onclick = function (){
        img.parentElement.removeChild(img);
    }
    return img;
}

function judgeGameOver(){
    if(mouseArea.childElementCount > 10){
        clearInterval(intervalId);
        mouseArea.innerHTML = "<img src='./img/end.png'></img>"
    }
}

