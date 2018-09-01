define(["parabola","jquery","jquery-cookie"],function(parabola,$){
	var reg = function(){

	/*验证码框失去焦点提示*/
		$(".ver").find(".ve").blur(function(){
			$(".ver .hint1").css("display","block")
		})
	/*添加随机验证码*/
		$(".ver .btn").html(testCode(6));
		$(".ver .btn").click(function(){
			 $(".ver .btn").html(testCode(6));
			
		})
	/*验证码验证*/
		$(".ver").find(".ve").blur(function(){
			if($(".ver .ve").val() != ""){
				$(".ver .hint1").css("display","none")
			}
		})


	/*手机号码验证*/
		var oPhone = document.getElementById("phone-num");
		var oHint = document.getElementById("hint2");
			oPhone.onblur = function(){
		    	if(/^1\d{10}$/.test(oPhone.value)){
		    		oHint.style.display = "none";
		    	}else{
		    		oHint.style.display = "block";
		    	}
	    	}


	/* 设置登录密码验证*/

			var pw = document.getElementById("password");
			var pwrite = document.getElementById("passwrite");
			pw.onblur = function(){
				var oValue = pw.value;
				if(oValue.length < 6 || oValue.length > 16){
					pwrite.style.display = "block";
					pwrite.style.color = "red";
				}else{
					pwrite.style.display = "none";
				}
			}
	/*确认密码*/
			var oQr = document.getElementById("qrmm");
			var oQrs = document.getElementById("qrmm1");
			oQr.onblur = function(){
				if(oQr.value.length >= 0 && oQr.value.length < 6){
					oQrs.style.display = "block";
					oQrs.style.color = "red";
				}else if(oQr.value == pw.value){	
					oQrs.style.display = "none";
				}
			}

	/*阅读里边的对号*/
			
			var oTick = document.getElementById("tick");
			var oInp = document.getElementById("inp");
			var istrue = true;
			oTick.onclick = function(){				
				if(istrue){
					oTick.innerHTML = "√";
					istrue = false;
					oInp.style.backgroundColor = "red";
				}else{
					oTick.innerHTML = " ";
					istrue = true;
					oInp.style.backgroundColor = "#9a9a9a";
				}
			}
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
		reg :reg
	}
})