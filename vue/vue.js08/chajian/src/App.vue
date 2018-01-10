<template>
  <div id="app">
    <!--<ul class="hello">-->
      <!--<li v-for="(item,index) in imglist">-->
        <!--<img v-lazy="item">-->
      <!--</li>-->
    <!--</ul>-->
    <div class="block">
      <el-carousel height="600px">
        <el-carousel-item v-for="item in imglist" :key="item">
          <h3><img :src="item" alt=""></h3>
        </el-carousel-item>
      </el-carousel>
      <mt-button @click.native="handleClick">按钮</mt-button>
    </div>
  </div>
</template>

<script>


export default {
  name: 'app',
  components: {
  },
  data(){
    return {
      imglist: ['https://gss0.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/b2de9c82d158ccbf4667f9851fd8bc3eb03541b1.jpg',
          'https://gss0.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/e4dde71190ef76c6ab09b7949b16fdfaae5167b1.jpg',
          'https://gss0.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/91529822720e0cf3163302440c46f21fbf09aa4d.jpg',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1496926564&di=9ee6322546086b7d99dece6bfe34ca41&imgtype=jpg&er=1&src=http%3A%2F%2Ftupian.enterdesk.com%2F2013%2Fmxy%2F12%2F10%2F15%2F10.jpg',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1496331954252&di=0565624809c8650ccc4f6d9cf2a964e2&imgtype=jpg&src=http%3A%2F%2Fimg0.imgtn.bdimg.com%2Fit%2Fu%3D1610953019%2C3012342313%26fm%3D214%26gp%3D0.jpg',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1496331929918&di=bb35b6a98943ee2e47f6a62067086e91&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F14%2F27%2F45%2F71r58PICmDM_1024.jpg',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1496331929917&di=8ee1e2b8aa868a9a91b23b73d69ca90b&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F16%2F00%2F52%2F11J58PICD3S_1024.jpg'
      ]
    }
  },
  methods: {
      handleClick: function () {
          this.$toast('Hello world!')
      }
  }
}
</script>

<style>
  /*li{*/
    /*width: 900px;*/
    /*height: 700px;*/
  /*}*/
  /*img{*/
    /*width: 100%;*/
  /*}*/
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
    height: 100%;
  }
  img{
    width: 100%;
    height: 100%;
  }
</style>
