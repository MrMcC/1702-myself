/**
 * Created by miaoce on 17/7/17.
 */
// 使用 Mock
// var Mock = require('mockjs')
// var data = Mock.mock({
//     'cart|30-80': [{'id|+1': 1, 'name': '@cname'}]
// })
// // 输出结果
// console.log(JSON.stringify(data, null, 4))


var Mock = require('mockjs')
var fs = require('fs')
var data = Mock.mock({
    'cart|30-80': [{'id|+1': 1, 'name': '@cname'}]
})
fs.writeFile('./db.json',JSON.stringify(data,null,4), function (err) {
    if(err){
        return console.error(err)
    }
    console.log("数据写入成功")
})

