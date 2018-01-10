/**
 * Created by miaoce on 17/7/19.
 */
var Mock = require('mockjs')
var fs = require('fs')
var data = Mock.mock ({
    // 商品数据
    'products|30-50':[{
        'shop_id|+1': 1,
        'title': '@ctitle(4)',
        'descirbe': '@csentence()',
        'price|80-200.2': 100,
        'classify|1-3': 150,
        'num': 1
    }],
    //分类数据
    'classifyCount': [
      {id: 0, name: '所有分类'},
      {id: 1, name: '热销榜'},
      {id: 2, name: '牛奶面包'},
      {id: 3, name: '新鲜水果'}
    ],
    // 生成购物车
    'cart': []
})
fs.writeFile('./db.json',JSON.stringify(data,null,4), function (err) {
    if(err) {
        return console.error(err)
    }
    console.log("数据写入成功")
})
