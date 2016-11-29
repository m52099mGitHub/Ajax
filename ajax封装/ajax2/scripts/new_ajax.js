function ajax(url,successfun,failedfun){
	//1.创建Ajax对象
	if(window.XMLHttpRequest){//window.XMLHttpRequest使XMLHttpRequest以属性的方式存在,使IE6不出错
	var oAjax=new XMLHttpRequest();//非IE6都可用
	}else{
	var oAjax=new ActiveXObject("Microsoft.XMLHTTP");//IE6可用
	}
	// alert(oAjax);

	//2.连接服务器
	//open(方法,文件名)方法
	oAjax.open('GET',url,true);//true表示异步

	//3.发送请求
	oAjax.send();
	//4.接收返回信息
	oAjax.onreadystatechange=function(){

	//oAjax.readyState;//浏览器和服务器,进行到哪一步了
	if(oAjax.readyState==4)//读取完成
		{
			if(oAjax.status==200)//成功
			{
				successfun(oAjax.responseText)
			}else{
				if(failedfun){
					failedfun(oAjax.status);
				}
			}
		}
	}
}