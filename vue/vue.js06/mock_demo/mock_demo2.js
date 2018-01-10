/**
 * Created by miaoce on 17/7/17.
 */
//自己写接口时候用mock自动生成 在终端输入node mock_demo2.js
// 使用 Mock
var Mock = require('mockjs')
var data = Mock.mock({
    'list|1-10': [{'id|+2': 1 , 'age|20-30': 100}],
    'name': '@name',
    'color': '@color',
    'url': '@url',
    'email': '@email',
    'friends|3': [{name: '@name'}],
    'price|10-20.2-5': 11,
    'cost|10-20.3': 11,
    'test|3.2-5': 52,
    'yourname|2-4': 'alice-',
    'img': '@image(80x80,@color)'
})
// 输出结果
console.log(JSON.stringify(data, null, 4))