define(["parabola","jquery","jquery-cookie"],function(parabola,$){
	var list = function(){
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






/* 动态加载图片*/
		$.ajax({
			url: 'data/list.json',
			success:function(data){
				//console.log(data);
				for(var i = 0; i < data.length; i++){
					$(`<div>
			<img class="img1" src="${data[i].src1}" alt="">
			<p class="text">${data[i].text}</p>
			<p class="price">${data[i].price} <span>${data[i].price_num}</span></p>
			
		</div>`).appendTo("#art");
				}
				$("#art div").eq(4).addClass('art-last');
				$("#art div").addClass('art-pic');
				$(`<img class="img2" src="images/zijie_03.jpg" alt="">`).appendTo('#art div');
				
			}
/* 划过出现图片*/
			
		}).done(function(){
			$(".art-pic").mouseover(function(){
				$(this).find(".img2").css({
					"display":"block",
				})
				$(this).css({
					"border" : "1px solid #b81c22"
				})
			})
			$("#art .art-pic").mouseout(function(){
				$(".img2").css({
					"display":"none"
				})
				$(this).css({
					"border" : "1px solid #dbd7d6"
				})
			})
		})
		/* 点击跳转到详情页*/
		$("#art").on("click","div",function(){
			window.location = "/projectstart/dist/detail.html"
		})

	}
	return {
		list :list
	}
})
