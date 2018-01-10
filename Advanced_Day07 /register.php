<?php
header("Content-Type:text/html;charset=utf-8");
$user = $_GET["user"];
$pwd = $_GET["pwd"];
echo $user . "欢迎你, 你的密码是" . $pwd;
?>