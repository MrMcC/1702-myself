<template>
  <div class="site">
    <header-gray header-title="选择地址" back="true"></header-gray>
    <div class="main">
      <div class="empty-notice">
        <div class="notice-icon"></div>
        您还没地址哦~
      </div>
      <div class="pub-footer spline-bottom spline-top">
        <div class="theme-btn-big yellowbg" @click="addSite()">新增地址</div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import HeaderGray from 'components/Header-gray/Header-gray'
export default {
  components: {
    HeaderGray
  },
  methods: {
    addSite () {
      this.$router.push('/addsite')
    }
  }
}
</script>
<style lang="less" scoped>
.main{
  bottom: 0;
}
.empty-notice{
  padding-top: 20%;
  text-align: center;
  line-height: 4rem;
  font-size: 1.4rem;
}
.notice-icon{
  width: 8rem;
  height: 8rem;
  border-radius: 4rem;
  background: url("./images/empty_addrlist.png") center center no-repeat;
  -webkit-background-size: contain;
  background-size: contain;
  margin: 0 auto;
}
.theme-btn-big:before{
  content: '+ ';
}
</style>