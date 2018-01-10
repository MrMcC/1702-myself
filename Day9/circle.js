var wrap = document.querySelector("#wrap");
var imgs = document.querySelectorAll("#imgs div");
var arrows = document.querySelectorAll("#arrows div");
var imgsInfo = [//最终位置
	{
        w: 400,
        h: 200,
        left: 50,
        top: 0,
        opacity: 0.2,
        zIndex: 1
	},{
		w: 600,
		h: 300,
		left: 0,
		top:50,
		opacity: 0.6,
		zIndex: 2
	},{
		w: 800,
		h: 400,
		left: 200,
		top:100,
		opacity: 1,
		zIndex: 3		
	},{	
		w: 600,
		h: 300,
		left: 600,
		top:50,
		opacity: 0.6,
		zIndex: 2
	},{
        w: 400,
        h: 200,
        left: 750,
        top: 0,
        opacity: 0.2,
        zIndex: 1
	}
]
function moveToPosition(){ //开启动画
	var imgInitInfo = [];
	for(var i = 0; i < imgs.length; i++){
		imgInitInfo[i] = {
			initW : imgs[i].offsetWidth,
			initH : imgs[i].offsetHeight,
			initLeft : imgs[i].offsetLeft,
			initTop : imgs[i].offsetTop
		}
	}
	var play = new Animator(500,Easing.linear,function(e){
		for (var i = 0;i < imgs.length; i++ ) {
			var img = imgs[i];
		}
		imgs.style.Position = ``
	});
	play.start(1)
}
