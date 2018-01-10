ajax = {
	get : function(url,onSuccess,onFail){
		if(!url) return;
		if(typeof onSuccess != "function") return;
		var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP")
		xhr.open("GET",url,true)
		xhr.onreadystatechange = function(){
			if(xhr.readyState == 4){
				if(xhr.status == 200){
					onSuccess(xhr.responseText)
				}else{
					if(typeof onFail == "function"){
						onFail(xhr.responseText)
					}
				}
			}
		}
		xhr.send(null)
	},
	post : function(url,onSuccess,onFail,data){
		if(!url) return;
		if(typeof onSuccess != "function") return;
		var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP")
		xhr.open("POST",url,true)
		xhr.onreadystatechange = function(){
			if(xhr.readyState == 4){
				if(xhr.status == 200){
					onSuccess(xhr.responseText)
				}else{
					if(typeof onFail == "function"){
						onFail(xhr.responseText)
					}
				}
			}
		}
		if(typeof data == "string"){ //responseText返回字符串,new FormDate()返回对象,不需要加头
			xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded")
		}
		xhr.send(data)
	}
}
