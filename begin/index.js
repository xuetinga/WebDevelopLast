

	var container = document.getElementById("container");
	var png = document.getElementsByClassName("png");
	// var body = document.getElementsTagName("body")[0];

	var appellation = document.getElementById('appellation');
	var sentence1 = document.getElementById("sentence1");
	var sentence2 = document.getElementById("sentence2");
	var rating = document.getElementById("rating");
    var app_opacity = 1;

	function view_appe(){
		app_opacity -=0.1;
		console.log(app_opacity);
		if(app_opacity>0.2){
			appellation.style.opacity = app_opacity;
		}
		else if(app_opacity<0.2&&app_opacity>0.1){
			body.removeChild(appellation);
		}
	}

	var interval0 = setInterval(view_appe,50);


	var sen1_opacity = 0;
	function view_sen1(){
		sen1_opacity +=0.1;
		
		if(sen1_opacity<1){
			sentence1.style.opacity = sen1_opacity;
		}
		/*else if(sen1_opacity>0.9&&sen1_opacity<1.1){

			body.removeChild(sentence1);
		}*/
		// if(sen1_opacity==1.1){
			
	}

	var timeout0 = setTimeout(
		function(){ 
			
			clearInterval(interval0);
			var Interval1 = setInterval(view_sen1,50);},600);

	var sen2_opacity = 0;
	function view_sen2(){
		sen2_opacity +=0.1;
		// console.log(sen2_opacity);

		if(sen2_opacity<1){
			sentence2.style.opacity = sen2_opacity;
		}
		/*else if(sen2_opacity>1&&sen2_opacity<1.1){
			body.removeChild(sentence2);
		}*/
	}
	var timeout1 = setTimeout(
		function(){ 
			body.removeChild(sentence1);
			clearTimeout(timeout0);
			// clearInterval(interval1);
			var interval2 = setInterval(view_sen2,50);},2000);

	var rat_opacity = 0;
	function view_rat(){
		rat_opacity +=0.1;

		if(rat_opacity<1){
			rating.style.opacity = rat_opacity;
		}
		else if(rat_opacity>0.9&&rat_opacity<1.1){
			body.removeChild(rating);
		}
	}
	var timeout2 = setTimeout(
		function(){ 
			body.removeChild(sentence2);
			clearTimeout(timeout1);
			// clearInterval(interval2);
			var interval2 = setInterval(view_rat,80);},3000);

	var words = document.getElementById("left");
	var right = 1200;

	function move(){
		right -= 20;
		if(right >-2000){
			words.style.right=right + "px";
		}
		else if(right ==-2000){
			body.removeChild(words);
		}
		
	}
	setTimeout(
		function(){setInterval(move,20);},3900);

	


	var opacity = 0;
	function view(){
		if(opacity<1){
			opacity +=0.05;
			container.style.opacity = opacity;

			for(var i = 0;i<png.length;i++){
				png[i].style.opacity = opacity;
			}
		}
	}

	setTimeout(
		function(){setInterval(view,50);},7000);

    var slidertip = document.getElementById('slidertip');
	var flag = 0;
	function speek(){
		flag--;
		slidertip.style.left=flag + "px";
		if(flag == -800){
			flag = 700;
		}
	}
	setInterval(speek,10);

	var idol = ["陈伟霆","王一博","李沁","肖战","吴亦凡"];
	var idolLink = ["https://xuetinga.github.io/WebDevelopLast/hanhuayun/js/william%20chan.html",
	"https://xuetinga.github.io/WebDevelopLast/hanyumeng/wangyibo.html",
	"https://xuetinga.github.io/WebDevelopLast/liuxintong/xiaozhanhtml/xiaozhan.html",
	"https://xuetinga.github.io/WebDevelopLast/guokun/index.html",
	"https://xuetinga.github.io/WebDevelopLast/liuxueting/Mrswu.html"];
	var wblink = ["https://weibo.com/williamchanwaiting",
	"https://weibo.com/u/5492443184",
	"https://weibo.com/williamchanwaiting",
	"https://weibo.com/u/5492443184",
	"https://weibo.com/xiaozhan1",
	"https://weibo.com/williamchanwaiting",
	"https://weibo.com/u/5492443184"];
	//多个link组 ，存储功能
	
	var search = document.getElementById('input');
	var inputmsg = document.getElementById("input").value;
	search.onfocus = function(){
		search.value = "";
	}

	search.onblur = function(){
		search.value = "请输入相关信息查询";
	}
	var btn = document.getElementById("btn");
	var btn0 = document.getElementById("btn0");
/*
	btn.onclick = function(){
		var i;
		for(i = 0;i<idol.length;i++){
			if(input.indexOf(idol[i])){
				if(input.indexOf("微博")){
					btn0.href = wblink[i];
					// window.open(wblink[i]);
				}
				else{
					btn0.href = idolLink[i];
					// window.open(idolLink[i]);
				}
		}
	}
	*/
	var img11=document.getElementById("img11");
	img11.onmouseover=function(){
		img11.innerHTML="爱伟霆，爱未停";
	}
	img11.onmouseout=function(){
		img11.innerHTML="陈伟霆";
	}

	var img21=document.getElementById("img21");
	img21.onmouseover=function(){
		img21.innerHTML="一啵一啵，摩托摩托";
	}
	img21.onmouseout=function(){
		img21.innerHTML="王一博";
	}
	
	var img31=document.getElementById("img31");
	img31.onmouseover=function(){
		img31.innerHTML="木子水心，沁影随形";
	}
	img31.onmouseout=function(){
		img31.innerHTML="李沁";
	}
	
	var img41=document.getElementById("img41");
	img41.onmouseover=function(){
		img41.innerHTML="肖烟四起，为战而来";
	}
	img41.onmouseout=function(){
		img41.innerHTML="肖战";
	}
	
	var img51=document.getElementById("img51");
	img51.onmouseover=function(){
		img51.innerHTML="亦凡亦凡，生来不凡";
	}
	img51.onmouseout=function(){
		img51.innerHTML="吴亦凡";
	}







// 	var container = document.getElementById("container");
// 	var png = document.getElementsByClassName("png");
// 	// var body = document.getElementsTagName("body")[0];

// 	// var appellation = document.getElementById('appellation');
// 	// var sentence1 = document.getElementById("sentence1");
// 	// var sentence2 = document.getElementById("sentence2");
// 	// var rating = document.getElementById("rating");
//  //    var app_opacity = 1;

// 	// function view_appe(){
// 	// 	app_opacity -=0.1;
// 	// 	console.log(app_opacity);
// 	// 	if(app_opacity>0.2){
// 	// 		appellation.style.opacity = app_opacity;
// 	// 	}
// 	// 	else if(app_opacity<0.2&&app_opacity>0.1){
// 	// 		body.removeChild(appellation);
// 	// 	}
// 	// }

// 	// var interval0 = setInterval(view_appe,50);


// 	// var sen1_opacity = 0;
// 	// function view_sen1(){
// 	// 	sen1_opacity +=0.1;
		
// 	// 	if(sen1_opacity<1){
// 	// 		sentence1.style.opacity = sen1_opacity;
// 	// 	}
// 	// 	/*else if(sen1_opacity>0.9&&sen1_opacity<1.1){

// 	// 		body.removeChild(sentence1);
// 	// 	}*/
// 	// 	// if(sen1_opacity==1.1){
			
// 	// }

// 	// var timeout0 = setTimeout(
// 	// 	function(){ 
			
// 	// 		clearInterval(interval0);
// 	// 		var Interval1 = setInterval(view_sen1,50);},600);

// 	// var sen2_opacity = 0;
// 	// function view_sen2(){
// 	// 	sen2_opacity +=0.1;
// 	// 	// console.log(sen2_opacity);

// 	// 	if(sen2_opacity<1){
// 	// 		sentence2.style.opacity = sen2_opacity;
// 	// 	}
// 	// 	/*else if(sen2_opacity>1&&sen2_opacity<1.1){
// 	// 		body.removeChild(sentence2);
// 	// 	}*/
// 	// }
// 	// var timeout1 = setTimeout(
// 	// 	function(){ 
// 	// 		body.removeChild(sentence1);
// 	// 		clearTimeout(timeout0);
// 	// 		// clearInterval(interval1);
// 	// 		var interval2 = setInterval(view_sen2,50);},2000);

// 	// var rat_opacity = 0;
// 	// function view_rat(){
// 	// 	rat_opacity +=0.1;

// 	// 	if(rat_opacity<1){
// 	// 		rating.style.opacity = rat_opacity;
// 	// 	}
// 	// 	else if(rat_opacity>0.9&&rat_opacity<1.1){
// 	// 		body.removeChild(rating);
// 	// 	}
// 	// }
// 	// var timeout2 = setTimeout(
// 	// 	function(){ 
// 	// 		body.removeChild(sentence2);
// 	// 		clearTimeout(timeout1);
// 	// 		// clearInterval(interval2);
// 	// 		var interval2 = setInterval(view_rat,80);},3000);

// 	// var words = document.getElementById("left");
// 	// var right = 1200;

// 	// function move(){
// 	// 	right -= 20;
// 	// 	if(right >-2000){
// 	// 		words.style.right=right + "px";
// 	// 	}
// 	// 	else if(right ==-2000){
// 	// 		body.removeChild(words);
// 	// 	}
		
// 	// }
// 	// setTimeout(
// 	// 	function(){setInterval(move,20);},3900);

	


// 	var opacity = 0;
// 	function view(){
// 		if(opacity<1){
// 			opacity +=0.05;
// 			container.style.opacity = opacity;

// 			for(var i = 0;i<png.length;i++){
// 				png[i].style.opacity = opacity;
// 			}
// 		}
// 	}

// 	setTimeout(
// 		function(){setInterval(view,50);},0);

//     var slidertip = document.getElementById('slidertip');
// 	var flag = 0;
// 	function speek(){
// 		flag--;
// 		slidertip.style.left=flag + "px";
// 		if(flag == -800){
// 			flag = 700;
// 		}
// 	}
// 	setInterval(speek,10);

// 	//var idol = ["陈伟霆","王一博","李沁","肖战","吴亦凡"];
// 	//var idolLink = ["","","","",""];
// 	//多个link组 ，存储功能
// 	var search = document.getElementById('input');
// 	var inputmsg = document.getElementById("input").value;
// 	search.onfocus = function(){
// 		search.value = " ";
// 	}

// 	search.onblur = function(){
// 		search.value = "请输入相关信息查询";
// 	}
// 	/*
// 	btn.onclick = function(){
// 		var i;
// 		for(i = 0;i<idol.length;i++){
// 			if(input.indexOf(idol[0])){
// 				if(input.indexOf()){
// 					window.open();
// 				}
// 				else if(input.indexOf()){
// 					window.open();
// 				}
// 				else if(input.indexOf()){
// 					window.open();
// 				}
// 				else if(input.indexOf()){
// 					window.open();
// 				}
// 				else if(input.indexOf()){
// 					window.open();
// 				}
// 			}
// 		}
// 	}
	
// */
// 	var img11=document.getElementById("img11");
// 	img11.onmouseover=function(){
// 		img11.innerHTML="爱伟霆，爱未停";
// 	}
// 	img11.onmouseout=function(){
// 		img11.innerHTML="陈伟霆";
// 	}

// 	var img21=document.getElementById("img21");
// 	img21.onmouseover=function(){
// 		img21.innerHTML="一啵一啵，摩托摩托";
// 	}
// 	img21.onmouseout=function(){
// 		img21.innerHTML="王一博";
// 	}
	
// 	var img31=document.getElementById("img31");
// 	img31.onmouseover=function(){
// 		img31.innerHTML="木子水心，沁影随形";
// 	}
// 	img31.onmouseout=function(){
// 		img31.innerHTML="李沁";
// 	}
	
// 	var img41=document.getElementById("img41");
// 	img41.onmouseover=function(){
// 		img41.innerHTML="肖烟四起，为战而来";
// 	}
// 	img41.onmouseout=function(){
// 		img41.innerHTML="肖战";
// 	}
	
// 	var img51=document.getElementById("img51");
// 	img51.onmouseover=function(){
// 		img51.innerHTML="亦凡亦凡，生来不凡";
// 	}
// 	img51.onmouseout=function(){
// 		img51.innerHTML="吴亦凡";
// 	}
