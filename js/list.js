console.log("加载成功");

/* 配置模块*/

require.config({
	paths:{
		"jquery":"jquery-1.11.3",
		"jquery-cookie":"jquery.cookie",
		"list":"list",
		"parabola":"parabola"
	},
	shim:{
		"jquery-cookie":["jquery"],
		"parabola":{
			exports:"_"
		}
	}
})

require(["listmain"],function(listmain){
	listmain.list();
})