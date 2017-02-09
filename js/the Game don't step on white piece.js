var clock= null;
var state= 0;
var speed= 4;


//初始化init
function init(){
	for(var i=0; i<4; i++){
		createrow();
	}

	//添加onclick事件
	$('main').onclick=function(ev){
		judge(ev);
	}

	//定时器 每30毫秒调用一次 move()
	clock=window.setInterval('move()', 30);

}



//判断是否点击黑块
function judge(ev){
	if(ev.target.className.indexOf('black') == -1){
		pass;
	}else{
		ev.target.className='cell';
		ev.target.parentNode.pass=1;
		score();
	}
}


//游戏结束
function fail(){
	clearInterval(clock);
	confirm('你的最终得分为 ' + parseInt($('score').innerHTML));
}



// 创建div, className是其类名
function creatediv(className){
	var div = document.createElement('div');
	div.className=className;
	return div;
}

//创建一个类名的数组，其中一个为cell black, 其余为cell
function creatcell(){
	var temp=['cell', 'cell', 'cell', 'cell'];
	var i=Math.floor(Math.random()*4);
	temp[i]='cell black';
	return temp;
}

//创造一个 <div class="row">并且有四个子节点<div class="cell">
function createrow(){
	var con=$('con');
	var row=creatediv('row');
	var arr=creatcell();  //定义div cell的类名，其中一个为cell black
	
	con.appendChild(row);  //添加row为con的子节点

	for(var i=0; i<4; i++){
		row.appendChild(creatediv(arr[i]));
	}

	if(con.firstChild == null){
		con.appendChild(row);
	}else{
		con.insertBefore(row, con.firstChild);
	}
}


//让黑块动起来
function move(){
	//var con=$('con');
	var con=document.getElementById("con");
	var top=parseInt(window.getComputedStyle(con,null)['top']);
	//getComputedStyle是一个可以获取当前元素所有最终使用的CSS属性值。返回的是一个CSS样式声明对象([object CSSStyleDeclaration])，只读。

	if(speed + top >0){
		top=0;
	}else{
		top += speed;
	}
	con.style.top=top+'px';

	if(top==0){
		createrow();
		con.style.top='-100px';
		delrow();
	}else if(top=(-100+speed)){
		var rows=con.childNodes;
		if((rows.length == 5) && (rows[rows.length-1].pass !== 1)){
			fail();
		}
	}
}

// 加速函数
function speedup(){
	speed += 2;
	if(speed == 20){
		alert('你超神了');
	}
}

//删除某行
function delrow(){
	var con=$('con');
	if(con.childNodes.length == 6){
		con.removeChild(con.lastChild);
	}
}

//计分
function score(){
	var newscore = parseInt($('score').innerHTML) + 1;
	$('score').innerHTML = newscore;
	if(newscore % 10 == 0){
		speedup();
	}
}


//根据id来get DOM元素
function $(id){
	return document.getElementById(id);
}

	var main=document.getElementById("main");
	alert(main+"main");
init();





