$(function(){

	/*S  侧边栏搜索*/
		$(".product_sort .bd .item").each(function(index,element){
			$(element).hover(function(){
				 $("#seaContent").html("");
				$(element).clone(true).appendTo("#seaContent");
				$("#seaContent").css("display","block");
			},function(){
				 $("#seaContent").css("display","none");
			    $("#seaContent").html("");
			});
		});
		$("#adClose").click(function(){
			this.parentNode.parentNode.remove();
		});

	/*E  侧边栏搜索*/
	

});

   // 定义变量 保存 点击的次数
       var clickNum = 0;
       
       // 定义变量 来判断是否正在旋转
       var isTransition = false;
       
       // 入口函数
        $(function(){
           
            // 为 .items 绑定 过渡 结束事件
            $('.qiegelunbo .items').last().on('transitionend',function(){
                // alert('最后一个 过渡完毕');
                // 才能够 再次点击
                isTransition = false;
            })
            
            // 下一张按钮 点击事件绑定
            $('.qiegelunbo .after').on('click',function(){
                
                // 判断 是否可以 让items 进行旋转
                if(isTransition == true)return;
                
                // 如果能够执行到这里 说明 isTransition=false;
                isTransition = true;
                
                // 累加点击次数
                clickNum++;
                
            
                // 使用 循环 来实现 延迟 过渡
                $('.qiegelunbo .items').each(function(index,ele){
                    // 实现 延迟过渡
                     setTimeout(function(){
                        $(ele).css({
                        transform:'rotateX('+clickNum*90+'deg)'
                        })
                    },index*100)
                })
            });
            
            $('.qiegelunbo .before').on('click',function(){
                // 判断 是否可以 让items 进行旋转
                if(isTransition == true)return;
                
                // 如果能够执行到这里 说明 isTransition=false;
                isTransition = true;
                
                // 累加点击次数
                clickNum--;
                
                // 使用 循环 来实现 延迟 过渡
                $('.qiegelunbo .items').each(function(index,ele){
                    // 实现 延迟过渡
                     setTimeout(function(){
                        $(ele).css({
                        transform:'rotateX('+clickNum*90+'deg)'
                        })
                    },index*100)
                })
            });
            })
        