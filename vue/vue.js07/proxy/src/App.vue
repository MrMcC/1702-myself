<template>
  <div id="app">
    <img src="./assets/logo.png">
    <button @click="getData()">获取爱鲜蜂首页的数据</button>
    <button @click="douban()">豆瓣电影宫崎骏</button>
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  name: 'app',
  components: {

  },
  methods:{
      getData(){
          //代理在index.js配置
          this.$http.get('/api/data/home?location=114.06542328276245%2C22.548528985427392')
              .then(function (data) {
                  console.log(data)
              })


      },
      douban(){
          this.$http.get('/douban/v2/movie/subject/1764796')
              .then(function (data) {
                  console.log(data)
              })
      }
  }
}
//http://m.beequick.cn/show/productDetail?id=16816&shopId=14931

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
