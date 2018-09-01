define(["parabola","jquery","jquery-cookie"],function(parabola,$){
	var buy = function(){
/* 获取cookie*/
		var cartStr = $.cookie("cart") ? $.cookie("cart") : "";


		if(!cartStr){
			$("#commod").css("display","none");
			$("#no-commod").css("display","block");
		}else{

			var cartObj = convertCartStrToObj(cartStr);
			console.log(cartObj);
			for(var id in cartObj){
				var good = cartObj[id];
				var str = `<!-- 我的购物车 -->
		<div class="car">
			<div class="car1"></div>
			<span>我的购物车</span>
		</div>
		<p class="p1">
			<span class="span1">温馨提示：</span>1.选购清单中的商品无法保留库存，请您及时结算。2.商品的价格和库存将以订单提交时为准。3.促销活动满减优惠将均摊至商品小计中。 
		</p>
		<div class="detail">
			<div class="tick">
				<span class="tick1">√</span>
				<span class="all">全选</span>
			</div>
			<div class="trade">
				商品名称
			</div>
			<div class="size">
				尺寸
			</div>
			<div class="price">
				单价
			</div>
			<div class="num">
				数量
			</div>
			<div class="discount">
				优惠
			</div>
			<div class="count">
				小计
			</div>
			<div class="action">
				操作
			</div>
		</div>
		<div class="detail1 clear-fix">
			<ul class="detail1-box">
				<li class="dui"><span>√</span></li>
				<li class="trade1"><img src="${good.src}" alt="">
					 <span>${good.name}</span>
				</li>
				<li class="size1">
					${good.size}
				</li>
				<li class="price1">158.00</li>
				<li class="num1">
					<span id="jian">-</span>
					<input type="text" class="inp" value="${good.num}" id="shu">
					<span id="jia">+</span>
				</li>
				<li class="dis1">-</li>
				<li class="cou1">158.00</li>
				<li class="act1">删除</li>
			</ul>
			
		</div>
		<div class="btm-box">
			<div class="btm-left">
				<p>数量总计：<span class="span11">1</span>件</p>
				<p>产品金额总计(不含运费)：<span class="span10">158.00</span></p>
				
			</div>
			<div class="shopping">
				<span class="span2">继续购物</span>
				<span class="span3">去结算</span>
			</div>
		</div>`
			$(str).appendTo('#commod');
			}
		}


		
	/* 点击减号数量减少*/
		$("#jian").click(function(){
			var num = $("#shu").val();
			console.log(num);
			num--
			if(num==0){
				num=1;
			}else{
				$("#shu").val(num);
				$(".span11").html(num);
			}
			totalPrice();
		})
	/* 点击加好数量增多*/
		$("#jia").click(function(){
			var num = $("#shu").val();
			num++;
			$("#shu").val(num);
			$(".span11").html(num);

			totalPrice();
		})
	/* 小计数字计算*/
		function totalPrice(){
			var mary = $(".cou1").html();
			var num = $("#shu").val();
			var price = $(".price1").html();
			mary = parseInt(num) * parseInt(price) + ".00";
			console.log(mary);
			$(".cou1").html(mary);
			$(".span10").html(mary);
		}
	/* 点击删除商品*/
		$(".act1").click(function(){
			$(".detail1-box").css("display","none");
			$(".span11").html(0);
			$(".span10").html(0);
			if($(".span10").html(0)){
				$("#commod").css("display","none");
				$("#no-commod").css("display","block");
			}
		})
	
	


			function convertCartStrToObj(cartStr) {
				
				if(!cartStr) {
					return {};
				}
				var goods = cartStr.split(":");
				var obj = {};
				for(var i = 0; i < goods.length; i++) {
					var data = goods[i].split(",");
					//以商品的id为健，商品的其他信息为值，这个值也设计为一个对象
					obj[data[0]] = {
						name: data[1],
						price: parseFloat(data[2]),
						num: parseInt(data[3]),
						src: data[4],
						size:data[5]
					}
				}
				return obj;
			}
			function convertObjToCartStr(obj) {
				
				var cartStr = "";
				for(var id in obj) {
					if(cartStr) {
						cartStr += ":";
					}
					cartStr += id + "," + obj[id].name + "," + obj[id].price + "," + obj[id].num + "," + obj[id].src + "," +obj[id].size;
				}
				return cartStr;
			}

			

	}
	return {
		buy :buy
	}
})