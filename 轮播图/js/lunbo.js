var lunbo = {
	div : document.getElementById("lunbotu"),
	imgs : document.querySelectorAll("#imgs li"),//所有img
	preAndNext : document.querySelectorAll("#prevAndNext li"), //箭头
	//定义每个坑的信息,数组里存每个对象坑
	imgsInfo : [
		{
			left : -100,
			top : 0,
			width : 300,
			height : 200,
			opacity : 0.4,
			zIndex : 1
		},
		{
			left : -150,
			top : 50,
			width : 500,
			height : 300,
			opacity : 0.7,
			zIndex : 2
		},
		{
			left : 0,
			top : 100,
			width : 700,
			height : 350,
			opacity : 1,
			zIndex : 3
		},
		{
			left : 350,
			top : 50,
			width : 500,
			height : 300,
			opacity : 0.7,
			zIndex : 2
		},
		{
			left : 500,
			top : 0,
			width : 300,
			height : 200,
			opacity : 0.4,
			zIndex : 1
		}
	],
	_init(){
		var that = this;
		var parent = this.preAndNext[0].parentNode;
		this.div.onmouseenter = function(){
//			console.log("aaa")
			clearTimeout(that.stepId);
			new Animator({
				duration : 500,
				easing : Easing.linear,
				doSomething(ease){
//					console.log(ease)
					parent.style.opacity = ease;	
				}
			}).start()
		};
		this.div.onmouseleave = function(){
			that.autoPlay();
			new Animator({
				duration :500,
				easing : Easing.linear,
				doSomething(ease){
					parent.style.opacity = 1-ease;
				}
			}).start()
		};
		this.preAndNext[0].onclick = function(){
			that.imgsInfo.push(that.imgsInfo.shift())
			that.toPosition()
		}
		this.preAndNext[1].onclick = function(){
			that.imgsInfo.unshift(that.imgsInfo.pop())
			that.toPosition()
		}
	},
	autoPlay(){
//		this.toPosition();
		var that = this;
		this.stepId = setTimeout(function step(){
			that.imgsInfo.push(that.imgsInfo.shift()) //再把坑里的第一个信息拿出来放到最后
			that.toPosition();  //先去各自位置
			that.stepId = setTimeout(step,2000)  //以后每隔2s换一次信息
		},0)//第一次直接出来去各自位置
	},
	toPosition(){   //让每个图片去该去的位置
		var imgs = this.imgs;   //存储所有图片
		var imgsInfo = this.imgsInfo;  //存储坑的信息;
		for (var i =0; i < imgs.length; i++) {
			let img = imgs[i];     //遍历每个图片
			let imgInfo = imgsInfo[i];  //遍历每个坑
			let w = img.offsetWidth;
			let h = img.offsetHeight;
			let l = img.offsetLeft;
			let t = img.offsetTop;
			new Animator({     //创建一个动画
				duration : 400,
				easing : Easing.linear,
				doSomething(ease){
					 //从实际宽w变到坑的宽,变化的过程乘以ease
					img.style.width = w + (imgInfo.width-w) * ease + "px"
					img.style.height = h + (imgInfo.height-h) * ease + "px"
					img.style.left = l + (imgInfo.left-l) * ease + "px"
					img.style.top = t + (imgInfo.top-t) * ease + "px"
					img.style.opacity = imgInfo.opacity
					img.style.zIndex = imgInfo.zIndex
					//从坑的0开始变,一直到变出这个坑
//					img.style.width = imgInfo.width * ease + "px" 
//					img.style.height = imgInfo.height * ease + "px"
//					img.style.left = imgInfo.left * ease + "px"
//					img.style.top = imgInfo.top * ease + "px"
				}
			}).start(false)
		}
	}
}
lunbo._init();
lunbo.autoPlay();
