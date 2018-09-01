console.log("加载成功");

/* 配置模块*/

require.config({
	paths:{
		"jquery":"jquery-1.11.3",
		"jquery-cookie":"jquery.cookie",
		"index":"index",
		"parabola":"parabola"
	},
	shim:{
		"jquery-cookie":["jquery"],
		"parabola":{
			exports:"_"
		}
	}
})

require(["index"],function(index){
	index.main();
})