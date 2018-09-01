define(["parabola","jquery","jquery-cookie"],function(parabola,$){
	var log = function(){

	/*点击切换登录方式*/
		$("#com").click(function(){
			$("#com").css({
				background:"#b42025",
				color:"#fff"
			})
			$("#fast").css({
				background:"#f5f5f5",
				color:"#656565"
			})
			$(".log-box").css({
				display:"block"
			})
			$(".log-fast").css({
				display:"none"
			})
		})
		$("#fast").click(function(){
			$("#fast").css({
				background:"#b42025",
				color:"#fff"
			})
			$("#com").css({
				background:"#f5f5f5",
				color:"#656565"
			})
			$(".log-fast").css({
				display:"block"
			})
			$(".log-box").css({
				display:"none"
			})
		})

	/*验证码*/
		$(".ver1").html(testCode(6));
		$(".ver1").click(function(){
			$(".ver1").html(testCode(6));

		})
		$(".fast-ver .text").click(function(){
			$(".ver1").html(testCode(6));
		})

	/*封装生成6位随机验证码*/

	    	function testCode(n){
				var arr = [];
				for(var i = 0; i < n; i++){
					var num = parseInt(Math.random() * 100);
					if(num >= 0 && num <= 9){
						arr.push(num);
					}else if(num >= 65 && num <= 90){
						var str = String.fromCharCode(num);
						arr.push(str);
					}else if(num >= 17 && num <= 42){
						var str = String.fromCharCode(num + 80);
						arr.push(str);
					}else{
						//避免消耗循环次数
						i--;
					}
					
				}
				// alert(arr);
				return arr.join("");
			}	
	}
	return {
		log : log
 	}
})