//-----------------------轮播图部分
 	var index = 0;
 	var timer = null;
 	var oUl = $id("img-list");//运动的ul
 	var ulist = oUl.children;
 	var olist = $id("nav-list").children;
 	
 	timer = setInterval(autoPlay , 2000);
 	function autoPlay(){
 		index++;
 		for( var i = 0 ; i < olist.length ; i++ ){
 			olist[i].className = "";
 		}
 		if( index == 4 ){
 			oUl.style.left = 0;
 			index =0 ;
 		}
 		startMove( oUl , {left : -index*235} );
 		
 		olist[index==4 ? 0 : index].className = "active";
 	}
 	
 	//鼠标移入移出操作定时器   同时箭头显示和隐藏
 	$id("right").onmouseover = function(){
 		clearInterval(timer);
 		startMove( $id("arr") , {"opacity":100})
 	}
 	$id("right").onmouseout = function(){
 		timer = setInterval(autoPlay , 2000);
 		startMove( $id("arr") , {"opacity":0})
 	}
 	//操作下标 
 	for( let i = 0 ; i < olist.length ; i++ ){
 		olist[i].onmouseover = function(){
 			index = i-1;
 			autoPlay();
 		}
 	}
 	
	
//--------------------------------------------吸顶	

var oNav = document.getElementById("flo-le");//要吸顶的块
var oDiv = document.getElementById("flo-ri");//要吸顶的块
	window.onscroll=function(){//滚动条事件连用
		var h=450;//要吸顶的块到最顶端的距离
		var tOp = document.body.scrollTop||document.documentElement.scrollTop;
		//获取页面滚走距离
		if(tOp>h){//如果页面滚走的距离大于快到顶端的高度
			oNav.style.position="fixed";//开始定位
			oNav.style.top=0;//要吸顶的块到最顶端的距离为0；
			oDiv.style.position="fixed";//开始定位
			oDiv.style.top=0;//要吸顶的块到最顶端的距离为0；
		}else{
			oNav.style.position="static";//其余的可能就是取消定位
			oDiv.style.position="static";//其余的可能就是取消定位
		}
}
//--------------------------------------------点击楼层回到对应的位置	
	
	
	
//	$(".b-12").click(function(){
//		$("html,body").animate({"scrollTop":0},1000)
//		
//	})
	
	







