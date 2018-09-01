define(["parabola","jquery","jquery-cookie"],function(parabola,$){
	var detail = function(){
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
/* 滑过购物车出现*/
		$("#shop").mouseover(function(){
			$(".shoptext").css("display","block");
		})
		$("#shop").mouseout(function(){
			$(".shoptext").css("display","none");
		})
/* 获取cookie */
		var cartStr = $.cookie("cart") ? $.cookie("cart") : "";
		if(!cartStr){
			$(".shoptext").html(" ");
		}else{
			var str = `<li>
						<img src="images/img1_03.jpg" alt="">
						<div class="text">
							<p>2018春夏新款 圆领T 女款 白色...</p>
							<span>￥158 X <span>1</span></span>
						</div>
						<div class="del">删除</div>
					</li>`
			$(str).appendTo(".shoptext");
		}
/* 点击删除 删除*/
		$(".del").click(function(){
			$(".shoptext").html("");
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

/* 图片实现选项卡变化 及放大镜*/

			$("#detail .small-img").on("mouseover","img",function(){
				$("#big-pic").find("img").css('zIndex',"0");
				$("#detail .small-img").find('img').attr("class", '');
				$("#detail .big-img").find('div').css('display', 'none');
				var a = $(this).index();
				$(this).attr('class', 'active');
				$("#detail .big-img").find('div').eq(a).css('display', 'block');
				
				$("#big-pic").find("img").eq(a).css('zIndex','100');
			})

			var oMark1 = document.querySelectorAll(".mark1");
			//console.log(oMark1);
			var oFloat = document.querySelectorAll(".float");
			var oTop = document.getElementById("big-img");
			var oBigs = oTop.getElementsByTagName("div");
			var oBottom = document.getElementById("small-img");
			var oSmalls = oBottom.getElementsByTagName("img");
			var oBigpic = document.getElementById("big-pic"); 
			var oBigimg = oBigpic.getElementsByTagName("img");
			//给遮罩添加移入移出事件
			for(var i = 0;i < oMark1.length; i++){
				oMark1[i].index = i;
				oMark1[i].onmouseenter = function(){
					this.style.zIndex = "2";
					oFloat[this.index].style.display = "block";
					oBigpic.style.display = "block";
				}
				oMark1[i].onmouseleave = function(){
					oFloat[this.index].style.display = "none";
					oBigpic.style.display = "none";
				}
				//给遮罩添加移动事件。给float做鼠标跟随的效果和边界
			oMark1[i].onmousemove = function(event){
				var e = event || window.event;
				//做ofloat的跟随事件
				var left = e.pageX - oTop.offsetLeft - oMark1[this.index].offsetLeft - oFloat[this.index].offsetWidth/2-100;
				var top = e.pageY - oTop.offsetTop - oMark1[this.index].offsetTop - oFloat[this.index].offsetHeight/2-300;
				//设置左边界
				if(left < 0){
					left = 0;
				}else if(left > oMark1[this.index].offsetWidth - oFloat[this.index].offsetWidth){
					left = oMark1[this.index].offsetWidth - oFloat[this.index].offsetWidth;
				}
				//设置上下的边界
				if(top < 0){
					top = 0;
				}else if(top > oMark1[this.index].offsetHeight - oFloat[this.index].offsetHeight){
					top = oMark1[this.index].offsetHeight - oFloat[this.index].offsetHeight;
				}
				//设置float的left和top的值
				oFloat[this.index].style.left = left + "px";
				oFloat[this.index].style.top = top + "px";
				//设置滑块在小图中的比列
				var pX = left / (oMark1[this.index].offsetWidth - oFloat[this.index].offsetWidth);
				var pY = top / (oMark1[this.index].offsetHeight - oFloat[this.index].offsetHeight);
				//console.log(pX,pY);
				//设置大图的移动范围（两个的比列要相同，因为图是比框要大的，图要往左移动）
					oBigimg[this.index].style.left = -pX *(oBigimg[this.index].offsetWidth - oBigpic.offsetWidth) + "px";
					oBigimg[this.index].style.top = -pY * (oBigimg[this.index].offsetHeight - oBigpic.offsetHeight) + "px";
			}

			}
/* 点击尺码变化边框颜色*/
		$(".img-detail .size p").find("span").click(function(){
			$(".img-detail .size p").find("span").attr("class","");
			$(this).attr("class","spc");
		})


/* 动态加载数据*/
		$.ajax({
			url: 'data/detail.json',
			success:function(data){
				//console.log(data);
				for(var i = 0; i < data.length; i++){
					$(`<img class="active" src="${data[i].src1}" alt="" id="${data[i].id}">
						<img src="${data[i].src2}" alt="">
						<img src="${data[i].src3}" alt="">
						<img src="${data[i].src4}" alt="">
					<img src="${data[i].src5}" alt="">`).appendTo($("#small-img"));
					$(`<span>${data[i].price}</span>`).insertBefore($(".img-detail .price i"));
					$(`<span class="span1">${data[i].text}</span>`).insertBefore(".close-btm .span2");
					$(`<span class="spc">${data[i].size}</span>`).insertAfter('.size .close-size');
				}
			}
			
		}).done(function(){
			/* 设置cookie */
	//给加入购物车按钮添加点击事件
		//加载已有的购物车信息
		$(function(){
			loadCart();
		$(".img-detail .buy .buy2").click(function(e){
			//获取商品的名称
			var goodName = $(".close-btm .span1").html();
			//获取商品的价格
			//alert("|"+goodName+"|");
			var goodPrice = $(".img-detail .price span").html();
			//获取商品尺码
			
			var goodSize = $(".img-detail .size #dd .spc").html();
			//console.log(goodSize);
			//获取商品的图片
			var goodSrc = $("#small-img img").eq(0).attr("src");
			//console.log(goodSrc);
			//获取商品中的id
			var goodId = $("#small-img .active").attr("id");
			//获取cookie中的信息
			var cartStr = $.cookie("cart") ? $.cookie("cart") : "";
			//将字符串转为对象
			console.log(cartStr);
			var cartObj = convertCartStrToObj(cartStr);

			console.log(cartObj);
			//判断该商品是否已经在购物车中存在
					if(goodId in cartObj){
						//如果已存在，那么该商品的数量加1
						cartObj[goodId].num += 1;
					}else{
						//如果不存在，那么将新商品的信息存入
						cartObj[goodId] = {
							name : goodName,
							price : goodPrice,
							num : 1,
							src : goodSrc,
							size : goodSize
						};
					}
					//将新的购物车信息存回cookie
					//将对象转为字符串
					cartStr = convertObjToCartStr(cartObj);
					//console.log(cartStr); 	
					//存入cookie
					//document.cookie = "key=value"
					$.cookie("cart",cartStr,{expires : 7,path:"/"});
					$("#search #shop").html(function(index,v){
						//"购物车（0）"
						var pattern = /(\d+)/;
						var num = parseInt(v.match(pattern)[1]);
						return "购物车(" + (num + 1) + ")";
					});

		})
		

			function convertCartStrToObj(cartStr){
				
				if(!cartStr){
					return {};
				}
				var goods = cartStr.split(":");
				var obj = {};
				for(var i = 0; i < goods.length; i ++){
					var data = goods[i].split(",");
					//以商品的id为健，商品的其他信息为值，这个值也设计为一个对象
					//console.log(data);
					obj[data[0]] = {
						name : data[1],
						price : parseFloat(data[2]),
						num : parseInt(data[3]),
						src : data[4],
						size:data[5]

					}
				}
				return obj;
			}
			function convertObjToCartStr(obj){
					
					var cartStr = "";
					//遍历对象
					for(var id in obj){
						if(cartStr){
							cartStr += ":";
						}
						
						cartStr += id + "," + obj[id].name + "," + obj[id].price + "," + obj[id].num + "," + obj[id].src + "," + obj[id].size;
					}
					return cartStr;
			}
			
			//加载购物车中的信息（使商品页与购物车页中的购物车数量同步）
			function loadCart(){
				var cartStr = $.cookie("cart") ? $.cookie("cart") : "";
					var cartObj = convertCartStrToObj(cartStr);
					//获取到购物车中所有商品的数量
					var total = 0;
					for(var id in cartObj){
						total += cartObj[id].num;
					}
					$("#search #shop").html("购物车(" + total + ")");
			}


		})

		//点击购物车删除效果
		$(".shoptext .del").click(function(){
			$(".shoptext").html("");
			var a = $.cookie("cart");
			//console.log(a);
			$.cookie("cart",a,{expries:-1});
		})

		//点击跳转页面
		$("#shop").click(function(){
			window.location = "/projectstart/dist/buy.html"
		})
		});

		


	}
	return {
		detail :detail
	}
})
