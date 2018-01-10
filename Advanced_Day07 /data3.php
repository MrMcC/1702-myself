<?php
    //服务器给浏览器的响应头,表示哪些源允许访问我这个文件 *表示所有的源均可以
   header("Access-Control-Allow-Origin:*");
   echo "hello world"
?>
