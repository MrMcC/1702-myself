/**
 * Created by miaoce on 17/6/30.
 */
function init() {
    var windowW = document.documentElement.clientWidth;
    //以iphone5为参考
    var scale = windowW/320;
    var newSize = scale * 10;
    document.getElementsByTagName("html")[0].style.fontSize = newSize + "px";
}
init();
window.addEventListener('resize',init,false);