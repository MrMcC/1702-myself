/*
 作者：李振超    2017年4月13日 09:45
 [2000, 3000, 4000]
 */
function Animator(durations = [], easings = [], processes = []){
    this.durations = durations;
    this.easings = easings;
    this.processes = processes;
}
Animator.prototype = {
    start(loop){ //es6在对象中声明方法的新语法
        if (this.durations.length == 0) return; //如果传入的动画序列的长度是0，表示没有动画要执行

        var startTime = new Date(),
            p,
            self = this,
            index = 0;  //代表执行的当前的动画的索引
        this.id = requestAnimationFrame(function step(){
            var duration = self.durations[index],
                easing = self.easings[index],
                process = self.processes[index];
            p = Math.min(1, (new Date() - startTime) / duration)
            process(easing(p));
            if (p == 1){
                //先判断是否还有下一个动画
                if (index == self.durations.length - 1){
                    //如果是执行到了最后动画,判断是否需要循环
                    if (loop){
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
            p < 1 && requestAnimationFrame(step);
        });
    },
    stop(){

    },

}