//启动文件,或叫入口文件
//导入express模块
var express = require('express');
//处理路经相关
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//生产一个express实例
var app = express();

// 存放模板文件的地方为views
app.set('views', path.join(__dirname, 'views'));
//设置模板引擎为ejs
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//设置public为静态代码所在目录,
app.use(express.static(path.join(__dirname, 'public')));

//加载路由文件: 导入路由 index
var index = require('./routes/index');
//导入路由 users
var users = require('./routes/users');


//路由控制器
app.use('/', index);  //127.0.0.1:3000 用路由index
app.use('/users', users); //127.0.0.1:3000/users 用路由users

var login = require('./routes/login');
app.use('/login',login);//以login结尾添加login这个路由器

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//导出app 可以通过require("app")获取到这个对象
module.exports = app;
