 var gkkuang=document.getElementById("gkkuang");
		var gkhaonan=document.getElementById("gkhaonan");
		var gkhaonanfont=document.getElementById("gkhaonanfont");
		gkkuang.onkeypress=function(e){
			if(e.keyCode==13&&gkkuang.value=="liqin"){
				gkhaonan.style.display="block";
				gkhaonanfont.style.display="none";
			}
		}
		var gkset=document.getElementById("gkset");
		var gkmin=document.getElementById("gkmin");
		window.onload=function(){
			var timer=12;
			var min=20;
			setInterval(function(){
				timer++;
				gkset.innerHTML=timer;
				if(timer==59){
					min++;
					gkmin.innerHTML=min;
					timer=0;
				}
			},1000);
			
		}




var gkdBtn=document.getElementById("gkdBtn");
var gkOnePart=document.getElementById("gkOnePart");
var table = document.createElement("table");
table.border=1;
table.cellSpacing=0;
gkOnePart.appendChild(table);
for(var i=0;i<1;i++){
	 var tr=table.insertRow();//DOM操作添加一个子节点、、试下HTML DOM
	for(var j=0; j<2;j++){
		var td=tr.insertCell();
		if(i==0){
			if(j==0){
				td.innerHTML="1990年，李沁在江苏省昆山市巴城镇出生，那里是昆曲的发源地，也是李沁的家乡。"
				+"2001年,11岁的李沁进入巴城镇石牌中心小学开办的戏曲兴趣班接受戏曲基本功培训。"
				+"2002年，正值李沁12岁，为了能够继续留在学校学习戏曲，她向妈妈保证不会耽误自己的学业。"
			}
			if(j==1){
				td.innerHTML="2003年，李沁参加了“苏外之夜”戏曲专场晚会的演出，"
				+"而她则相继在越剧《梁祝·十八相送》中饰演祝英台、"
				+"在昆剧《牡丹亭·游园》中饰演杜丽娘，并凭借《牡丹亭·游园》获得了第7届中国少儿戏曲"
				+"小梅花荟萃活动金花奖。2004年，李沁考入了上海戏校学习专业的昆曲表演艺术，"
				+"而此后她也被时任上海昆剧学院院长的蔡正仁选中，成为了该院的第五代“杜丽娘"
			}
			
		}
		if(j==1){
			var button=document.createElement("button");
			tr.appendChild(button);
			button.style.width="100px";
			button.style.height="150px";
			button.innerHTML="点我删除哟";
			button.onclick=function(){
				var tr=this.parentNode;//会有tbody这个标签
				var trParent=tr.parentNode;
				trParent.removeChild(tr);
			}
		}
	}

}

var howManyOnclick=0;

gkdBtn.onclick=function(){
	howManyOnclick++;
	if(howManyOnclick>=4){
			alert("没有更多了喽");
			return;
		}
	var tr=table.insertRow();
	for(var j=0;j<2;j++){
		var td=tr.insertCell();
		if(howManyOnclick==1){
				if(j==0){
					td.innerHTML="2017年3月4月，李沁确定主演古装传奇爱情剧《狼殿下》；"
					+"7月28日，其与众多艺人共同出演的建军九十周年献礼片《建军大业》上映，"
					+"而她在片中则再一次饰演了杨开慧；9月，李沁还首次入选福布斯中国名人榜，"
					+"排名第100位；12月31日，她还参加了中央电视台跨年晚会，并登台演唱了歌曲《最好的未来》";
					
				}
				if(j==1){
					td.innerHTML="2014年，11月，李沁还在与吴卓羲搭档主演的都市励志偶像剧《幸福归来》"
					+"中饰演了因幼年被调换而沦落为渔民之女的富家千金鱼幼薇；此外，她还与李威、姚笛、黄"
					+"觉等人共同主演了现代都市爱情剧《从爱情到幸福》；年底，李沁还凭借在多部剧集中的表现"
					+"获得了国剧盛典最具潜力女演员奖。";

				}
		}
		if(howManyOnclick==2){
				if(j==0){
					td.innerHTML="2018年5月，主演曹保平执导的悬疑片《她杀》杀青；"
					+"8月，她还入选了福布斯中国“30位30岁以下精英”榜（娱乐领域)；"
					+"9月3日，主演古装玄幻动作剧《斗破苍穹》播出。";
				}
				if(j==1){
					td.innerHTML="2016年，9月，李沁确定出演古装宫斗剧《如懿传》，"
					+"而她在剧中则饰演貌美体香却性格清冷刚烈的容妃寒香见；11月，"
					+"李沁和窦骁再次合作，共同主演由花箐执导的都市情感剧《佳期如梦之海上繁花》。";
				}
		}
		if(howManyOnclick==3){
				if(j==0){
					td.innerHTML="2019年2月，参加中央电视台元宵晚会，与罗云熙、"
					+"张彬彬、魏允熙合作表演歌曲《团圆年》；3月，主演古装权谋剧《南歌》"
					+"；9月13日，主演根据萧鼎同名小说改编并由程小东执导的青春仙侠电影"
					+"《诛仙Ⅰ》上映，在片中李沁饰演刚柔并济的陆雪琪；同月30日，主演的"
					+"剧情片《中国机长》在全国上映；10月，主演的电影《温暖的抱抱》开机；";
				}
				if(j==1){
					td.innerHTML="11月，凭借《中国机长》获得第三届“金色银幕奖”最佳女配角奖"
					+"；同月26日，李沁与张若昀、陈道明、吴刚联袂主演的古装权谋剧《庆余年》在腾"
					+"讯视频、爱奇艺播出，她在剧中饰演的是性格活泼灵动的依晨郡主林婉儿";
				}
		}

		if(j==1){
			var button=document.createElement("button");
			tr.appendChild(button);
			button.style.height="150px";
			button.style.width="100px";
			button.innerHTML="点我删除哟";
			button.onclick=function(){
				var tr=this.parentNode;
				var trParent=tr.parentNode;
				console.log(trParent);
				trParent.removeChild(tr);
			}
		}
	}
}
// var menuData = document.getElementsByClassName('menuData');
// var detail1=document.getElementById("detail1");
// menuData[1].onclick=function(){
// 	console.log("这是郭坤");
// 	var intervalid;
// 	var gkMovieList=document.getElementsByClassName("gkMovie");
// 	console.log(gkMovieList.length);
// 	for(var i=0;i<gkMovieList.length;i++)
// 	setInterval(function(){
// 		if(parseInt(gkMovieList[i].style.marginLeft)>400){
// 			clearInterval(intervalid);
// 			return;
// 		}
// 		gkMovieList[i].style.marginLeft=(parseInt(gkMovieList[i].style.marginLeft)+2)+"px";
// 	},30)
// }




var menuData = document.getElementsByClassName('menuData');
var detailList=document.getElementsByClassName("detail");
var secondBannerImgList = document.getElementsByClassName('secondBannerImg');
var imgsList=["images/qinlast1s.jpg","images/qin2.jpg","images/qin3ls.jpg","images/qin4.png","images/qinl4.jpg","images/qin6ls.jpg"];
var imgsListBig=["images/qinlast1bg.jpg","images/qin2lastbg .jpg","images/qin3lbg.jpg","images/qin4bg.png","images/qinl4bgl.jpg","images/qin6lbglbg.jpg"];
//这是专门放大图片的列表得自己改
var BigImg=document.getElementById("Bigdetail5");
var SmallImg=document.getElementById("Smalldetail4");
var btn1=document.getElementById("btn1");
var btn2=document.getElementById("btn2");
var btn3=document.getElementById("btn3");
var btn4=document.getElementById("btn4");
var gkMovieList=document.getElementsByClassName("gkMovie");
var intervalid1;
var intervalid2;
var intervalid3;
for (var i = 0; i < menuData.length; i++) {
	menuData[i].onclick=function(){
			var flag=parseInt(this.getAttribute("title"));
			this.style.color = "pink";
			this.style.backgroundColor = "#af3188";
			detailList[flag].style.display="block";
			for(var k=0;k<3;k++){
				if(k!=flag){
					console.log("haaaa");
					detailList[k].style.display="none";
					menuData[k].style.backgroundColor = "#efff00";
					menuData[k].style.color="black";
				}
			}
			//李沁的剧照恢复
			console.log("郭坤呀呀呀");
			console.log(gkMovieList[0]);
			console.log(gkMovieList[1]);
			console.log(gkMovieList[2]);
			gkMovieList[0].style.marginLeft="20px";
			gkMovieList[1].style.marginLeft="800px";
			gkMovieList[2].style.marginLeft="20px";
			// clearInterval(intervalid1);
			// clearInterval(intervalid2);
			// clearInterval(intervalid3);

			
		}

	if(i==1){
		console.log(i);
		menuData[1].onclick=function(){
			//直接赋值共有的部分
			var flag=parseInt(this.getAttribute("title"));
			this.style.color = "pink";
			this.style.backgroundColor = "#af3188";
			detailList[flag].style.display="block";
			for(var k=0;k<3;k++){
				if(k!=flag){
					detailList[k].style.display="none";
					menuData[k].style.backgroundColor = "yellow";
					menuData[k].style.color="black";
				}
			}
			
			console.log("这是郭坤");
			console.log(gkMovieList[0].style.marginLeft);
			intervalid1=setInterval(function(){
				if(parseInt(gkMovieList[0].style.marginLeft)>150){
					clearInterval(intervalid1);
					return;
					}
				gkMovieList[0].style.marginLeft=(parseInt(gkMovieList[0].style.marginLeft)+3)+"px";
				},30);
			intervalid2=setInterval(function(){
				if(parseInt(gkMovieList[1].style.marginLeft)<350){
					clearInterval(intervalid2);
					return;
				}
				gkMovieList[1].style.marginLeft=(parseInt(gkMovieList[1].style.marginLeft)-3)+"px";
			},30);
			intervalid3=setInterval(function(){
				if(parseInt(gkMovieList[2].style.marginLeft)>150){
					clearInterval(intervalid3);
					return;
				}
				gkMovieList[2].style.marginLeft=(parseInt(gkMovieList[2].style.marginLeft)+3)+"px";
			},30);
		}
	}

}

for(var j=0;j<3;j++){
	menuData[j].onmouseover=function(){
		this.style.color="orange";
	}
}
for(var j=0;j<3;j++){
	menuData[j].onmouseout=function(){
		this.style.color="black";
	}
}

for (var i = 0; i < secondBannerImgList.length; i++) {
	secondBannerImgList[i].onclick=function(){

		console.log("index");
		var index=parseInt(this.getAttribute("title"));
		console.log("index"+index);
		detailList[2].style.display="none";
		detailList[3].style.display="block";
		SmallImg.src=imgsList[index];
		BigImg.src=imgsListBig[index];

	}
}
btn1.onclick=function(){
		detailList[2].style.display="none";
		detailList[3].style.display="none";
		detailList[4].style.display="block";
}
btn2.onclick=function(){
		detailList[2].style.display="none";
		detailList[3].style.display="block";
		detailList[4].style.display="none";
}

btn3.onclick=function(){

		detailList[2].style.display="block";
		detailList[3].style.display="none";
		detailList[4].style.display="none";
}

btn4.onclick=function(){

		detailList[2].style.display="block";
		detailList[3].style.display="none";
		detailList[4].style.display="none";
}






//雨萌的应该是
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
	var timer=setInterval(next,2000);
	slider.onmouseover=function(){
		animate(left,{opacity:50});
		animate(right,{opacity:50});
		clearInterval(timer);
	}
	//鼠标离开事件
	slider.onmouseout=function(){
		animate(left,{opacity:0});
		animate(right,{opacity:0});
		timer=setInterval(next,2000);
	}
	right.onclick=next;
	left.onclick=prev;
        btn.onclick = function(){
            if(msg.value === ""){
                alert("请输入内容")
            } else{
                n++;
                var li = document.createElement("li");
                li.innerHTML = msg.value + "  "+"<span>&nbsp;&nbsp;×</span>";
                var lis = document.getElementsByTagName("li");
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


        // 新彤


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
			this.style.color="#f29595";
		}

		circle1List[j].onmouseout=function(){
			this.style.color="#af3331";
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
		alert("(ㄏ￣▽￣)ㄏ别想了兄di，怎么可能不是沁沁呢ㄟ(￣▽￣ㄟ)");
	}