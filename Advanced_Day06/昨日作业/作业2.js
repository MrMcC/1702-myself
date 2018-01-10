/**
 * Created by lzc on 2017/4/8.
 */
/*
 作者：李振超    2017年4月8日 18:57
 分析：
 左右两边的显示的内容是一致的，但是又有些不同。
 比如：左边能向右跑，而右边可以向左跑

 所以可以先定义一个父类型，里面定义左边和右边共同的特性

 然后分别定义左边的类型和右边的类型，继承父类型，然后
 添加各自独有的方法和特性
 */

/*----父类型定义开始-------*/
function BaseContent(option){
    if (!option) return;
    this._init(option)
}
BaseContent.prototype = {
    construct: BaseContent,
    _init: function (option){
        //表示左边或右边的div  <div id="left"> <div id="right">
        this.div = option.div;
        this.onPClick();
    },
    /*当div中的p被选中*/
    onPClick: function (){
        var self = this;
        //当点击left或right div的时候  让target  更改 target p的背景色
        this.div.onclick = function (event){
            if (event.currentTarget == event.target) return;
            //找到left或right的所有p
            var children = event.currentTarget.children;
            //先去掉所有的p的class
            for (var i = 0; i < children.length; i++){
                children[i].removeAttribute("class");
            }
            //给点击的p添加className属性
            event.target.className = "clicked_class";
            //把当前选中的p作为属性存储起来
            self.selectedP = event.target;

        }
    },
    /*让选中的p向下*/
    down: function (){
        var p = this.selectedP;
        if (!p) return;
        //把 p 插入到 p 的下下一个兄弟节点之前
        if (p.nextElementSibling && p.nextElementSibling.nextElementSibling){
            this.div.insertBefore(p, p.nextElementSibling.nextElementSibling)
        }else{
            this.div.appendChild(p);
        }
    },
    /*让选中的p向左*/
    up: function (){
        var p = this.selectedP;
        // 如果没有p被选中，则直接返回
        if (!p) return;
        //把选中的p插入到上一个兄弟之前
        if (p.previousElementSibling){
            this.div.insertBefore(p, p.previousElementSibling);
        }
    },
    toFirst : function (){
        var p = this.selectedP;
        if(!p) return;
        this.div.insertBefore(p, this.div.firstElementChild);
    },
    toLast : function (){
        var p = this.selectedP;
        if(!p) return;
        this.div.appendChild(p);
    }
}
//----父类型定义结束-----------

//----左边子类型定义开始-----------
function LeftContent(option){
    BaseContent.call(this, option);
}
LeftContent.prototype = new BaseContent();
/*单个向右*/
LeftContent.prototype.selectedToRight = function (rigth){
    if(!this.selectedP) return;
    rigth.div.appendChild(this.selectedP);
    this.selectedP.removeAttribute("class");
    this.selectedP = null;
}
/*所有向右*/
LeftContent.prototype.allToRight = function (right){
    var children = this.div.children;
    for (var i = 0; i < children.length;){
        right.div.appendChild(children[0]);
    }
    if (this.selectedP){
        this.selectedP.removeAttribute("class");
        this.selectedP = null;
    }
}
//----左边子类型定义结束-----------

//----右边子类型定义开始-----------
function RightContent(option){
    BaseContent.call(this, option);
}
RightContent.prototype = new BaseContent();
/*单个向左*/
RightContent.prototype.selectedToLeft = function (left){
    if (!this.selectedP) return;
    left.div.appendChild(this.selectedP);
    this.selectedP.removeAttribute("class");
    this.selectedP = null;
}
/*所有向左*/
RightContent.prototype.allToLeft = function (left){
    var children = this.div.children;
    for (var i = 0; i < children.length;){
        left.div.appendChild(children[0]);
    }
    if (this.selectedP){
        this.selectedP.removeAttribute("class");
        this.selectedP = null;
    }

}
//----右边子类型定义结束-----------

