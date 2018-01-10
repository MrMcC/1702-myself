<template>
  <div id="app">
    <nav>
      <router-link v-for="(item,index) in tabBar" :to="{path: item.path}" tag='button' :key="item.name">{{item.name}}</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data(){
      return{
          tabBar:[
              {
                  path: '/',
                  name: '主页',
              },
              {
                  path: '/cart',
                  name: '购物车'
              },
              {
                  path: '/mine',
                  name:'我的页'
              },
              {
                  path:'/news',
                  name:'新闻页'
              }
          ]
      }
  }
}
</script>


<style>
  nav{
    position: absolute;
    left: 50%;
    transform: translate(-50%,0);
  }
  /*button.active{*/
    /*color: white;*/
    /*background-color: #00B7FF;*/
  /*}*/
  /*标签自带类引入切换router-link时*/
  button.router-link-exact-active{
    color: red;
    background-color: #00B7FF;
  }
</style>
