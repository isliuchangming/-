/**
 * 这是index的body部分的js
 */


window.onload=function(){

	  var txt = document.getElementById("txt");
	  var containerOne  = document.getElementById("containerOne");


	  /*S 抢购倒计时*/	
	  		countDown();
	  		function countDown(){
	  			var num=7200;
	  			var hour=document.getElementById("hour");
	  			var minute=document.getElementById("minute");
	  			var second=document.getElementById("second");
	  			var timer=setInterval(function(){
		  			hour.innerHTML="";
		  			minute.innerHTML="";
		  			second.innerHTML="";
	  				var hours=parseInt(num/3600)>9?parseInt(num/3600):"0"+parseInt(num/3600);
		  			var minutes=parseInt(num/60%60)>9?parseInt(num/60%60):"0"+parseInt(num/60%60);
		  			var seconds=parseInt(num%60)>9?parseInt(num%60):"0"+parseInt(num%60);
		  			hour.innerHTML=hours;
		  			minute.innerHTML=minutes;
		  			second.innerHTML=seconds;
		  			num--;
		  			if(num===0){
		  				clearInterval(timer);
		  			}
	  			},1000);

	  		};
	  /*S 抢购倒计时*/



	  /*S 内容一右边下拉*/	
	  	onerigDropTip();

	  	function onerigDropTip(){
	  		var display1=document.getElementById("display1");
	  		var display2=document.getElementById("display2");
	  		var rigCenter=document.getElementById("rigCenter");
	  		var rigCenterUl=rigCenter.children[0];
	  		var rigCenterLis=rigCenterUl.children;
	  		for(var i=0;i<rigCenterLis.length;i++){
		  	 	rigCenterLis[i].onmouseover=function(){
		  	 		if(this.nodeName==="LI"){
		  	 			display2.style.display="none";
		  	 			display1.style.display="none";
		  	 			document.getElementById("display"+this.value).style.display="block";
		  	 		
		  	 		}		  	 		
		  	 	};
	  	};
	  }
	  /*E 内容一右边下拉*/



	  /*S 快捷导航栏下拉*/

		  dropTip();
		  function dropTip(){	
		  	var shoRiBox=document.getElementById("shoRiBox");
		  	 var shoUl=shoRiBox.children;
		  	 for(var i=0;i<shoUl.length;i++){
		  	 	shoUl[i].onmouseover=function(){
		  	 		if(this.nodeName==="LI"){
		  	 			if(this.className==="flag"){
		  	 				var dropbox=this.children[1];
		  	 				dropbox.style.display="block";
		  	 				this.style.backgroundColor = '#fff';
				  	 		this.style.border = '1px solid #999';
				  	 		this.style.borderBottom = 'none';
		  	 			}
		  	 		}
		  	 		
		  	 	};
		  	 	shoUl[i].onmouseout=function(){
		  	 		if(this.nodeName==="LI"){
		  	 			if(this.className==="flag"){
		  	 				var dropbox=this.children[1];
		  	 				dropbox.style.display="none";
		  	 				this.style.backgroundColor = '#e3e4e5';
		  	 				this.style.border = 'none';
		  	 			}
		  	 		}
		  	 		
		  	 	};
		  	 }	  	
		  }

		/*E 快捷导航栏下拉*/


	  /*S 固定导航*/
	  		popupSearch();
		    function popupSearch(){
		    	var navBar = document.getElementById("navBar");
			    //需求：窗体滚动的时候 判断页面被卷去的头部的高度 如果 大于topPart的高度
			    //就要把navBar变为固定定位
			    window.onscroll = function () {
			        //判断页面被卷去的头部的高度 如果 大于topPart的高度
			        if (scroll().top > 714) {
			            navBar.className = "fixed";
			            //navBar变为固定定位后 脱离标准流 不再占位置 后面的就跳上来了
			            //为了防止 后面的内容跳上来 可以 给后面的内容 加paddingTop
			            // mainPart.style.paddingTop = navBar.offsetHeight + "px";
			            navBar.style.display="block";
			            navBar.style.zIndex = "199";
			        } else {
			            navBar.className = "";
			            navBar.style.display="none";
			            navBar.style.display="1";
			            // mainPart.style.paddingTop = 0;
			        }
			    };
		    };
	  /*E 固定导航*/
	

	/*S 搜索框*/	
		 //找人
	  
	    searchTip();

	    function searchTip(){
	    	 //文本框获取焦点后 如果是默认文字 才要清除
		    txt.onfocus = function () {
		        //txt.value = "";//这里 txt 和 this 指的都是文本框
		        if (this.value === "金融") {
		            this.value = "";
		        }
		    };
		    //文本框失去焦点后 如果用户没有输入内容 默认文字要加上
		    txt.onblur = function () {
		        if (this.value === "") {
		            this.value = "金融";
		        }
		    };
	    }
	   
	/*E 搜索框*/



	/*S 输入框*/
		 search();
  		 function search(){
	   		 //用户输入的同时 根据用户在文本框中输入的内容 寻找匹配项目 然后创建盒子
		    //假数据
		    var datas = ["手机", "手表", "手表男", "手环", "手表女", "手机壳", "手柄","手电筒","手机京东自营","手表机械表","衣架","衣服","衣服男","衣服女","衣柜 简易","衣柜 木","衣服女夏装","衣帽架","衣橱"];
		    //
		    // var txt = document.getElementById("txtSearch");
		    var logobox = document.getElementById("logobox");
		    var logo = document.getElementById("logo");
		    var container = document.getElementById("container");
		    txt.onkeyup = function () {
		        //获取内容并判断
		        var val = this.value;//文本框中的内容
		        //从datas里面寻找和val匹配的项目 如果匹配放到一个新数组中
		        var filterArr = [];
		        for (var i = 0; i < datas.length; i++) {
		            var data = datas[i];//每个数据
		            if (data.indexOf(val) === 0) {
		                filterArr.push(data);
		            }
		        }

		        //1.div会重叠
		        //在创建div之前 先判断一下有没有 如果有要先把之前的div删除
		        var popDiv = document.getElementById("pop");

		        //如果有 就是对象 如果没有就是null
		        if (popDiv) {
		            //如果能进来 说明已经有了 如果有了就要删除
		            container.removeChild(popDiv);
		        }
		        //2.如果没有匹配项 就不创建了
		        if (filterArr.length === 0) {
		            return;
		        }
		        //3.如果用户输入为空 也不创建了
		        if (val === "") {
		            return;
		        }
		        //动态生成结构
		        popDiv = document.createElement("div");
		        container.style.zIndex = 99;
		        container.style.backgroundColor="#fff";
		        containerOne.style.zIndex = 4;
		        container.style.height = "250px";
		        container.style.border = "1px solid #fff";
		        popDiv.id = "pop";
		        container.appendChild(popDiv);
		        var ul = document.createElement("ul");
		        popDiv.appendChild(ul);
		        //根据filterArr里的数据 创建li 并追加到ul中
		        for (var i = 0; i < filterArr.length; i++) {
		            var item = filterArr[i];//每个项目
		            var li = document.createElement("li");
		            li.innerText = item;//处理一下兼容问题
		            ul.appendChild(li);
		        }
		    };
		    txt.onblur=function(){
		    	container.innerHTML="";
		    	txt.value="";
		    	containerOne.style.zIndex = 9;
		    	container.style.zIndex = 1;
		    	container.style.height = 0;
		    	container.style.backgroundColor="#F6F6F6";
		    	container.style.border="none";
		    };
	  	 };
	/*E 输入框*/





	/*S 滑动云*/
		cloud();

		function cloud(){
			var lastPosition = 0;
		    //鼠标经过当前li 让筋斗云 跑到当前li的位置
		    //点击当前li 记录当前li的位置 下一次回到这个位置
		    var navBar = document.getElementById("linnavbar");
		    var cloud = document.getElementById("cloud");
		    var lis = navBar.children;
		    lis[0].style.color="white";
		    for (var i = 0; i < lis.length; i++) {
		        //鼠标经过要过来
		        lis[i].onmouseover = function () {
		            //让筋斗云 跑到当前li的位置
		            for(var j=0;j<lis.length;j++){
		            	lis[j].style.color="#555";            	
		            }
		            var target = this.offsetLeft;
		            animate(cloud, target);
		            this.style.color="#fff";
		        };
		        //鼠标离开后要回去
		        lis[i].onmouseout = function () {
		        	 for(var j=0;j<lis.length;j++){
		        	 	if(lis[j].index==="last"){
		        	 		lis[j].style.color="white";
		        	 		continue;
		        	 	}
		            	lis[j].style.color="#555";            	
		            }
		            animate(cloud, lastPosition);
		        };
		        //点击当前li 记录当前li的位置
		        lis[i].onclick = function () {
		        	for(var j=0;j<lis.length;j++){
		        		lis[j].index="";
		        	}
		            lastPosition = this.offsetLeft;//记录当前点击的位置
		            this.index="last";
		        };
		    }
		}
	/*E 滑动云*/
		



	/*S  轮播图*/	
		slideShow(box,arr,left,right);

		 function slideShow(box,arr,left,right){
	       var timer = null;
		    //需求 实现一个 完整的轮播图
		    //找人
		    var box = document.getElementById("box");
		    var screen = box.children[0];
		    var ul = screen.children[0];
		    var ol = screen.children[1];
		    var ulLis = ul.children;//所有的广告
		    var imgWidth = screen.offsetWidth;
		   //alert(imgWidth);
		    //箭头
		    var arr = document.getElementById("arr");
		    var left = document.getElementById("left");
		    var right = document.getElementById("right");
		    //1.动态生成结构
		    //1.1根据图片数量动态生成按钮
		    for (var i = 0; i < ulLis.length; i++) {
		        var li = document.createElement("li");
		        li.innerHTML = i + 1;
		        ol.appendChild(li);
		    }
		    var olLis = ol.children;//所有的按钮
		    olLis[0].className = "current";
		    //1.2克隆第一张广告 放到最后
		    var firstImg = ulLis[0].cloneNode(true);
		    ul.appendChild(firstImg);
		    //2.鼠标经过按钮
		    //鼠标经过按钮 按钮排他 以动画的形式把ul移动到指定的位置
		    for (var j = 0; j < olLis.length; j++) {
		        olLis[j].index = j;
		        olLis[j].onmouseover = function () {
		            //排他
		            //干掉所有人
		            for (var k = 0; k < olLis.length; k++) {
		                olLis[k].className = "";
		            }
		            //留下我自己
		            this.className = "current";
		            //以动画的形式把ul移动到指定的位置
		            //目标 和 按钮索引有关 和 图片宽度有关 而且是负数
		            var target = -this.index * imgWidth;
		            animate(ul, target);
		            //还要把几个索引统一
		            pic = this.index;
		            square = this.index;
		        };
		    }
		    //3.鼠标点击箭头
		    //3.1鼠标经过盒子 显示箭头 鼠标离开盒子 隐藏箭头
		    box.onmouseover = function () {
		        arr.style.display = "block";//显示箭头
		        clearInterval(timer);//停止自动播放
		    };
		    box.onmouseout = function () {
		        arr.style.display = "none";//隐藏箭头
		        timer = setInterval(right.onclick, 1000);//从新自动播放
		    };
		    //3.2点击右箭头 以动画的形式把ul移动到指定的位置
		    var pic = 0;//记录当前正在显示的图片的索引
		    var square = 0;//记录当前正在亮起的按钮的索引
		    right.onclick = function () {
		        //先判断 如果是最后一个图片 先让ul瞬间跳会开始位置 然后索引也要归零
		        if (pic === ulLis.length - 1) {
		            ul.style.left = 0 + "px";
		            pic = 0;//索引也要归零
		        }
		        pic++;//计算出将要显示的图片的索引
		        //目标 和pic有关 和 图片宽度有关 而且是负数
		        var target = -pic * imgWidth;
		        animate(ul, target);
		        //按钮也要跟着走
		        if (square < olLis.length - 1) {
		            square++;
		        } else {
		            square = 0;
		        }
		        //干掉所有人
		        for (var i = 0; i < olLis.length; i++) {
		            olLis[i].className = "";
		        }
		        //留下对应的
		        olLis[square].className = "current";
		    };
		    left.onclick = function () {
		        //先判断 如果是第一个图片 先让ul瞬间跳到最后的位置 然后索引也要到最后
		        if (pic === 0) {
		            ul.style.left = -(ulLis.length - 1) * imgWidth + "px";
		            pic = ulLis.length - 1;//索引也要归零
		        }
		        pic--;//计算出将要显示的图片的索引
		        //目标 和pic有关 和 图片宽度有关 而且是负数
		        var target = -pic * imgWidth;
		        animate(ul, target);
		        //按钮也要跟着走
		        if (square > 0) {
		            square--;
		        } else {
		            square = olLis.length - 1;
		        }
		        //干掉所有人
		        for (var i = 0; i < olLis.length; i++) {
		            olLis[i].className = "";
		        }
		        //留下对应的
		        olLis[square].className = "current";
		    };

		    timer = setInterval(right.onclick, 1000);//自动播放

		    function animate(obj, target) {
		        clearInterval(obj.timer);
		        obj.timer = setInterval(function () {
		            var leader = obj.offsetLeft;
		            var step = 30;
		            step = leader < target ? step : -step;//step有了正负
		            if (Math.abs(leader - target) >= Math.abs(step)) {
		                leader = leader + step;
		                obj.style.left = leader + "px";
		            } else {
		                obj.style.left = target + "px";//手动放到终点
		                clearInterval(obj.timer);
		            }
		        }, 15);
		    }
		   
	    };/*	slideShow();

		 function slideShow(){
	       var timer = null;
		    //需求 实现一个 完整的轮播图
		    //找人
		    var box = document.getElementById("box");
		    var screen = box.children[0];
		    var ul = screen.children[0];
		    var ol = screen.children[1];
		    var ulLis = ul.children;//所有的广告
		    var imgWidth = screen.offsetWidth;
		   //alert(imgWidth);
		    //箭头
		    var arr = document.getElementById("arr");
		    var left = document.getElementById("left");
		    var right = document.getElementById("right");
		    //1.动态生成结构
		    //1.1根据图片数量动态生成按钮
		    for (var i = 0; i < ulLis.length; i++) {
		        var li = document.createElement("li");
		        li.innerHTML = i + 1;
		        ol.appendChild(li);
		    }
		    var olLis = ol.children;//所有的按钮
		    olLis[0].className = "current";
		    //1.2克隆第一张广告 放到最后
		    var firstImg = ulLis[0].cloneNode(true);
		    ul.appendChild(firstImg);
		    //2.鼠标经过按钮
		    //鼠标经过按钮 按钮排他 以动画的形式把ul移动到指定的位置
		    for (var j = 0; j < olLis.length; j++) {
		        olLis[j].index = j;
		        olLis[j].onmouseover = function () {
		            //排他
		            //干掉所有人
		            for (var k = 0; k < olLis.length; k++) {
		                olLis[k].className = "";
		            }
		            //留下我自己
		            this.className = "current";
		            //以动画的形式把ul移动到指定的位置
		            //目标 和 按钮索引有关 和 图片宽度有关 而且是负数
		            var target = -this.index * imgWidth;
		            animate(ul, target);
		            //还要把几个索引统一
		            pic = this.index;
		            square = this.index;
		        };
		    }
		    //3.鼠标点击箭头
		    //3.1鼠标经过盒子 显示箭头 鼠标离开盒子 隐藏箭头
		    box.onmouseover = function () {
		        arr.style.display = "block";//显示箭头
		        clearInterval(timer);//停止自动播放
		    };
		    box.onmouseout = function () {
		        arr.style.display = "none";//隐藏箭头
		        timer = setInterval(right.onclick, 1000);//从新自动播放
		    };
		    //3.2点击右箭头 以动画的形式把ul移动到指定的位置
		    var pic = 0;//记录当前正在显示的图片的索引
		    var square = 0;//记录当前正在亮起的按钮的索引
		    right.onclick = function () {
		        //先判断 如果是最后一个图片 先让ul瞬间跳会开始位置 然后索引也要归零
		        if (pic === ulLis.length - 1) {
		            ul.style.left = 0 + "px";
		            pic = 0;//索引也要归零
		        }
		        pic++;//计算出将要显示的图片的索引
		        //目标 和pic有关 和 图片宽度有关 而且是负数
		        var target = -pic * imgWidth;
		        animate(ul, target);
		        //按钮也要跟着走
		        if (square < olLis.length - 1) {
		            square++;
		        } else {
		            square = 0;
		        }
		        //干掉所有人
		        for (var i = 0; i < olLis.length; i++) {
		            olLis[i].className = "";
		        }
		        //留下对应的
		        olLis[square].className = "current";
		    };
		    left.onclick = function () {
		        //先判断 如果是第一个图片 先让ul瞬间跳到最后的位置 然后索引也要到最后
		        if (pic === 0) {
		            ul.style.left = -(ulLis.length - 1) * imgWidth + "px";
		            pic = ulLis.length - 1;//索引也要归零
		        }
		        pic--;//计算出将要显示的图片的索引
		        //目标 和pic有关 和 图片宽度有关 而且是负数
		        var target = -pic * imgWidth;
		        animate(ul, target);
		        //按钮也要跟着走
		        if (square > 0) {
		            square--;
		        } else {
		            square = olLis.length - 1;
		        }
		        //干掉所有人
		        for (var i = 0; i < olLis.length; i++) {
		            olLis[i].className = "";
		        }
		        //留下对应的
		        olLis[square].className = "current";
		    };

		    timer = setInterval(right.onclick, 1000);//自动播放

		    function animate(obj, target) {
		        clearInterval(obj.timer);
		        obj.timer = setInterval(function () {
		            var leader = obj.offsetLeft;
		            var step = 30;
		            step = leader < target ? step : -step;//step有了正负
		            if (Math.abs(leader - target) >= Math.abs(step)) {
		                leader = leader + step;
		                obj.style.left = leader + "px";
		            } else {
		                obj.style.left = target + "px";//手动放到终点
		                clearInterval(obj.timer);
		            }
		        }, 15);
		    }
		   
	    };*/
	  
	/*E  轮播图*/

	/*S 旋转木马*/
		rotate();
		function rotate(){
			 	var wrap = document.getElementById("wrap");
			    var slide = document.getElementById("slide");
			    var ul = slide.children[0];
			    var lis = ul.children;//所有的li
			    var arrow = document.getElementById("arrow");
			    var arrLeft = document.getElementById("arrLeft");
			    var arrRight = document.getElementById("arrRight");
			    //1.鼠标经过盒子 让箭头渐渐地显示 离开渐渐地隐藏
			    wrap.onmouseover = function () {
			        //让箭头渐渐地显示
			        animate1(arrow, {"opacity": 1});
			    };
			    wrap.onmouseout = function () {
			        //让箭头渐渐地隐藏
			        animate1(arrow, {"opacity": 0});
			    };

			    var config = [
			        {
			            "width": 400,
			            "top": 20,
			            "left": 50,
			            "opacity": 0.2,
			            "zIndex": 2
			        },//0
			        {
			            "width": 600,
			            "top": 70,
			            "left": 0,
			            "opacity": 0.8,
			            "zIndex": 3
			        },//1
			        {
			            "width": 800,
			            "top": 100,
			            "left": 200,
			            "opacity": 1,
			            "zIndex": 4
			        },//2
			        {
			            "width": 600,
			            "top": 70,
			            "left": 600,
			            "opacity": 0.8,
			            "zIndex": 3
			        },//3
			        {
			            "width": 400,
			            "top": 20,
			            "left": 750,
			            "opacity": 0.2,
			            "zIndex": 2
			        }//4
			    ];//其实就是一个配置单 规定了每张图片的大小位置层级透明度

			    //2.把配置单中的配置 逐个设置给每一个li
			    function assign() {
			        for (var i = 0; i < lis.length; i++) {
			            animate1(lis[i], config[i], function () {
			                flag = true;//动画执行完成后 重新打开阀门
			            });
			        }
			    }

			    assign();

			    //3.点击箭头 旋转 图片
			    arrRight.onclick = function () {
			        if (flag) {//如果阀门的打开的 就可以执行动画
			            flag = false;//点击一次后 马上吗阀门关闭
			            config.push(config.shift());//把第一个放到最后
			            assign();//按照新生成的配置单 重新分配位置
			        }

			    };
			    arrLeft.onclick = function () {
			        if (flag) {
			            flag = false;
			            config.unshift(config.pop());//把最后的放到最前
			            assign();//按照新生成的配置单 重新分配位置
			        }
			    };

			    //4.添加节流阀
			    var flag = true;//阀门现在是打开的

					}
	/*E 旋转木马*/


	/*S 手风琴*/	
			shoufengqin();

		 	function shoufengqin(){
		 		var Accordion = document.getElementById("Accordion");
			    var ul = Accordion.children[0];
			    var lis = ul.children;
			    //动态添加背景图
			    for (var i = 0; i < lis.length; i++) {
			        lis[i].style.backgroundImage = "url(images/1" + (i + 1) + ".jpg)";
			        //鼠标经过当前li 当前li的宽度变为800 其他li的宽度变为100
			        lis[i].onmouseover = function () {
			            //干掉所有人 其他li的宽度变为100 而且是动画效果
			            for (var j = 0; j < lis.length; j++) {
			                animate1(lis[j], {"width": 100});
			            }
			            //留下我自己 当前li的宽度变为800
			            animate1(this, {"width": 800});
			        };
			    }
			    //离开后 所有的li宽度变会240
			    Accordion.onmouseout = function () {
			        for (var i = 0; i < lis.length; i++) {
			            animate1(lis[i], {"width": 240});
			        }
			    };
		 	}
	/*E 手风琴*/

};

	

