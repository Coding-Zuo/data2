$(document).ready(function(){
	//获取页面可视区高度
	var clientHeight=document.documentElement.clientHeight;
	var hui=document.getElementById('hui');
	var btn=document.getElementById('btn');
	var isTop=true;
	btn.onmouseover=function(){
		hui.style.display="block";
		return true;
	}
	btn.onmouseout=function(){
		hui.style.display="none";
		return true;
	}
	var timer=null;
	window.onscroll=function(){
		var osTop=document.documentElement.scrollTop ||document.body.scrollTop;
		if(osTop>=clientHeight){
			btn.style.display="block";
		}else{
			btn.style.display="none";
		}
	}
	btn.onclick=function(){
		timer=setInterval(function(){
		var osTop=document.documentElement.scrollTop ||document.body.scrollTop;
		//兼容性
		var ispeed= Math.floor(-osTop/5);
		document.documentElement.scrollTop=document.body.scrollTop=osTop+ispeed;

		console.log(osTop - ispeed);
		if(osTop==0)
		{
			clearInterval(timer);
		}
		},30);

		
	}
	var bu1=document.getElementById('bu1');
	bu1.onclick=function(){
		var oTop=document.documentElement.scrollTop ||document.body.scrollTop;
		document.documentElement.scrollTop=document.body.scrollTop=oTop-=800;
	}

	
});