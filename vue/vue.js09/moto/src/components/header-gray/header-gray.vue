<template>
  <header>
    <div class="header-content">
      <span>购物车</span>
    </div>
  </header>
</template>
<style lang="less" scoped>
  @import url('../../common/style/variable.less');
  header{
    position: fixed;
    top: 0;
    width: 100%;
    height: 4.5rem;
    background-color: #f9fafd;
    border-bottom: 1px solid #e0e0e0;
  }
  .header-content {
    position: absolute;
    top: 0;
    left: 6rem;
    right: 6rem;
    bottom: 0;
    background-color: #f9fafd;
    text-align: center;
    line-height: 4.5rem;
    span{
      font-size: @font-size-medium;
      font-weight: 700;
    }
  }
</style>