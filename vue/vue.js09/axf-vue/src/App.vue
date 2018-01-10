<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar v-show="tabBarShow"></tab-bar>
  </div>
</template>

<script>
import TabBar from 'components/TabBar/TabBar'
export default {
  created () {
    // 初始化操作
    // 运行项目就获取并设置分类数据
    this.$store.dispatch('setClassifys')
    // 首页的bannar数据
    this.$store.dispatch('setBannar')
  },
  name: 'app',
  components: {
    TabBar
  },
  computed: {
    tabBarShow () {
      return this.$store.state.tabBarShow
    }
  }
}
</script>

<style>
</style>
