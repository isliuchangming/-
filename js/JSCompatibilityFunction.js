/**
 * 01-innerText&textContent
 * 获取元素内部文本的兼容
 * [getInnerText description]
 * @param  {[type]} element [DOM元素]
 * @return {[type]}     元素内文本 字符串  [description]
 */
	function getInnerText(element){
		if(typeof element.innerText==="string"){
			return element.innerText;
		}else{
			return element.textContent;
		}
	}
/**
 * 02-innerText&textContent
 * 设置元素内部文本的兼容
 * [setInnerText description]
 * @param {[type]} element [DOM元素，设置的字符串]
 * @param {[type]} str     [无返回值]
 */
	function setInnerText(element,content){
		if(typeof element.innerText==="string"){
			element.innerText=content;
		}else{
			element.textContent=content;
		}
	}

/**
 * 03-nextElementSibling&nextSibling
 * 获取下一个兄弟元素
 * [getElementSibling description]
 * @param  {[type]} element [穿入dom元素]
 * @return {[type]}         [返回兄弟元素]
 */
	function getElementSibling(element){
        if(element.nextElementSibling){
            return element.nextElementSibling;
        }else{
            var next=element.nextSibling;
            while(next&&next.nodeType!==1){
                next=next.nextSibling;
        	}
            return next;
    	}
	}


/**
 *04- 获取上一个兄弟元素的兼容函数
 * @param element
 * @returns {*}
 */
    function getPreviousElement(element) {
        if (element.previousElementSibling) {
            return element.previousElementSibling;
        } else {
            var prev = element.previousSibling;
            while (prev && prev.nodeType !== 1) {
                prev = prev.previousSibling;
            }
            return prev;
        }
    }

/**
 * 05-firstElementChild&&firstChild
 * //获取第一个子元素的兼容函数
 * [getFirstElement description]
 * @param  {[type]} element [dom对象]
 * @return {[type]}         [description]
 */
    function getFirstElement(element) {
        if (element.firstElementChild) {
            return element.firstElementChild;
        } else {
            var node = element.firstChild;
            while (node && node.nodeType !== 1) {
                node = node.nextSibling;
            }
            return node;
        }
    }
/**
 * 06-获取最后一个子元素的兼容函数
 * @param element
 * @returns {*}
 */
    function getLastElement(element) {
        if (element.lastElementChild) {
            return element.lastElementChild;
        } else {
            var node = element.lastChild;
            while (node && node.nodeType !== 1) {
                node = node.previousSibling;
            }
            return node;
        }
    }

/**
 * 07-通过类名获取指定父元素内部的指定类名元素  这个不准确zhi能够确保元素类名里面有想要的  indexof不准确
 * [getElementsByClassName description]
 * @param  {[type]} element   [description]
 * @param  {[type]} className [description]
 * @return {[type]}           [description]
 */
    function getElementsByClassName1(element, className) {
        if (element.getElementsByClassName) {
            return element.getElementsByClassName(className);//如果支持就使用
        } else {
            //不支持
            //通过标签名索取当前元素范围内所有的标签 然后一个一个的检测 看类名是否符合要求
            //如果符合要求 就放到一个新数组中 最后把这个数组返回
            var filterArr = [];
            var elements = element.getElementsByTagName("*");//通配符 表示所有标签
            //把每一个标签从集合中取出
            for (var i = 0; i < elements.length; i++) {
                //elements[i]//每一个标签
                if (elements[i].className.indexOf(className) !== -1) {
                    //说明类名的字符串中有我要的那个类名
                    filterArr.push(elements[i]);
                }
            }
            return filterArr;
        }
    }
 

/**
 * 08-通过类名获取指定父元素内部的指定类名元素 准确
 * [getElementsByClassName description]
 * @param  {[type]} element   [description]
 * @param  {[type]} className [description]
 * @return {[type]}           [description]
 */
     function getElementsByClassName(element, className) {      
              if (element.getElementsByClassName) {
                return element.getElementsByClassName(className);//如果支持就使用
            } else {
                //先找到所有的标签 然后判断类名是否符合要求
                //如果符合要求 就放到数组中 最后返回数组
                    var filterArr = [];
                    var elements = element.getElementsByTagName("*");
                    for (var i = 0; i < elements.length; i++) {
                        var nameArr = elements[i].className.split(" ");
                        for (var j = 0; j < nameArr.length; j++) {//遍历当前元素的类名数组
                            if (nameArr[j] === className) {
                                filterArr.push(elements[i]);
                                break;
                            }
                        }
                    }
                    return filterArr;
                    }      
        } 

     //
    /*function replaceClassName(element, oldStr, newStr) {
     element.className = element.className.replace(oldStr, newStr);
     }*/
/**
 * 09-封装替换类名的函数  准确
 * [replaceClassName description]
 * @param  {[type]} element [description]
 * @param  {[type]} oldStr  [description]
 * @param  {[type]} newStr  [description]
 * @return {[type]}         [description]
 */
    function replaceClassName(element, oldStr, newStr) {
        var nameArr = element.className.split(" ");//把类名切割成一个一个的类名
        for (var i = 0; i < nameArr.length; i++) {
            if (nameArr[i] === oldStr) {
                nameArr[i] = newStr;
            }
        }
        element.className = nameArr.join(" ");
    }    

/**
 * 10-获取body页面的滚动坐标
 * [scroll description]
 * @return {[type]} [description]
 */
     function scroll() {
        return {
            top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
            left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
        };
    }


/**
 * 事件对象的进一步封装
 * [eventUtils description]
 * @type {Object}
 */
 var eventUtils = {
        getEvent: function (event) {
            return event || window.event;
        },
        getPageX: function (event) {
            return event.pageX || event.clientX + document.documentElement.scrollLeft;
        },
        getPageY: function (event) {
            return event.pageY || event.clientY + document.documentElement.scrollTop;
        },
        stopPropagation: function (event) {
            if (event.stopPropagation) {
                event.stopPropagation();
            } else {
                event.cancelBubble = true;
            }
        },
        getTarget: function (event) {
            return event.target || event.srcElement;
        }
    };



/**
 * 11-读取对象属性的兼容方式ie678不支持不管是行内还是内嵌的
 * 读取的是最终生效的传递的属性是字符串返回的是字符串带单位
 * [getStyle description]
 * @param  {[type]} obj  [description]
 * @param  {[type]} attr [description]
 * @return {[type]}      [description]
 */
    function getStyle(obj,attr)
        {
            if(window.getComputedStyle)
            {
                return window.getComputedStyle(obj,null)[attr];
            }else{
                return obj.currentStyle[attr];
            }
        }

/**
 * 12-够获取网页可视区的宽度和高度
 * [client description]
 * @return {[type]} [description]
 */
    function client() {
        return {
            width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0,
            height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0
        };
    }
//获取页面上的位置
    function getPage(event){
            var event=event||window.event;
            return {
                X:event.pageX||event.clientX+document.documentElement.scrollLeft,
                Y:event.pageY||event.client+document.documentElement.scrollTop
            };
        };
/**
 * 阻止事件冒泡
 * [stopPropagation description]
 * @param  {[type]} event [description]
 * @return {[type]}       [description]
 */
  function stopPropagation(event) {
        var event = event || window.event;
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    };       

/**
 * 事件对象
 * [target description]
 * @param  {[type]} event [description]
 * @return {[type]}       [description]
 */
    function target(event){
         var event=event||window.event;
        var target=event.target||event.srcElement;
    }



    
/**
 * //element要绑定事件的元素对象 eventName是字符串而且不加on listener事件处理函数
 * addEvent(btn1, "click", fn);
    removeEvent(btn1, "click", fn);
 * [addEvent description]
 * @param {[type]} element   [description]
 * @param {[type]} eventName [description]
 * @param {[type]} listener  [description]
 */
    function addEvent(element, eventName, listener) {
        if (element.addEventListener) {
            element.addEventListener(eventName, listener, false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + eventName, listener);
        } else {
            //element.onclick = listener;
            //element["onclick"] = listener;
            element["on" + eventName] = listener;
        }
    }
    //封装 兼容所有浏览器的移除事件的函数
    function removeEvent(element, eventName, listener) {
        if (element.removeEventListener) {
            element.removeEventListener(eventName, listener, false);
        } else if (element.detachEvent) {
            element.detachEvent("on" + eventName, listener);
        } else {
            element["on" + eventName] = null;
        }
    }