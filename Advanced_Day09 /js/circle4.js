
var wrap = document.getElementById("wrap");
var imgs = document.querySelectorAll("#imgs div");
var arrows = document.getElementById("arrows");
/*每张图片的最终的位置*/
var imgsInfo = [
    {
        w: 400,
        h: 200,
        left: 50,
        top: 0,
        opacity: 0.2,
        zIndex: 1
    }, {
        w: 600,
        h: 300,
        left: 0,
        top: 50,
        opacity: 0.6,
        zIndex: 2
    }, {
        w: 800,
        h: 400,
        left: 200,
        top: 100,
        opacity: 1,
        zIndex: 3
    }, {
        w: 600,
        h: 300,
        left: 600,
        top: 50,
        opacity: 0.6,
        zIndex: 2
    }, {
        w: 400,
        h: 200,
        left: 750,
        top: 0,
        opacity: 0.2,
        zIndex: 1
    }
];
/*每张图片到最终的位置时执行响应的动画效果*/
function moveToPosition(){
    /*在每个图片执行动画之前，先获取到每个图片的需要动画的元素的的原始值  w h left top*/
    var imgInitInfo = [];
    for (var i = 0; i < imgs.length; i++){
        imgInitInfo[i] = {
            initW: imgs[i].offsetWidth,
            initH: imgs[i].offsetHeight,
            initLeft: imgs[i].offsetLeft,
            initTop: imgs[i].offsetTop
        }
    }
    //开启动画，让每张图片去到自己应该去的地方
    var animator = new Animator(
        300,
        Easing.linear,
        function (e){
            // 遍历每张图片，让他们去到自己应该去的地方
            for (var i = 0; i < imgs.length; i++){
                var img = imgs[i];
                var info = imgsInfo[i];//?
                //原来的宽 + (现在的宽 - 原来的的宽) * e
                img.style.width = imgInitInfo[i].initW + (info.w - imgInitInfo[i].initW) * e + "px";
                img.style.height = imgInitInfo[i].initH + (info.h - imgInitInfo[i].initH) * e + "px";
                img.style.left = imgInitInfo[i].initLeft + (info.left - imgInitInfo[i].initLeft) * e + "px";
                img.style.top = imgInitInfo[i].initTop + (info.top - imgInitInfo[i].initTop) * e + "px";
                img.style.opacity = info.opacity;
                img.style.zIndex = info.zIndex;
            }
        }
    );
    animator.start(1);
}
/*定义能自动轮播的函数*/
var timeoutId;
function autoPlay(){
    timeoutId = setTimeout(function step(){
        imgsInfo.unshift(imgsInfo.pop());
        moveToPosition();
        timeoutId = setTimeout(step, 2000)
    }, 500)
}
/*开启自动轮播*/
autoPlay();
wrap.onmouseenter = function (){
    //先停止自动播放
    clearTimeout(timeoutId);
    var animator = new Animator(500, Easing.linear, function (e){
        arrows.style.opacity = e;
    });
    animator.start(1);
}
//wrap.onmouseleave = function (){
//  autoPlay();
//  var animator = new Animator(500, Easing.linear, function (e){
//      arrows.style.opacity = 1 - e;
//  });
//  animator.start(1);
//}
//arrows.onclick = function(e){
//  var id = e.target.id;  // target一定是指的点击区域的最内层的那个元素
//  switch(id){
//      case "right":
//          imgsInfo.push(imgsInfo.shift());
//          moveToPosition();
//      break;
//      case "left":
//          imgsInfo.unshift(imgsInfo.pop());
//          moveToPosition();
//      break;
//  }
//}
