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
	}
}
