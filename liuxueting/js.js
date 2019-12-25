
//第一部分留言变量定义
var box=document.getElementById("box");
var slider=document.getElementById("slider");
var left=document.getElementById("left");
var right=document.getElementById("right");
var borde = document.getElementById("borde");
var ul = document.createElement("ul");
var btn = document.getElementById("btn");
var msg = document.getElementById("msg");
var n = 0;
var index=1;
var timer;
var setInterval;
//第二部分变量定义
var menuData = document.getElementsByClassName('menuData');
var detailList=document.getElementsByClassName("detail");
var secondBannerImgList = document.getElementsByClassName('secondBannerImg');
var imgsList=["images/wu3.png","images/wu4.png","images/wu5.png","images/wu6.png","images/wu7.png","images/wu8.jpg"];
var imgsListBig=["images/wu3big.jpg","images/wu4big.jpg","images/wu5big.jpg","images/wu6big.jpg","images/wu7big.jpg","images/wu8big.jpg"];
//这是专门放大图片的列表得自己改
var BigImg=document.getElementById("Bigdetail5");
var SmallImg=document.getElementById("Smalldetail4");
var btn1=document.getElementById("btn1");
var btn2=document.getElementById("btn2");
var btn3=document.getElementById("btn3");
var btn4=document.getElementById("btn4");
//对时钟方法的定义
var i1 = document.getElementById("i1");
var s1 = document.getElementById("s1");
var m1 = document.getElementById("m1");
setInterval(function(){
    var date = new Date();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    i1.innerHTML = minute;
    m1.innerHTML = second;
},1000);
//回到顶部
var body = document.getElementsByTagName('body')[0];
var nav2 = document.createElement('div');
var img = document.createElement('img');

nav2.style.width = "2cm";
nav2.style.margin = "0 auto";
nav2.style.height = "2cm";
nav2.style.position = "fixed";
nav2.style.right = "0px";
nav2.style.bottom = "50px";
img.style.width = "1.5cm";
img.style.height = "1.5cm";
img.src = "images/wu1.jpg";
nav2.appendChild(img);
nav2.onclick = function(){
    document.documentElement.scrollTop = '0px';
}
nav2.onmouseover = function(){
	img.src = "images/wu8.jpg";
}
nav2.onmouseout = function(){
	img.src = "images/wu1.jpg";
}
body.appendChild(nav2);
//轮播方法
borde.appendChild(ul);
	function next(){
		index++;
		animate(slider,{left:-600*index},function(){
			if(index===6){
				slider.style.left="-600px";
				index=1;
			}
		});
	}
	function prev(){
		index--;
		animate(slider,{left:-600*index},function(){
			if(index===0){
				slider.style.left="-3000px";
				index=5;
			}
		});
	}
	var timer=setInterval(next,3000);
	slider.onmouseover=function(){
		animate(left,{opacity:50});
		animate(right,{opacity:50});
		clearInterval(timer);
	}
	//鼠标离开事件
	slider.onmouseout=function(){
		animate(left,{opacity:0});
		animate(right,{opacity:0});
		timer=setInterval(next,3000);
	}
	right.onclick=next;
	left.onclick=prev;
        btn.onclick = function(){
            if(msg.value === ""){
                alert("请输入内容")
            } else{
                n++;
                var li = document.createElement("li");
                li.className="pp";
                li.innerHTML = msg.value + "  "+"<span>&nbsp;&nbsp;×</span>";
                var lis = document.getElementsByClassName("pp");
                if(n === 1){
                    ul.appendChild(li);
                }else{
                    ul.insertBefore(li,lis[0]);
                }
                msg.value = "";
                var span = document.getElementsByTagName("span");
                for(var i = 0;i<span.length;i++){
                    span[i].onclick = function(){
                        ul.removeChild(this.parentNode);
                        n--;
                    }
                }
            }
        };

//第二部分方法
for (var i = 0; i < menuData.length; i++) {
	menuData[i].onclick=function(){
				var flag=parseInt(this.getAttribute("title"));
				this.style.color = "pink";
				this.style.backgroundColor = "2c2cef";
				detailList[flag].style.display="block";
				for(var k=0;k<4;k++){
					if(k!=flag){
						console.log("haaaa");
						detailList[k].style.display="none";
						menuData[k].style.backgroundColor = "2c2c0f";
						menuData[k].style.color="black";
					}
				}
	}
}
for(var j=0;j<4;j++){
	menuData[j].onmouseover=function(){
		this.style.color="orange";
	}
}
for(var j=0;j<4;j++){
	menuData[j].onmouseout=function(){
		this.style.color="black";
	}
}

for (var i = 0; i < secondBannerImgList.length; i++) {
	secondBannerImgList[i].onclick=function(){

		//console.log("index");
		var index=parseInt(this.getAttribute("title"));
		//console.log("index"+index);
		detailList[3].style.display="none";
		detailList[4].style.display="block";
		SmallImg.src=imgsList[index];
		BigImg.src=imgsListBig[index];

	}
}
btn1.onclick=function(){
		detailList[3].style.display="none";
		detailList[4].style.display="none";
		detailList[5].style.display="block";
}
btn2.onclick=function(){
		detailList[3].style.display="none";
		detailList[4].style.display="block";
		detailList[5].style.display="none";
}

btn3.onclick=function(){
		detailList[3].style.display="block";
		detailList[4].style.display="none";
		detailList[5].style.display="none";
}

btn4.onclick=function(){
		detailList[3].style.display="block";
		detailList[4].style.display="none";
		detailList[5].style.display="none";
}
//轮播的js
function getStyle(obj, attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, null)[attr];
	}
}
function animate(obj,json,callback){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var isStop = true;
		for(var attr in json){
			var now = 0;
			if(attr == 'opacity'){
				now = parseInt(getStyle(obj,attr)*100);
			}else{
				now = parseInt(getStyle(obj,attr));
			}
			var speed = (json[attr] - now) / 8;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			var cur = now + speed;
			if(attr == 'opacity'){
				obj.style[attr] = cur / 100;
			}else{
				obj.style[attr] = cur + 'px';
			}
			if(json[attr] !== cur){
				isStop = false;
			}
		}
		if(isStop){
			clearInterval(obj.timer);
			callback&&callback();
		}
	}, 30)
} 
//超链接部分的js
var circleList=document.getElementsByClassName("circle");
var answeList=document.getElementsByClassName("answer");
var circle1List=document.getElementsByClassName("circle1");
var noanswer=document.getElementById("noanswer");
var makexiaozhan=document.getElementById("makexiaozhan");
var makep=document.getElementById("makep");
var makebutton=document.getElementById("makebutton");
var temp=0;
	
for(var j=0;j<circle1List.length;j++){
	temp=j;
	circle1List[j].onmouseover=function(){
		this.style.color="#fc35bf";
	}
	circle1List[j].onmouseout=function(){
			this.style.color="#e394bc";
	}
}
for(var i=0;i<circle1List.length;i++){
	
	circle1List[i].onclick=function(){
		var title=parseInt(this.getAttribute("title"));
		answeList[title].style.display="block";
		
	}
}
makebutton.onclick=function(){
	makexiaozhan.style.display="block";
	alert("(ㄏ￣▽￣)ㄏ别想了兄di，怎么可能不是凡哥哥呢ㄟ(￣▽￣ㄟ)");
}
//对文字的效果

function changeColor(){ 
	var color="#f00|#0ff|#00f|yellow|green|blue|gray|#234|#534|white|orange|red|pink";//定义一条变换颜色的字符串
	var fontSize=[50,100];
	var index =parseInt(Math.random() * color.length);
	color=color.split("|"); //然后通过split方法进行分割
 	var singer = document.getElementById("singer");
 	var actor = document.getElementById("actor");
 	actor.style.fontSize=fontSize[parseInt(Math.random() * 2)]+"px";
	singer.style.color=color[index];//设置样式 
}
setInterval("changeColor()",200);//死循环，每0.2秒变换一种颜色