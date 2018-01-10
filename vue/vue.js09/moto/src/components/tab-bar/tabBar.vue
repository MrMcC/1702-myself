<template>
  <nav>
    <router-link to="/" class="home">
      <span>&nbsp;</span>
      首页
    </router-link>
    <router-link to="/market" class="market">
      <span>&nbsp;</span>
      闪送超市
    </router-link>
    <router-link to="/shopCar" class="shopCar">
      <span>&nbsp;</span>
      购物车
    </router-link>
    <router-link to="/mine" class="mine">
      <span>&nbsp;</span>
      我的
    </router-link>
    <var v-show="total>0" :class="{'shop': numActive}">{{total}}</var>
  </nav>
</template>
<script>
  export default {
    computed: {
      total () {
        return this.$store.getters.total
      },
      numActive () {
        return this.$store.state.numActive
      }
    }
  }
</script>
<style lang="less" scoped>
@import url("../../common/style/variable.less");
@import url("../../common/style/mixin.less");
nav{
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 5rem;
  background-color: #fff;
  z-index: 15;
  a{
    float: left;
    width: 25%;
    height: 5rem;
    text-align: center;
    color: #777;
    span{
      display: block;
      width: 100%;
      height: 2rem;
      padding: 0.5rem 0;
      -webkit-background-size: auto 2rem;
      background-size: auto 2rem;
      background-repeat: no-repeat;
      background-position: center 0.5rem;
    }
  }
}
nav>.home>span{
  background-image: url("./images/home.png");
}
nav>.market>span{
  background-image: url("./images/market.png");
}
nav>.shopCar>span{
  background-image: url("./images/shopCar.png");
}
nav>.mine>span{
  background-image: url("./images/mine.png");
}

nav>.home.router-link-exact-active>span{
  background-image: url("./images/home-active.png");
}
nav>.market.router-link-exact-active>span{
  background-image: url("./images/market-active.png");
}
nav>.shopCar.router-link-exact-active>span{
  background-image: url("./images/shopCar-active.png");
}
nav>.mine.router-link-exact-active>span{
  background-image: url("./images/mine-active.png");
}
/* 添加商品时的位置 */
nav>var{
  position: absolute;
  right: 30%;
  bottom: 3rem;
  line-height: 2rem;
  text-align: center;
  z-index: 999;
  color: white;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: red;
/* 动画执行的时间得比删除动画时间短 */
  -webkit-transition: all 0.2s cubic-bezier(0.21,-0.62, 0.48, 1.56);
  transition: all 0.2s cubic-bezier(0.21,-0.62, 0.48, 1.56);
  -webkit-transform: scale(1);
  transform: scale(1);
}
.shop{
  -webkit-transform: scale(1.3);
  transform: scale(1.3);
}

@-webkit-keyframes navs{
  /*20%, 40%, 60%, 80%, 0%, 100%{
      -webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);
      animation-timing-function:cubic-bezier(.215,.61,.355,1);
  }*/
  0%{
    -webkit-background-size: auto .6rem;
    background-size: auto .6rem;
  }
  20%{
    -webkit-background-size: auto 2.2rem;
    background-size: auto 2.2rem;
  }
  40%{
    -webkit-background-size: auto 1.8rem;
    background-size: auto 1.8rem;
  }
  60%{
    -webkit-background-size: auto 2.06rem;
    background-size: auto 2.06rem;
  }
  80%{
    -webkit-background-size: auto 1.94rem;
    background-size: auto 1.94rem;
  }
  100%{
    -webkit-background-size: auto 2rem;
    background-size: auto 2rem;
  }
}
@keyframes navs{
  /*20%, 40%, 60%, 80%, 0%, 100%{
      -webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);
      animation-timing-function:cubic-bezier(.215,.61,.355,1);
  }*/
  0%{
    -webkit-background-size: auto .6rem;
    background-size: auto .6rem;
  }
  20%{
    -webkit-background-size: auto 2.2rem;
    background-size: auto 2.2rem;
  }
  40%{
    -webkit-background-size: auto 1.8rem;
    background-size: auto 1.8rem;
  }
  60%{
    -webkit-background-size: auto 2.06rem;
    background-size: auto 2.06rem;
  }
  80%{
    -webkit-background-size: auto 1.94rem;
    background-size: auto 1.94rem;
  }
  100%{
    -webkit-background-size: auto 2rem;
    background-size: auto 2rem;
  }
}
nav{
  a.router-link-exact-active{
    span{
      -webkit-animation: navs 1s;
      animation: navs 1s;
    }
  }
}
nav>var {
  position: absolute;
  right: 30%;
  bottom: 3rem;
  line-height: 2rem;
  text-align: center;
  z-index: 999;
  color: white;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: red;
  /*-webkit-transition: all 0.2s cubic-bezier(0.21,-0.62, 0.48, 1.56);*/
  /*transition: all 0.2s cubic-bezier(0.21,-0.62, 0.48, 1.56);*/
  /*-webkit-transform: scale(1);*/
  /*transform: scale(1);*/
}
</style>