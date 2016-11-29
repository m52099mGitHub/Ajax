function ajax(url,successfun,failedfun){
	//1.创建ajax对象
	if(window.XMLHttpRequest){
		var oAjax=new XMLHttpRequest();
	}else{
		var oAjax=new ActiveXobject("Microsoft.XMLHTTP");
	}

	//连接服务器(打开和服务器的连接)
	oAjax.open('GET',url,true);

	//3.发送
	oAjax.send();
	//4.接收
	oAjax.onreadystatechange=function(){
		if(oAjax.readyState==4){
			if(oAjax.status==200 || oAjax.status==304){
				//alert('成功!'+oAjax.responseText);
			}
		}
	}
}