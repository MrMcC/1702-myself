/**
 * Created by lzc on 2017/4/12.
 */
/*动画对象的属性在构造函数中定义*/
function Animator(duration = 500, ease = Easing.linear, doSomething = function (){
                  }){
    this.duration = duration;
    this.ease = ease;
    this.doSomething = doSomething;
}
/*动画的方法定义在原型中*/
Animator.prototype = {
    /*启动动画*/
    start: function (count){
        var loop;
        if (typeof count == "number"){
            if (count <= 0) return;
        }else{
            if (count == "infinite"){
                loop = true;
            }
        }
        var startTime = new Date(),
            ease = this.ease,
            doSomething = this.doSomething,
            p,
            self = this;
        this.id = requestAnimationFrame(function step(){
            p = Math.min(1, (new Date() - startTime) / self.duration);//计算出来归一化的时间
            doSomething(ease(p));//调用传来的回调函数，执行具体的修改样式的动作
            if (p == 1 && (loop || --count > 0)){
                startTime = new Date();
                p = 0;
            }
            p < 1 && (self.id = requestAnimationFrame(step));
        });
    },
    /*结束动画*/
    stop: function (){
        cancelAnimationFrame(this.id);
    }
}

/*if(p == 1){  //一个周期结束的时候
 if(loop){
 startTime = new Date();
 p = 0;
 }else if(--count > 0){
 startTime = new Date();
 p = 0;
 }
 }*/