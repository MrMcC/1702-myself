/*动画对象的属性在构造函数中定义*/
function Animator(duration = 500,ease = Easing.linear,doSomething = function(){}){//
	this.duration = duration;//存起来
	this.ease = ease;
	this.doSomething = doSomething;
}
/*动画的方法定义在原型中*/
Animator.prototype = {
	/*启动动画*/
	start : function (loop){
		//计算归一化的事件
		var startTime = new Date(),
			duration = this.duration,
			ease = this.ease,
			doSomething = this.doSomething,
			p,
			self = this;
		this.id = requestAnimationFrame(function step(){
			p = Math.min(1,(new Date() - startTime) / duration);//运行的时间,最大为1
			doSomething(ease(p));//ease(p)表示这个时间做什么动作,再将这个返回值作为doSomething参数
			if(p == 1 && loop){
				startTime = new Date();
				p = 0;//比1小都行
			}
			p < 1 && (self.id = requestAnimationFrame(step));
		});
	},
	/*结束动画*/
	stop : function (){
		cancelAnimationFrame(this.id);
	}
}
