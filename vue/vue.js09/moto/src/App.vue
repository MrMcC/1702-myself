<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar></tab-bar>
  </div>
</template>
<script>
import tabBar from './components/tab-bar/tabBar'
export default {
  created () {
    // 获取购物车数据
    this.$store.dispatch('getData')
  },
  name: 'app',
  components: {
    tabBar
  }
}
</script>
<style>
  html{
    font-size: 10px;
  }
  #app{
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: #f8f8f8;
    /* 设置固定定位的高度,就不会遮挡 */
    /* padding-top: 4.5rem; */
    z-index: 15;
    padding-bottom: 5rem;
    overflow-x: hidden;
    overflow-y: auto;
  }
</style>
