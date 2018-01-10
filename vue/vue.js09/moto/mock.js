
// 使用mock
var Mock = require('mockjs')
var fs = require('fs')
var data = Mock.mock({
  // 首页banner数据
  "banner": {
    "img|4": ["@image(640x320,@color,@ctitle(3)"],
    "classfiy_id|1000-2000": 100,
    // 点击后进入的详情数据
    "product|10-20": [
      {
        // 数据id
        "product_id|+1": 1,
        // 数据图片
        "img": "@image(355x355,@color,@ctitle(3)",
        // 数据名称
        "title": "@ctitle(5,10)",
        // 数据价格
        "price|1-20.1": 10,
        // 数据单位
        "unit|50-500": 10,
        // 数据详情
        "details": "@cparagraph",
        // 品牌详情
        "brand": "@ctitle(2,5)",
        // 数量
        "num": 1
      }
    ]
  },
  // 商品列表
  "classfiys|6-10": [{
      "classfiy_id|+1": 1,
      "imgs": {
        "small": "@image(710x180,@color,@ctitle(3))",
        "big": "@image(640x530,@color,@ctitle(3)"
      },
      // 分类的名称
      "classify_title": "@ctitle(3,4)",
      // 子分类
      "cids|3": [
        {
          "name": "@ctitle(3,7)"
        }
      ],
      // 每个分类下的商品数据
      "products|10-30": [{
        // 商品id
        "product_id|+1": 1,
        // 商品对应的子分类 ????
        "cids|0-2":100,
        // 图片
        "imgs": {
          // 列表页展示的小图
          "small": "@image(355x355,@color,@ctitle(3))",
          // 商品详情页的大图
          "big": "@image(500x500,@color,@ctitle(3))"
        },
        // 商品名称
        "title": "@ctitle(5,10)",
        // 商品详情
        "details": "@cparagraph",
        // 价格
        "price|1-20.1": 100,
        // 单位
        "unit|50-500": 100,
        // 品牌-详情页
        "brand": "@ctitle(2,5)",
        // 保质期-详情页
        "expiration|0-3.1": 100,
        // 数量
        "num": 0
      }]
    }],
  "cartData": []
  })
  // 写入到db.json
  fs.writeFile('db.json', JSON.stringify(data, null, 4),  function(err) {
    if (err) {
      return console.error(err);
    }
    console.log("数据写入成功！");
  });
