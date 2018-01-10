<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<title></title>
	</head>
	<body>
		<script type="text/javascript">
			function Animator(durations = [],easings = [],processes = []){
				this.durations = durations;
				this.easings = easings;
				this.processes =processes;
			}
			Animator.prototype = {
				if(this.durations.length == 0 ) return;//如果传入的动画是0,没有动画要执行
				
				start(loop){                          //start : function()es6新语法
					var startTime = new Date(),
					p,
					index = 0,//代表执行动画的索引
					self = this;
					this.id = requestAnimationFrame(function step(){
						p = Math.min(1,(new Date - startTime) / self.durations[index])
						self.processes[index](self.easings[index](p));
						if(p == 1){
							//先判断是否还有下一个动画
							if(index == self.durations.length - 1){
								//如果是执行到了最后一个动画,判断是否需要循环
								if(loop){
									startTime = new Date();
									p = 0;
									index = 0;
								}
							}else{
								startTime = new Date();
								p = 0;
								index++;
							}
						}
						p < 1 && requestAnimationFrame(step)
					})
				},
				stop(){
					
				}
			}
		</script>
	</body>
</html>
