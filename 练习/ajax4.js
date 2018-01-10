/*封装ajax请求的代码*/
/*异步的东西没返回值*/
var ajax = {
	get1 : function(option){
		if(!option)return;
		this.get(option.url,option.onSuccess,option.onFail)
	},
	
	
	get : function (url,onSuccess,onFail){
		var xhr = window.XMLHttpRequest 
		? new XMLHttpRequest() 
		: new ActiveXObject("Microsoft.XMLHTTP")
		xhr.open("GET",url,true);
		xhr.onreadystatechange = function (){
			if(xhr.readyState == 4){
				if(xhr.status == 200){
					if(typeof onSuccess == "function"){
						onSuccess(xhr.responseText,xhr.responseXML);
					}else{
						throw new Error("你傻啊,第二个参数必须是一个函数");
					}
				}else{
					if(typeof onFail == "function"){
						onFail(xhr.responseText);
					}
				}
			}
		}
		xhr.send(null);
	},
	post : function (){
		
	}
}
