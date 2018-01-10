/**
 * Created by miaoce on 17/6/2.
 */
var express = require('express');
var fs = require("fs");
var path = require("path")
var router = express.Router();

/* GET home page. */
router.get('/data1', function(req, res, next) {
    // res.render();
    // res.send("abc")
    var methodName = req.query.callback;
    methodName = methodName || "foo";
    var page = req.query.page;
    page = page || 1;
    page > 3 ? 1 : page;

    var filePath = path.join( __dirname,"../data/users.json");//拼个路径
    fs.readFile(filePath,"utf-8",function (err,data) {
        //元数据
        res.setHeader("Content-Type","application/json;charset=utf-8");
        if(!err){
            res.send(methodName + "(" + data + ")")
        }else {
            res.send(err)
        }
    })
});
module.exports = router;