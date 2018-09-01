
define(["parabola","jquery","jquery-cookie"],function(parabola,$){
	var main = function(){

/* 头部滑过效果*/
		$(".ord").mouseover(function(){
			$(".ord").css("color","#b71c20")
		})
		$(".ord").mouseout(function(){
			$(".ord").css("color","#808080")
		})
		$(".not").mouseover(function(){
			$(".not").css("color","#b71c20")
		})
		$(".not").mouseout(function(){
			$(".not").css("color","#808080")
		})

/* 头部滑过出现二维码*/
		$("#code").mouseover(function(){
			$("#code-img").css("display","block")
		})
		$("#code").mouseout(function(){
			$("#code-img").css("display","none")
		})

/* 滑过搜索框变色*/
		$("#sear-v").hover(function(){
			$(this).addClass('hover');
		},function(){
			$(this).removeClass('hover');
		})
		$(".hover").dblclick(function() {
			$("#sear-v").dblclick();
		})	

/* 加载二级导航条*/		

				$(".nav>li>a").mouseover(function(){
				$(this).css({
					borderBottom:"4px solid #b81b22",
					color:"#b81b22"
				}).mouseout(function(){
					$(this).css({
						borderBottom:0,
						color:"#727171"
					})
				})
			})
				$(".nav>li>a").mouseover(function(){
					$(".nav>li>a").eq(0).css("borderBottom",0)
				})

				$(".nav li").eq(1).mouseover(function(){
					$(".na").stop().slideDown(00);
				})
				$(".nav li").eq(1).mouseout(function(){
					$(".na").stop().slideUp(00);
				})
				$(".na li a").mouseover(function(){
					$(this).css("color","#b81b22")
				})
				$(".na li a").mouseout(function(){
					$(this).css("color","#727171")
				})
				$(".nav>li").eq(2).mouseover(function(){
					$(".na1").stop().slideDown(00);
				})
				$(".nav>li").eq(2).mouseout(function(){
					$(".na1").stop().slideUp(00);
				})
				$(".na1 li a").mouseover(function(){
					$(this).css("color","#b81b22")
				})
				$(".na1 li a").mouseout(function(){
					$(this).css("color","#727171")
				})
				$(".nav>li").eq(3).mouseover(function(){
					$(".na2").stop().slideDown(00);
				})
				$(".nav>li").eq(3).mouseout(function(){
					$(".na2").stop().slideUp(00);
				})
				$(".na2 li a").mouseover(function(){
					$(this).css("color","#b81b22")
				})
				$(".na2 li a").mouseout(function(){
					$(this).css("color","#727171")
				})
				$(".nav>li").eq(4).mouseover(function(){
					$(".na3").stop().slideDown(00);
				})
				$(".nav>li").eq(4).mouseout(function(){
					$(".na3").stop().slideUp(00);
				})
				$(".na3 li a").mouseover(function(){
					$(this).css("color","#b81b22")
				})
				$(".na3 li a").mouseout(function(){
					$(this).css("color","#727171")
				})

				$(".nav>li").eq(5).mouseover(function(){
					$(".na4").stop().slideDown(00);
				})
				$(".nav>li").eq(5).mouseout(function(){
					$(".na4").stop().slideUp(00);
				})
				$(".na4 li a").mouseover(function(){
					$(this).css("color","#b81b22")
				})
				$(".na4 li a").mouseout(function(){
					$(this).css("color","#727171")
				})
				$(".nav>li").eq(6).mouseover(function(){
					$(".na5").stop().slideDown(00);
				})
				$(".nav>li").eq(6).mouseout(function(){
					$(".na5").stop().slideUp(00);
				})
				$(".na5 li a").mouseover(function(){
					$(this).css("color","#b81b22")
				})
				$(".na5 li a").mouseout(function(){
					$(this).css("color","#727171")
				})
				$(".nav>li").eq(7).mouseover(function(){
					$(".na6").stop().slideDown(00);
				})
				$(".nav>li").eq(7).mouseout(function(){
					$(".na6").stop().slideUp(00);
				})
				$(".na6 li a").mouseover(function(){
					$(this).css("color","#b81b22")
				})
				$(".na6 li a").mouseout(function(){
					$(this).css("color","#727171")
				})
				$(".nav>li").eq(8).mouseover(function(){
					$(".na7").stop().slideDown(00);
				})
				$(".nav>li").eq(8).mouseout(function(){
					$(".na7").stop().slideUp(00);
				})
				$(".na7 li a").mouseover(function(){
					$(this).css("color","#b81b22")
				})
				$(".na7 li a").mouseout(function(){
					$(this).css("color","#727171")
				})
				$(".nav>li").eq(9).mouseover(function(){
					$(".na8").stop().slideDown(00);
				})
				$(".nav>li").eq(9).mouseout(function(){
					$(".na8").stop().slideUp(00);
				})
				$(".na8 li a").mouseover(function(){
					$(this).css("color","#b81b22")
				})
				$(".na8 li a").mouseout(function(){
					$(this).css("color","#727171")
				})

/* 动态加载轮播图*/
		$.ajax({
			url: 'data/sider.json',
			success:function(data){
				//console.log(data);
				for(var i = 0; i < data.length; i++){
					$(`<li><img src="${data[i].src}" alt=""></li>`).appendTo('.siders')
				}
			}
		});
		/*轮播*/
		var c = 0;
		bangding();
		function bangding(){
			$(".siders li").eq(c).show().siblings('li').hide();
			$(".bottom li").eq(c).css({"background":"red"}).siblings('li').css({"background":"#999"});
		}
		//自动轮播函数
		function zidong(){
			c++;
			c=c==5?0:c;
			bangding();
		}
		var dong = setInterval(zidong,2500);
		//鼠标事件，鼠标移入停止动画 移出继续
		$(".siders").mouseover(function(){
			clearInterval(dong);
		})
		$(".siders").mouseout(function(){
			dong = setInterval(zidong,2500);
		})
		//鼠标事件，点击切换上一张
		$("#btn_l").click(function(){
			c--;
			c=c==-1?4:c;
			bangding();
		}).mousemove(function(){
            $(this).css({'background-position':'0 -61px'})
        }).mouseout(function(){
            $(this).css({'background-position':'0 0'})
        })
        //鼠标事件，点击切换下一张
        $('#btn_r').click(function(){
            c++;
            c=c==5?0:c;
            bangding();
        }).mousemove(function(){
            $(this).css({'background-position':'-50px -61px'})
        }).mouseout(function(){
            $(this).css({'background-position':'-50px 0'})
        })
        //鼠标事件，点击小圆点实现切换图片
        $('.bottom li').mouseover(function(){
            c = $(this).index();
            console.log(c);
            bangding();
        })

/* 倒计时*/
		var oHour = $(".hour").html();
		var oMin = $(".min").html();
		var oSec = $(".sec").html();

/* 动态加载秒杀板块数据*/	
		$.ajax({
			url: 'data/every.json',
			success:function(data){
				//console.log(data);
				for(var i = 0; i < data.length;i++){
					$(`<div><img src="${data[i].src}" alt="">
			<p>${data[i].title}</p>
			<span id="del">${data[i].price1}</span>
			<span class="left">${data[i].price}</span>
			<span class="right">充值后<span class="col">${data[i].num}</span>元</span></div>`).appendTo($('#goods'));
				}
				$("#goods div").eq(4).addClass('last');
			}
			
		});

/* 动态加载熊本熊图片*/

		$.ajax({
			url: 'data/xiong.json',
			success:function(data){
				//console.log(data);
				for(var i = 0; i < data.length; i++){
					$(`<div class="shirt-box">
			<img src="${data[i].src}" alt="">
		</div>`).appendTo('#tshirt');
				}
				$("#tshirt div").eq(3).addClass('last');
			}
			
		});

/* 动态加载优选*/

		$.ajax({
			url: 'data/rec.json',
			success:function(data){
				//console.log(data);
				for(var i = 0;i < data.length;i++){
					$(`<div class="left">
			<img src="${data[i].src1}" alt="">
			<div>
				<span class="le">${data[i].span1}</span>
				<span class="rig">${data[i].span2}</span>
			</div>
		</div>
		<div class="center">
			<div class="top">
				<img src="${data[i].src2}" alt="">
				<div>
					<span class="le">${data[i].span3}</span>
					<span class="rig">${data[i].span4}</span>
				</div>
			</div>
			<div class="btm">
				<img src="${data[i].src3}" alt="">
				<div>
					<span class="le">${data[i].span5}</span>
					<span class="rig">${data[i].span6}</span>
				</div>
			</div>
		</div>
		<div class="right">
			<img src="${data[i].src4}" alt="">
			<div>
				<span class="le">${data[i].span7}</span>
				<span class="rig">${data[i].span8}</span>
			</div>
		</div>`).appendTo($("#rec-box"));
				}
				
			}
			
		});

/* 动态加载优选*/

		$.ajax({
			url: 'data/rec.json',
			success:function(data){
				//console.log(data);
				for(var i = 0;i < data.length;i++){
					$(`<div class="left">
			<img src="${data[i].src1}" alt="">
			<div>
				<span class="le">${data[i].span1}</span>
				<span class="rig">${data[i].span2}</span>
			</div>
		</div>
		<div class="center">
			<div class="top">
				<img src="${data[i].src2}" alt="">
				<div>
					<span class="le">${data[i].span3}</span>
					<span class="rig">${data[i].span4}</span>
				</div>
			</div>
			<div class="btm">
				<img src="${data[i].src3}" alt="">
				<div>
					<span class="le">${data[i].span5}</span>
					<span class="rig">${data[i].span6}</span>
				</div>
			</div>
		</div>
		<div class="right">
			<img src="${data[i].src4}" alt="">
			<div>
				<span class="le">${data[i].span7}</span>
				<span class="rig">${data[i].span8}</span>
			</div>
		</div>`).appendTo($("#rec-box1"));
				}
				
			}
			
		});

/* 动态加载下装*/
		$.ajax({
			url: 'data/rant.json',
			success:function(data){
				//console.log(data);
				for(var i = 0; i < data.length; i++){
					$(`<div>
			<img src="${data[i].src1}" alt="">
			<div>
				<span class="r-left">${data[i].span1}</span>
				<span class="r-right">充值购买相当于 <span class="r-price">${data[i].span2}</span>起</span>
			</div>
		</div>`).appendTo($('#rant-box'));
				}
				$("#rant-box>div").eq(3).addClass('rant-last');
			}
			
		});

/* 动态加载更多精品详情*/

		$.ajax({
			url: 'data/bout.json',
			success:function(data){
				console.log(data);
				for(var i = 0;i < data.length; i++){
					$(`<img src="${data[i].src1}" alt="">`).appendTo($('#bouts-box'));
				}
				$("#bouts-box>img").eq(2).addClass('bout-right');
				$("#bouts-box>img").eq(5).addClass('bout-right');
			}
			
		});

/* 回到顶部效果*/

		$("#reback").click(function(){
			 $('html , body').animate({scrollTop: 0},'fast');
			
		})

/* 点击跳到列表页*/
		$("#jump").click(function(){
			location.href="/projectstart/dist/list.html";
		})

	}
	return {
		main :main
	}
})