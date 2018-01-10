<template>
  <div id="app">

    <nav>
      <!--<a href="#/">主页</a>-->
      <!--<a href="#/cart">购物车</a>-->

      <!--防止页面刷新用router-link-->
      <!--<router-link to='/' tag='li'>主页</router-link>-->
      <!--<router-link to='/cart' tag='li'>购物车</router-link>-->

      <!--<router-link v-for="(item,index) in tabBar" :to="item.path" tag="li">{{item.name}}</router-link>-->

      <!--跳转地址时用对象 :绑定的都是变量或者对象,不加:可以转向字符串-->
      <router-link v-for="(item,index) in tabBar" :to="{path: item.path}" tag="button" :key="item.name">{{item.name}}</router-link>

      <!--通过js跳转-->
      <!--<button v-for="(item,index) in tabBar" @click="pathTo(item.path,index)" :class="{active: activeIndex == index}">{{item.name}}</button>-->
    </nav>
    <!--改变的内容-->
    <router-view></router-view>
  </div>
</template>

<script>
  export default{
    data(){
        return{
            tabBar:[
            //主页的四个切换按钮
                {
                    path: '/',
                    name: '主页'
                },
                {
                    path: '/cart',
                    name: '购物车'
                },
                {
                    path: '/mine',
                    name: '我的'
                },
                {
                    path: '/news',
                    name: '新闻'
                }
            ],
            activeIndex : 0
        }

    },
    methods:{
        pathTo(path,index){
            this.$router.push(path)
//            console.log(path)
            this.activeIndex = index;
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
  button.active{
    color: white;
    background-color: #00B7FF;
  }
  /*标签自带类引入切换router-link时*/
  button.router-link-exact-active{
    color: red;
    background-color: #00B7FF;
  }
</style>
