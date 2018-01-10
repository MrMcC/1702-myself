/*封装ajax请求的代码*/
var ajax = {
    get1 : function (option){
        if(!option) return;
        this.get(option.url, option.onSuccess, option.onFail);
    },
    /*
     作者：李振超    2017年4月10日 16:36
     实现get请求
     参数1：请求的url
     参数2：响应成功之后的回调函数
     参数3：响应失败之后的回调函数
     */
    get: function (url, onSuccess, onFail){
        var xhr = window.XMLHttpRequest
            ? new XMLHttpRequest()
            : new ActiveXObject("Microsoft.XMLHTTP");
        xhr.open("GET", url, true);
        xhr.onreadystatechange = function (){
            if (xhr.readyState == 4){
                if (xhr.status == 200){
                    if (typeof onSuccess == "function"){
                        onSuccess(xhr.responseText, xhr.responseXML);
                    }
                    /*else{
                        throw new Error("你傻，第二个参数必须是一个函数")
                    }*/
                }else{
                    if (typeof onFail == "function"){
                        onFail(xhr.responseText);
                    }
                }
            }
        }
        xhr.send(null);
    },
    post: function (){
        
    }
}