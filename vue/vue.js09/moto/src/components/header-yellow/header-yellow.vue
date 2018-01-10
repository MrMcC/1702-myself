<template>
    <header>
        <div class="header-content">
            <span>美国中情局</span>
        </div>
        <span class="search">搜索</span>
    </header>
</template>
<style lang="less" scoped>
  @import url("../../common/style/variable.less");
  @import url("../../common/style/mixin.less");
  header{
      position: fixed;
      top: 0;
      width: 100%;
      height: 4.5rem;
      background-color: @color-background;
      z-index: 2;
  }
  .header-content{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 6rem;
    right: 6rem;
    text-align: center;
    line-height: 4.5rem;
    span{
      font-size: @font-size-medium;
      font-weight: 700;
      &:after{
        content: "▼";
      }
    }
  }
  .search{
      // 扩大点击范围
      .extend-click();
      position: absolute;
      right: 1rem;
      width: 6rem;
      height: 4rem;
      background-image: url("./images/serach.png");
      background-repeat: no-repeat;
      background-position: right 0.6rem;
      -webkit-background-size: auto 2.4rem;
      background-size: auto 2.4rem;
      text-align: right;
      line-height: 7rem;
      cursor: pointer;
      color: #222;
      font-size: @font-size-small-x;
  }
</style>