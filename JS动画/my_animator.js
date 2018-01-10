function Animator(option){
	this._init(option)
}
Animator.prototype = {
	_init : function(option){
		this.duration = option.duration;
		this.easing = option.easing;
		this.doSomething = option.doSomething;
	},
	start : function(isLoop){
		if(typeof this.duration != "number" || typeof this.easing != "function" || typeof this.doSomething != "function") return;
		var duration = this.duration,
			easing = this.easing,
			doSomething = this.doSomething,
			p,
			startTime = new Date();
		var that = this;
		this.animatorId = requestAnimationFrame(function step(){
			p = Math.min(1,(new Date()-startTime)/duration)
			doSomething(easing(p))
			if(p == 1){
				if(isLoop){
					startTime = new Date();
					
				}else{ return;}
			}
			that.animatorId = requestAnimationFrame(step)
		})
	},
	stop : function(){
		cancelAnimationFrame(this.animatorId)
	}
}

