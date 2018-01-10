/**
 * Created by miaoce on 17/8/2.
 */
var Mock = require('mockjs')
var fs = require('fs')
var data = Mock.mock({
  'products|3-6':[{
    'id|+1': 1
  }]
})
fs.writeFile('db.json', JSON.stringify(data, null, 4), function (err) {
  if (err) {
    return console.error(err);
  }
  console.log("数据写入成功！")
})