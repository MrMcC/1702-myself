/**
 * Created by miaoce on 17/6/1.
 */
var express = require('express');
var router = express.Router();
router.post('/login.php', function(req, res, next) {
    var user = req.body.user;
    var pwd = req.body.pwd;
    msg = {};
    if(user == "ls"){
        msg.content = user + "登录成功"
        msg.title = "欢迎" + user
    }else{
        msg.content = user + "登录失败，你的用户名不让登录";
        msg.title = "不欢迎" + user;
    }
    msg.pwd = pwd;
    res.render('login_result', msg);//将运行完的数据输出
});
/*router.get('/login.php', function(req, res, next) {
 /!*获取传递过来的用户名和密码信息*!/
 var user = req.query.user; //get请求用query
 var pwd = req.query.pwd;
 msg = {};
 if(user == "zs"){
 msg.content = user + "登录成功！请下载苍老师的电影";
 msg.title = "欢迎" + user;
 }else{
 msg.content = user + "登录失败，你的用户名不让登录";
 msg.title = "不欢迎" + user;
 }
 res.render('login_result', msg);
 });*/
module.exports = router;