// 使用 Mock,梳理需求
var Mock = require('mockjs')
var fs = require('fs')
var data = Mock.mock({
    // home页bannar图
    "bannar": {
      // bannar图
      "img": "@image(640x320,@color,bannar)",
      // bannar的id
      "classify_id|1000-2000": 100,
      // 点击后进入的详情数据
      // 商品列表
      "product|10-20": [{
        // 商品id
        "product_id|+1":1, 
        // 图片
        "img": "@image(355x355,@color,@ctitle(3))",
        // 商品名称
        "title": "@ctitle(5,15)",
        // 价格
        "price|1-20.1": 100,
        // 单位
        "unit|50-500": 100,
        // 商品详情
        "details": "@cparagraph",
        // 品牌-详情页
        "brand": "@ctitle(2,5)",
        // 数量
        "num": 1
      }]
    },
    // 商品列表
    "classifys|6-10": [{
      // 分类id
      "classify_id|+1": 1,
      // 分类图片
      "imgs": {
        // 首页展示的小图
        "small": "@image(710x180,@color,@ctitle(3))",
        // 点击图片进入的列表页图片
        "big": "@image(640x530,@color,@ctitle(3))"
      },
      // 分类的名称
      "classify_title": "@ctitle(3,4)",
      // 子分类
      "cids|3": [{
        "id|+1": 1,
        "name": "@ctitle(3,7)"
      }],
      // 每个分类下的商品数据
      "products|2-5": [{
        // 商品id
        "product_id|+1": 1, 
        // 商品对应的子分类
        "cids|1-3":100,
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
        "num": 1
      }]
    }],
    // 我的页中的登陆信息,ps:数据为原官网数据
    "user_info": {
        "errno": 0,
        "errmsg": "ok",
        "logid": "59719b9316a6c6818",
        "data": {
            "code": "200",
            "msg": "success",
            "reqid": "8d8d23835b88cf33b0ddfae0566fca76",
            "data": {
                "username": "18600805498",
                "name": "V0",
                "usable_point": "0",
                "current_score": "0",
                "last_score": "999",
                "dif_score": "距下一等级还需 30 成长值",
                "level": [
                    {
                        "id": "1",
                        "name": "V0",
                        "lower_bound": "0",
                        "point_weight": "5"
                    },
                    {
                        "id": "2",
                        "name": "V1",
                        "lower_bound": "30",
                        "point_weight": "10"
                    },
                    {
                        "id": "3",
                        "name": "V2",
                        "lower_bound": "199",
                        "point_weight": "15"
                    },
                    {
                        "id": "4",
                        "name": "V3",
                        "lower_bound": "499",
                        "point_weight": "20"
                    },
                    {
                        "id": "5",
                        "name": "V4",
                        "lower_bound": "999",
                        "point_weight": "30"
                    }
                ],
                "usable_balance": "0",
                "strategy": [
                    {
                        "id": "2",
                        "types": "1",
                        "contents": "会员等级有效期为1年，1年后扣减相应等级成长值，剩余成长值重新计算会员级别。",
                        "sort": "0"
                    },
                    {
                        "id": "3",
                        "types": "2",
                        "contents": "会员等级越高获得的积分越多。\r\n1、注册会员：0.5倍积分\r\n2、普通会员：1倍积分\r\n3、白银会员：1.5倍积分\r\n4、黄金会员：2倍积分\r\n5、钻石会员：3倍积分",
                        "sort": "0"
                    },
                    {
                        "id": "4",
                        "types": "3",
                        "contents": "1、注册会员：30>成长值>＝0；\r\n2、普通会员：199>成长值>＝30；\r\n3、白银会员：499>成长值>＝199；\r\n4、黄金会员：999>成长值>＝499；\r\n5、钻石会员：成长值>＝999；",
                        "sort": "0"
                    },
                    {
                        "id": "1",
                        "types": "4",
                        "contents": "1、购买精选商品实付金额1：1转化为成长值（不包含优惠券等抵扣部分）；\r\n2、在“天津、西安、成都、南京、佛山”下单，完成订单后可以获得10成长值；\r\n3、商品退换货，需扣除该商品所获得成长值；\r\n4、订单取消，需扣除该订单所获得成长值；\r\n5、因作弊等行为产生的成长值，爱鲜蜂有权扣除相应成长值；",
                        "sort": "0"
                    }
                ],
                "task_hint": "成长值到账可能有延迟，请稍后查看",
                "task_list": [
                    {
                        "title": "上传头像",
                        "content": "+10成长值",
                        "has_button": "1",
                        "button_text": "立即上传",
                        "exc_status": "0"
                    },
                    {
                        "title": "填写昵称",
                        "content": "+10成长值",
                        "has_button": "1",
                        "button_text": "立即填写",
                        "exc_status": "0"
                    },
                    {
                        "title": "选择性别",
                        "content": "+10成长值",
                        "has_button": "1",
                        "button_text": "立即选择",
                        "exc_status": "0"
                    },
                    {
                        "title": "设置年龄",
                        "content": "+10成长值",
                        "has_button": "1",
                        "button_text": "立即设置",
                        "exc_status": "0"
                    }
                ],
                "nickname": "18600805498"
            }
        }
    },
    // 购物车列表
    /*
      数据结构：
      [
        {
          分类id,
          商品id,
          购物车列表中的id,
          商品的名称,
          商品的价格,
          商品的图片,
          商品的购买数量,
          是否勾选
        }
      ]
    */
    "cart": [],
    // 收藏列表
    /*
      数据结构:
      [
        {
          分类id,
          商品id,
          收藏列表中的id,
          商品的名称,
          商品的价格,
          商品的图片,
          商品的单位
        }
      ]
    */
    "collect": [],
    // 地址管理列表
    /*
      数据结构:
      [
        {
          地址列表的id,
          联系人，
          性别，
          手机号，
          所在城市，
          所在地区-》百度地图
          详细地址
        }
      ]
    */
    "site": []
})
// 写入到db.json
fs.writeFile('db.json', JSON.stringify(data, null, 4),  function(err) {
   if (err) {
       return console.error(err);
   }
   console.log("数据写入成功！");
});