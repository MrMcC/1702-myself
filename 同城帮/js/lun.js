/**
 * Created by miaoce on 17/5/31.
 */
var imgs = document.querySelectorAll("#banner>ul:nth-child(1)>li");
var points = document.querySelectorAll("#banner>#point>li");
var banner = document.getElementById("banner")
var current = 0;
var id;
function play() {
    id = setInterval(function step() {
        for(var i =0; i < imgs.length; i++){
            imgs[i].style.zIndex = 0;
            points[i].style.backgroundColor = "white";
        }
        current++;
        if(current == imgs.length){
            current = 0;
        }
        imgs[current].style.zIndex = 1;
        points[current].style.backgroundColor = "black";
    },1000);
}
// play()
// banner.onmouseenter = function () {
//     clearInterval(id)
// }
// banner.onmouseleave = function () {
//     play()
// }
