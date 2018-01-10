/**
 * Created by lzc on 2017/4/7.
 */
function Circle(){
    this._init();
}
Circle.prototype = {
    _init: function (){
        //添加球的一些属性和初始化的工作
        this.div = document.createElement("div");  //球的dom元素
        this.color = "rgba(" + randomInt(0, 255) + ", " + randomInt(0, 255) + "," + randomInt(0, 255) + ", " + (Math.random() * 0.6 + 0.4) + ")";
        this.left = randomInt(0, 1200);
        this.top = randomInt(0, 600);
        this.r = randomInt(30, 100);
        this.speedX = randomInt(-4, 4);
        this.speedY = randomInt(-4, 4);
    },
    /*把球绘制在屏幕上*/
    draw: function (parent){
        this.parent = parent;  //把如容器添加为球的属性

        var style = this.div.style;
        style.width = this.r * 2 + "px";
        style.height = this.r * 2 + "px";
        style.backgroundColor = this.color;
        style.left = this.left + "px";
        style.top = this.top + "px";
        parent.appendChild(this.div);
    },
    /*让球跑*/
    run: function (){
        /*计算出来当前球的右边界和下边界*/
        var maxLeft = this.parent.offsetWidth - this.div.offsetWidth;
        var maxTop = this.parent.offsetHeight - this.div.offsetHeight;

        //更改球的left和top的值
        setInterval(function foo(){
//          var style = this.div.style;
            // 计算球的left和top值
            var left = this.div.offsetLeft + this.speedX;
            var top = this.div.offsetTop + this.speedY;
            //限制右边界，并且让运动改变方向
            if(left >= maxLeft){
                left = maxLeft;
                this.speedX *= -1;
            }
            //限制下边界
            if(top >= maxTop){
                top = maxTop;
                this.speedY *= -1;
            }
            if(left <= 0){
                left = 0;
                this.speedX *= -1;
            }
            if(top <= 0){
                top = 0;
                this.speedY *= -1;
            }
            style.left = left + "px";
            style.top = top + "px";

        }.bind(this), 10);
    }
}

function randomInt(from, to){
    return parseInt(Math.random() * (to - from + 1) + from);
}
