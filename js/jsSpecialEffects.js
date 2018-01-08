/**01-封装的动画函数  dom对象  只设置left目标值数字  能够让任意对象移动到指定位置
 * [animate description]
 * @param  {[type]} obj    [description]
 * @param  {[type]} target [description]
 * @return {[type]}        [description]
 */
    function animate(obj, target) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var leader = obj.offsetLeft;
            var step = 10;
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

/**
 * 02-封装的缓动函数  dom对象  只设置left目标值数字  越到目标值的时候步幅越来越慢
 * [animate2 description]
 * @param  {[type]} obj    [description]
 * @param  {[type]} target [description]
 * @return {[type]}        [description]
 */
/*   function animate2(obj, target) {
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
    } */   
//


/**
03-封装 能够让 任意对象 移动到 指定位置 的动画函数
所有属性都到达目标值之后才能清理定时器
封装 能够让 任意对象 的指定属性 变到指定值 的动画函数
  animate(bottomPart, {"height": 0}, function () {
            animate(bottomPart.parentNode, {"width": 0});
    });
 * [animate description]
 * @param  {[type]}   obj  [description]
 * @param  {[type]}   json [description]
 * @param  {Function} fn   [description]
 * @return {[type]}        [description]
 */
    function animate1(obj, json, fn) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var flag = true;
            for (var k in json) {
                if (k === "opacity") {//特殊处理
                    //var leader = parseInt(getStyle(obj, k)) || 0;
                    var leader = getStyle(obj, k) * 100;//1
                    // 0 || 1 结果是1 那么如果透明度当前的值是0 就会变成1
                    //所以这里不能给默认值 而且也没有必要
                    //透明度没有单位px 所以也不用parseInt 参与运算自动变为数字
                    var target = json[k] * 100;//0.5
                    var step = (target - leader) / 10;//0.5-1=-0.5
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);//-1
                    leader = leader + step;
                    //obj.style[k] = leader + "px";
                    obj.style[k] = leader / 100;//opacity没有单位
                } else if (k === "zIndex") {
                    obj.style.zIndex = json[k];//无需渐变 直接设置即可
                } else {
                    var leader = parseInt(getStyle(obj, k)) || 0;
                    var target = json[k];
                    var step = (target - leader) / 10;
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);
                    leader = leader + step;
                    obj.style[k] = leader + "px";
                }
                if (leader !== target) {
                    flag = false;
                }
            }
            if (flag) {
                clearInterval(obj.timer);
                if (fn) {//如果有才调用
                    fn();//动画执行完成后执行
                }
            }
        }, 15);
    }
/**
 * 04-获取元素值  不管行内内嵌  获取的是最终生效的  与上面的animate组合使用  
 * 传递的属性是字符串 返回的是字符串带单位
 * [getStyle description]
 * @param  {[type]} obj  [description]
 * @param  {[type]} attr [description]
 * @return {[type]}      [description]
 */
    function getStyle(obj, attr) {
        if (window.getComputedStyle) {
            return window.getComputedStyle(obj, null)[attr];
        } else {
            return obj.currentStyle[attr];
        }
    }

/**
 * 05-完整的轮播图
 * [slideShow description]
 * @return {[type]} [description]
 */
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
    };
    //需求：鼠标经过按钮 按钮排他 还要把ul以动画的方式移动到指定位置
    //1.鼠标经过按钮 按钮排他
  /*  var box = document.getElementById("box");
    var inner = box.children[0];
    var ul = inner.children[0];
    var squareList = inner.children[1];
    var squares = squareList.children;//所有按钮
    var imgWidth = inner.offsetWidth;//图片宽度
    //alert(imgWidth);
    //给每一个按钮注册鼠标经过事件
    for (var i = 0; i < squares.length; i++) {
        squares[i].index = i;//把索引保存在自定义属性中
        squares[i].onmouseover = function () {
            //排他
            //干掉所有人
            for (var j = 0; j < squares.length; j++) {
                squares[j].className = "";
            }
            //留下我自己
            this.className = "current";
            //以动画的方式把ul移动到指定位置
            //目标 和 当前按钮索引有关 和 图片宽度有关 而且是负数
            var target = -this.index * imgWidth;
            animate(ul, target);

        };
    }

    //需求 点击左右箭头 以动画效果移动ul到指定位置
    //找人
    var box = document.getElementById("box");
    var ad = box.children[0];
    var ul = document.getElementById("imgList");
    var lis = ul.children;
    var arr = document.getElementById("arr");
    var left = document.getElementById("left");
    var right = document.getElementById("right");
    var imgWidth = ad.offsetWidth;//图片宽度
    //alert(imgWidth);
    //1.鼠标经过盒子 显示arr 鼠标离开后隐藏
    box.onmouseover = function () {
        arr.style.display = "block";
    };
    box.onmouseout = function () {
        arr.style.display = "none";
    };
    //2.点击右箭头 以动画的形式 把ul移动到指定的位置
    var pic = 0;//记录当前显示的图片的索引
    right.onclick = function () {
        //先判断 然后再去执行 移动ul的代码
        if (pic === lis.length - 1) {//如果是最后一个图片的索引 就不能再执行了
            return;
        }
        pic++;//计算出接下来要显示的图片的索引
        //目标 和pic有关 和 图片宽度有关 而且是负数
        var target = -pic * imgWidth;
        animate(ul, target);
    };
    left.onclick = function () {
        //先判断 然后再去执行 移动ul的代码
        if (pic === 0) {//如果是第一个图片的索引 就不能再执行了
            return;
        }
        pic--;//计算出接下来要显示的图片的索引
        //目标 和pic有关 和 图片宽度有关 而且是负数
        var target = -pic * imgWidth;
        animate(ul, target);
    };    */
 /*    var screen = document.getElementById("screen");
    var ul = screen.children[0];
    var timer = setInterval(play, 15);
    screen.onmouseover = function () {
        clearInterval(timer);
    };
    screen.onmouseout = function () {
        timer = setInterval(play, 15);
    };

    function play() {
        //leader = leader + step
        var leader = ul.offsetLeft;
        var step = -2;
        if (leader > -900) {
            leader = leader + step;
            ul.style.left = leader + "px";
        } else {
            ul.style.left = 0;
        }
    }*/
   // setInterval(right.onclick, 1000);//自动播放
   
   
/**
 * 06-随鼠标化冻云
 * [cloud description]
 * @return {[type]} [description]
 */
   function cloud(){
     var lastPosition = 0;
    //鼠标经过当前li 让筋斗云 跑到当前li的位置
    //点击当前li 记录当前li的位置 下一次回到这个位置
    var navBar = document.getElementById("navBar");
    var cloud = document.getElementById("cloud");
    var lis = navBar.children;
    for (var i = 0; i < lis.length; i++) {
        //鼠标经过要过来
        lis[i].onmouseover = function () {
            //让筋斗云 跑到当前li的位置
            var target = this.offsetLeft;
            animate(cloud, target);
        };
        //鼠标离开后要回去
        lis[i].onmouseout = function () {
            animate(cloud, lastPosition);
        };
        //点击当前li 记录当前li的位置
        lis[i].onclick = function () {
            lastPosition = this.offsetLeft;//记录当前点击的位置
        };
    }
   }
/**
 * 07-手风琴特效
 * [shoufengqin description]
 * @return {[type]} [description]
 */
   function shoufengqin(){
      var  box=document.getElementById("box");
        var ul=box.children[0];
        var lis=ul.children;
        for(var i=0;i<lis.length;i++){
            lis[i].style.backgroundImage="url('images/"+(i+1)+".jpg')";
            lis[i].onmouseover=function(){
                for(var j=0;j<lis.length;j++){
                    animate(lis[j],{"width":100});
                }
                animate(this,{"width":800});
            };
            lis[i].onmouseout=function(){
                for(var j=0;j<lis.length;j++){
                    animate(lis[j],{"width":240});
                }
            };
        }
   }

/**
 * 08-旋转木马
 * [xuanzhuanmuma description]
 * @return {[type]} [description]
 */
   function xuanzhuanmuma(){
         var wrap = document.getElementById("wrap");
    var arrow = document.getElementById("arrow");
    var arrLeft = document.getElementById("arrLeft");
    var arrRight = document.getElementById("arrRight");
    var slide = document.getElementById("slide");
    var ul = slide.children[0];
    var lis = ul.children;//所有图片
    //1.鼠标经过轮播图 让箭头渐渐地显示 鼠标离开渐渐消失
    wrap.onmouseover = function () {
        animate(arrow, {"opacity": 1});
    };
    wrap.onmouseout = function () {
        animate(arrow, {"opacity": 0});
    };
    //2.设置图片位置

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
            width: 600,
            top: 70,
            left: 600,
            opacity: 0.8,
            zIndex: 3
        },//3
        {
            "width": 400,
            "top": 20,
            "left": 750,
            "opacity": 0.2,
            "zIndex": 2
        }//4
    ];//其实就是一个配置单 规定了每张图片的大小位置层级透明度

    //获取页面上所有的li 让他们从当前的位置 以动画的效果到指定的位置
    function assign() {
        for (var i = 0; i < lis.length; i++) {
            animate(lis[i], config[i], function () {
                flag = true;//动画执行完成后重新打开阀门
            });
        }
    }

    assign();
    //3.点击箭头旋转
    //点击右箭头
    arrRight.onclick = function () {
        if (flag) {
            flag = false;//关闭阀门
            //把开始的元素放到最后
            config.push(config.shift());
            assign();
        }
    };
    //点击左箭头
    arrLeft.onclick = function () {
        if (flag) {
            flag = false;
            //把最后的元素放到开始
            config.unshift(config.pop());
            assign();
        }

    };
    //4.添加节流阀
    var flag = true;//表示阀门是打开的

};
 

/**
 *  //清除选中文字
            window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
 */

/**
 * 鼠标跟谁
 * [flower description]
 * @return {[type]} [description]
 */
function flower(){
     //找人
    var d_box = document.getElementById("d_box");//盒子
    var drop = document.getElementById("drop");//拖动条
    //需求：鼠标在拖动条上按下 可以拖拽 鼠标移动的时候 让d_box跟着鼠标移动
    drop.onmousedown = function (event) {
        var event = event || window.event;
        //获取鼠标在页面中的位置
        var pageX = event.pageX || event.clientX + document.documentElement.scrollLeft;
        var pageY = event.pageY || event.clientY + document.documentElement.scrollTop;
        //获取鼠标在按下的那一瞬间在盒子中的位置
        var boxX = pageX - d_box.offsetLeft;
        var boxY = pageY - d_box.offsetTop;
        //鼠标在页面上移动 让d_box跟着鼠标移动
        document.onmousemove = function (event) {
            var event = event || window.event;
            //获取鼠标在页面上的位置
            var pageX = event.pageX || event.clientX + document.documentElement.scrollLeft;
            var pageY = event.pageY || event.clientY + document.documentElement.scrollTop;
            //让d_box跟着鼠标移动
            d_box.style.left = pageX - boxX + "px";
            d_box.style.top = pageY - boxY + "px";
            //清除选中文字
            window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        };
    };

    //鼠标弹起 盒子就不应该跟着了
    document.onmouseup = function () {
        document.onmousemove = null;
    };
}   

/**
 * 电商展示商品放大镜
 * [dianshang description]
 * @return {[type]} [description]
 */
function dianshang(){
    var box = document.getElementById("box");
    var smallBox = document.getElementById("smallBox");
    var bigBox = document.getElementById("bigBox");
    var bigImg = document.getElementById("bigImg");
    var mask = document.getElementById("mask");
    //1.鼠标经过小盒子 显示遮罩和大盒子 鼠标离开后隐藏
    smallBox.onmouseover = function () {
        mask.style.display = "block";
        bigBox.style.display = "block";
    };
    smallBox.onmouseout = function () {
        mask.style.display = "none";
        bigBox.style.display = "none";
    };
    //2.遮罩跟随鼠标坐标
    //鼠标在smallBox上移动的时候 获取鼠标在盒子中的坐标 然后设置mask的位置
    smallBox.onmousemove = function (event) {
        var event = event || window.event;
        //获取鼠标在页面中的坐标
        var pageX = event.pageX || event.clientX + document.documentElement.scrollLeft;
        var pageY = event.pageY || event.clientY + document.documentElement.scrollTop;
        //获取鼠标在盒子中的坐标
        //这里不能用smallBox.offsetLeft因为smallBox的offsetParent是box
        //而smallBox到box的offsetLeft是0 所以这里要用box.offsetLeft
        var boxX = pageX - box.offsetLeft;
        var boxY = pageY - box.offsetTop;
        //计算mask的坐标
        var maskX = boxX - mask.offsetWidth / 2;
        var maskY = boxY - mask.offsetHeight / 2;
        //3.限制遮罩的运动范围
        if (maskX < 0) {
            maskX = 0;
        }
        if (maskX > smallBox.offsetWidth - mask.offsetWidth) {
            maskX = smallBox.offsetWidth - mask.offsetWidth;
        }
        if (maskY < 0) {
            maskY = 0;
        }
        if (maskY > smallBox.offsetHeight - mask.offsetHeight) {
            maskY = smallBox.offsetHeight - mask.offsetHeight;
        }
        //console.log(maskX + "--" + maskY);
        //设置mask的位置
        mask.style.left = maskX + "px";
        mask.style.top = maskY + "px";
        //4.按照比例移动大图

        //大图能够移动的总距离 = 大图的宽度-大盒子的宽度
        var bigToMove = bigImg.offsetWidth - bigBox.offsetWidth;
        //mask能够移动的总距离 = 小盒子的宽度-mask的宽度
        var maskToMove = smallBox.offsetWidth - mask.offsetWidth;
        //rate = 大图能够移动的总距离/mask能够移动的总距离
        var rate = bigToMove / maskToMove;
        //大图应该到的位置  = rate * mask当前的位置 (移动方向相反所以是负数)
        bigImg.style.left = -rate * maskX + "px";
        bigImg.style.top = -rate * maskY + "px";

    };
}

/**
 * 滚动条特效
 * [gundongtiao description]
 * @return {[type]} [description]
 */
function gundongtiao(){
      //找人
    var box = document.getElementById("box");
    var content = document.getElementById("content");
    var bar = document.getElementById("bar");
    //需求：拖动滚动条 让滚动条跟着鼠标走 内容也要按照比例移动
    //1.1按照比例计算bar的高度
    //bar的高度/侧边栏的高度=显示出来的内容的高度/内容的整体高度
    //bar的高度/box的高度=box的高度/content高度
    //bar的高度=box的高度/content高度*box的高度
    //1.2如果内容没有全部显示出来 才需要有滚动条 如果内容能够完全显示 就不需要有滚动条了
    if (content.offsetHeight > box.offsetHeight) {
        bar.style.height = box.offsetHeight / content.offsetHeight * box.offsetHeight + "px";
    } else {
        bar.style.height = 0;
    }
    //2.鼠标在bar上按下 bar变为可以拖动的状态 鼠标移动的时候 让bar跟着鼠标走
    bar.onmousedown = function (event) {
        var event = event || window.event;
        //获取鼠标在页面中的位置
        var pageY = event.pageY || event.clientY + document.documentElement.scrollTop;
        //获取鼠标在bar上按下时在bar中的位置
        var barBoxY = pageY - box.offsetTop - bar.offsetTop;
        document.onmousemove = function (event) {
            var event = event || window.event;
            //鼠标在页面中的坐标
            var pageY = event.pageY || event.clientY + document.documentElement.scrollTop;
            //鼠标在盒子中的坐标
            var boxY = pageY - box.offsetTop;
            //bar应该去的位置
            var barY = boxY - barBoxY;
            //3.限制bar的运动范围
            if (barY < 0) {
                barY = 0;
            }
            if (barY > box.offsetHeight - bar.offsetHeight) {
                barY = box.offsetHeight - bar.offsetHeight;
            }
            //让bar跟着鼠标在盒子中的坐标走
            bar.style.top = barY + "px";
            //清除选中文字
            window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
            //4.按照比例移动内容
            //内容要移动的距离/bar当前移动的距离 = 内容能够移动的总距离/bar能够移动的总距离
            //内容要移动的距离 = 内容能够移动的总距离/bar能够移动的总距离*bar当前移动的距离
            //rate = 内容能够移动的总距离/bar能够移动的总距离
            var rate = (content.offsetHeight - box.offsetHeight) / (box.offsetHeight - bar.offsetHeight);
            //内容要移动的距离 = rate*bar当前移动的距离
            content.style.top = -rate * barY + "px";//运动方向是相反的


        };
    };

    //鼠标弹起后 bar就不要跟着走了
    document.onmouseup = function () {
        document.onmousemove = null;
    };
}