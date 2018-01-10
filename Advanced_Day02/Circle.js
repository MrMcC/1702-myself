/**
 * Created by lzc on 2017/4/5.
 */
/*
 使用面向对象的方式，在当前页面创建100个小球
 */
function Circle(option){
    this._init(option)
}
Circle.prototype = {
    constructor : Circle,
    _init : function (option){
        this.ele = option.ele;
        this.r = option.r;
        this.bc = option.bc;

        this.w = this.r * 2;
        this.h = this.w;

        this.ele.style.width = this.w + "px";
        this.ele.style.height = this.h + "px";
        this.ele.style.background = this.bc;
        this.ele.style.borderRadius = this.r + "px";
        this.ele.style.position = "absolute";
        option.parent.appendChild(this.ele);
    },
    /*移动的距离*/
    moveX : function (distance){
        // this.ele.style.left = this.ele.offsetLeft + distance + "px";  //?删了?
        var self = this;   //?
        var i = 0;
        setTimeout(function step(){
            i += 1;
            self.ele.style.left = self.ele.offsetLeft + 1 + "px";//?
            console.log(i)
            if(i >= distance){
                return;
            }
            setTimeout(step, 5);
        }, 5);
    },
    changeRect : function (){
        var r = this.r;
        var self = this;
        setTimeout(function step(){
            self.ele.style.borderRadius = --r + "px";
            if(r <= 0){
                return;
            }
            setTimeout(step, 20)
        }, 20)
    },
    changeCircle : function (){
        var r = 0;
        var self = this;
        setTimeout(function step(){
            self.ele.style.borderRadius = ++r + "px";
            if(r >= self.r){
                return;
            }
            setTimeout(step, 30);
        }, 30)
    },
//  foo : function (){
//      
//  },
//  f : function (){
//      
//  }
    
}

