/**
 * Created by miaoce on 17/6/16.
 */
(function (window,document) {
    function my(selector) {
        return my.prototype._init(selector)
    }
    my.prototype = {
        _init(selector){
            var ele = document.querySelector(selector);  //找到满足选择器的第一个元素
            this.ele = ele; //把找到的元素储存到原型对象上
            return this;
        },
        tap(callback){
            var startTime;
            var fn = e =>{
                // console.log(e.type);
                // var startTime;
                switch (e.type){
                    case "touchstart":
                        startTime = new Date();
                        break;
                    case "touchend":
                        if(new Date - startTime < 500){
                            callback(this.ele)
                        }
                        break;
                }
            }
            this.ele.addEventListener("touchstart",fn);
            this.ele.addEventListener("touchend",fn);
        },

        panRight(callback){
            var that = this;
            var startX;
            function fn(e) {
                var touch = e.changedTouches.item(0);
               switch (e.type){
                   case "touchstart":
                       startX = touch.pageX;
                       break;
                   case "touchend":
                       var endX = touch.pageX;
                       if(endX -startX > 25){
                           callback(that.ele);
                       }
                       break;
               }
            }

            this.ele.addEventListener("touchstart",fn);
            this.ele.addEventListener("touchend",fn);
        }
    }
    window.$ = window.myQuery = my;
})(window,document)

