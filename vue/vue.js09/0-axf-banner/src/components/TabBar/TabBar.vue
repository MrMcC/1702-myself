<template>
  <nav>
    <router-link to="/">
      <span>&nbsp;</span>
      首页
    </router-link>
    <router-link to="/category" class="cart">
      <span>&nbsp;</span>
      <var class="active">3</var>
      闪送超市
    </router-link>
  </nav>
</template>
<style lang="less" scoped>
@import url("../../common/styles/variable.less");
@import url("../../common/styles/mixin.less");

nav{
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 5rem;
  background-color: #fff;
}
nav>a{
  float: left;
  width: 25%;
  height: 4rem;
  padding-top: 1rem;
  text-align: center;
  color: #777;
  position: relative;
}
nav>a>span{
  display: block;
  width: 100%;
  height: 2rem;
  -webkit-background-size: auto 2rem;
  background-size: auto 2rem;
  background-position: center 0;
  margin-bottom: .5rem;
  background-repeat: no-repeat;
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

nav>a.active>span{
  -webkit-animation: navs 1s;
  animation: navs 1s;
}
/*nav>a.home>span{
  background-image: url("../images/home.png");
}
nav>a.current>span{
  background-image: url("../images/current.png");
}
nav>a.cart>span{
  background-image: url("../images/cart.png");
}
nav>a.mine>span{
  background-image: url("../images/mine.png");
}
nav>a.home.active>span{
  background-image: url("../images/home-active.png");
}
nav>a.current.active>span{
  background-image: url("../images/current-active.png");
}
nav>a.cart.active>span{
  background-image: url("../images/cart-active.png");
}
nav>a.mine.active>span{
  background-image: url("../images/mine-active.png");
}*/
nav>a.cart>var{
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  background-color: #f40;
  color: #fff;
  line-height: 2rem;
  height: 2rem;
  width: 2rem;
  text-align: center;
  font-size: 1rem;
  border-radius: 50%;
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  -o-transform: scale(1);
  transform: scale(1);
  -webkit-transition: all 0.2s cubic-bezier(0.28,-0.42, 0.37, 1.55);
  -o-transition: all 0.2s cubic-bezier(0.28,-0.42, 0.37, 1.55);
  transition: all 0.2s cubic-bezier(0.28,-0.42, 0.37, 1.55);
}
nav>a.cart>var.active{
  .scale(1.5)
}

</style>