<?php
	//设置字符集
	header("content-type:text/html;charset=utf-8");
	//操作数据库
	//1.连接数据库
	//第一个参数：连接数据库的URL地址
	//第二个参数：登录数据库的用户名
	//第三个参数：登录数据库的密码
	$db = mysql_connect("localhost","root","root");
	//2.选择数据库
	//第一个参数：选择所要操作的数据库
	//第二个参数：登录（连接）数据库的返回值
	mysql_select_db("user",$db);
	//3.设置数据库中的字符集
	mysql_query("set names utf-8");
	//接收用户传递的信息
	$username = $_POST['username'];
	$password = $_POST['password'];
	
	//4.编写sql语句
	$sql = "SELECT * FROM `users` WHERE username='$username'";
	//5.执行sql语句
	$set = mysql_query($sql); //返回值是数据集合
	//将集合转为数组
	$arr = mysql_fetch_array($set);
//	print_r($arr);
	//判断用户名是否存在，如果存在，判断密码是否正确
	if($arr['username'] == $username){
		if($arr['password'] == $password){
			echo "<script>alert('登录成功！');location.href='/projectstart/dist/index.html';</script>";
		}else{
			echo "<script>alert('密码错误！');location.href='/projectstart/dist/log.html';</script>";
		}
	}else{
		echo "<script>alert('用户名不存在！');location.href='/projectstart/dist/log.html';</script>";
	}
?>