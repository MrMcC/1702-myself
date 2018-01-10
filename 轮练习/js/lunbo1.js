var lunbotu = {
	div : document.getElementById("lunbotu"),
	imgs : document.querySelectorAll("#imgs li"),
	points : document.querySelectorAll("#points li"),
	imgsInfo : [
		{
			left : -100,
			top : 0,
			width : 350,
			height : 200,
			zIndex : 1,
			opacity : 0.4
		},
		{
			left : -150,
			top : 50,
			width : 500,
			height : 300,
			zIndex : 2,
			opacity : 0.7
		},
		{
			left : 0,
			top : 100,
			width : 700,
			height : 350,
			zIndex : 3,
			opacity : 1
		},
		{
			left : 350,
			top : 50,
			width : 500,
			height : 300,
			zIndex : 2,
			opacity : 0.7
		},
		{
			left : 450,
			top : 0,
			width : 350,
			height : 200,
			zIndex : 1,
			opacity : 0.4
		}
	],
	_init(){
		var that = this;
		this.div.onmouseenter = function(){
			clearTimeout(that.stepId);
			new Animator({
				duration : 400,
				easing : Easing.linear,
				doSomething(ease){
					that.points[0].parentNode.style.opacity = ease;
				}
			}).start()
		};
		this.div.onmouseleave = function(){
			that.autoPlay();
			new Animator({
				duration : 400,
				easing : Easing.linear,
				doSomething(ease){
					that.points[0].parentNode.style.opacity = 1-ease;
				}
			}).start()
		};
		this.points[0].onclick = function(){
			that.imgsInfo.unshift(that.imgsInfo.pop())
			that.toPosition()
		};
		this.points[1].onclick = function(){
			that.imgsInfo.push(that.imgsInfo.shift())
			that.toPosition()
		}
	},
	autoPlay(){
//		this.toPosition()
		this._init()
		var that = this;
		this.stepId = setTimeout(function step(){
			that.imgsInfo.push(that.imgsInfo.shift());
			that.toPosition()
			that.stepId = setTimeout(step,2000)
		},0)
	},
	toPosition(){
		var imgs = this.imgs;
		var imgsInfo = this.imgsInfo;
		for(var i =0; i < imgs.length; i++){
			let img = imgs[i];
			let imgInfo = imgsInfo[i];
			let w = img.offsetWidth;
			let h = img.offsetHeight;
			let l = img.offsetLeft;
			let t = img.offsetTop;
			new Animator({
				duration : 400,
				easing : Easing.linear,
				doSomething(ease){
					img.style.left = l + (imgInfo.left - l)* ease + "px";
					img.style.top = t + (imgInfo.top - t)* ease + "px";
					img.style.width = w + (imgInfo.width - w)*ease + "px";
					img.style.height = h + (imgInfo.height - h)*ease + "px";
					img.style.zIndex = imgInfo.zIndex 
					img.style.opacity = imgInfo.opacity
				}
			}).start(false)
		}
	}
}
//lunbotu._init()
lunbotu.autoPlay()
