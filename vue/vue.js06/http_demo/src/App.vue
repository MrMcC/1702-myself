<template>
  <div id="app">
    <img src="./assets/logo.png">
    <button @click="getPost()">获取jsonserver中的数据</button>
    <button @click="add()">添加</button>
    <button @click="getItem(10)">查找</button>
    <button @click="paginate()">分页</button>
    <button @click="order()">排序</button>
  </div>
</template>

<script>
//写法2的引入对象,名字叫obj,在下面调用obj.ajax,
// 或者名字叫ajax,直接解构 import {ajax} from '../static/ajax'下面就可以直接ajax()
import obj from '../static/ajax'
//写法2的引入对象第二种方法
//var obj = require('../static/ajax')

export default {
  created(){
//    obj.ajax('../static/getCategoryProduct.json',function (data) {
////        console.log(data)
//        var json = JSON.parse(data.currentTarget.responseText)
//        console.log(json)
//    })

//      $.ajax({
//          url: "../static/getCategoryProduct.json",
//          dataType: "json",
//          success: function (data) {
//              console.log(data)
//          }
//      })

      //用vue-resourse请求数据
//      this.$http.get("../static/getCategoryProduct.json")
//          .then(function (data){
//              console.log(data)
//          })

      //axios请求数据 this.axios名字和你在main中定义的名字要一样
//      this.axios.get("../static/getCategoryProduct.json")
//          .then(function (data){
//              console.log(data)
//          })
  },
  name: 'app',
  components: {

  },
  methods:{
      getPost(){
          //查db中的数据
          this.axios.get('http://localhost:8081/cart')
              .then(function (data) {
                  console.log(data)
              })
      },
      add(){
          //增加db中的数据(id不用写默认添加上最大的)
          this.axios.post('http://localhost:8081/cart',{
              title: "饼干"
          })
              .then(function (data) {
                  console.log(data)
              })
      },
      getItem(id){
          //查找id为3
          this.axios.get('http://localhost:8081/cart/'+id)
              .then(function (data) {
                  console.log(data)
              })
      },
      paginate(){
          //查看第二页,每页最多20个
          this.axios.get('http://localhost:8081/cart?_page=2&_limit=20')
              .then(function (data) {
                  console.log(data)
              })
      },
      order(){
          this.axios.get('http://localhost:8081/cart?_sort=id&_order=asc')
              .then(function (data) {
                  console.log(data)
              })
      }

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
