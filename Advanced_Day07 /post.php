<?php
header("Content-Type:text/html;charset=utf-8");
$user = $_POST["user"];
$pwd = $_POST["pwd"];
if($user == "zs"){
	echo $user . "注册失败，用户名已经存在";
}else{
	echo $user . "注册成功，可以注册";
}
?>