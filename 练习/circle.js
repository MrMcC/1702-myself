function Circle(parent , width , height){
	this._init(parent , width , height);
}
Circle.prototype = {
	_init : function(parent , width , height){	
		this.r = randomInt(10,70);
		//创建一个r属性值随机
		this.width = this.height = 2* this.r;
		//创建宽高属性:是属性r的2倍
		this.background = "rgba(" + randomInt(0,255) + "," + randomInt(0,255) + "," + randomInt(0,255) + "," + (Math.random()*0.6+0.4) + ")"
		//上面Math.random()*0.6+0.4要加括号要不变成字符串了,运算不能写.6 .4
		this.speedX = randomInt(-4,4);
		this.speedY = randomInt(-4,4);
		//速度为负证明反方向跑
		this.left = randomInt(0, width-140);
		//创建对象的属性 不加px
		//this.style.left 对象的style属性的left值,但是我没把this.style赋值啊,那它就不是个节点,那就行不通了
		//this.div.style.left  this.div是个DOM节点 他的分枝css样式的left值是xxx+"px"
		this.top = randomInt(0, height-140);		
		this.div = document.createElement("div");
		//this的div属性是个被一个创建的div赋值了,那this.div就是dom中的一个节点
		this.div.borderRadius = "50%";//要传字符串    
		//this.div.style.borderRadius?DOM操作
		this.div.position = "absolute";
		//this.div是对象他的属性是position,同时,div还是个节点
		this.parent = parent; 
		//因为我把parent赋予this的属性parent了,所以this.parent相当于一个节点
		this.parent.width = width;
		this.parent.style.width = this.parent.width + "px"
		//节点的width对象又被with赋予了
		this.parent.height = height;
		this.parent.style.height = this.parent.height + "px"
		this.parent.style.position = "relative";
		this.parent.style.margin = "0 auto";
		
	},
	show : function(){
		 var style = this.div.style;  //写css样式?
		 style.left = this.left + "px"; //+px
		 style.top = this.top + "px";
		 style.width = this.width + "px";
		 style.height = this.height + "px";
		 style.background = this.background;
		 style.borderRadius = this.div.borderRadius;
		 style.position = this.div.position;
		 
		 this.parent.appendChild(this.div)
	},
	run : function (){
//		this.offsetWidth = ?????
		//offsetWidth是只读的 没有单位,只能通过style.left去修改
		var maxLeft = this.parent.width - this.div.offsetWidth ;//+ "px"啥时候加啊???
		var maxBottom = this.parent.height - this.div.offsetHeight;
		setInterval(function foo(){
//			var style = this.div.style;//???undefined
			var left = this.div.offsetLeft + this.speedX; //
			var top = this.div.offsetTop + this.speedY;   //this.div.offsetTop???
			if(left >= maxLeft){
				left = maxLeft;
				this.speedX *= -1;
			}
			if(left <=0){
				left = 0;
				this.speedX *= -1;
			}
			if(top >= maxBottom){
				top = maxBottom;
				this.speedY *= -1;
			}
			if(top <= 0){
				top = 0;
				this.speedY *= -1;
			}
			this.div.style.left = left + "px"
			this.div.style.top = top + "px"
		}.bind(this),10)
	}
	
}

function randomInt(from,to){
	return parseInt(Math.random() * (to - from+1) + from);
}



