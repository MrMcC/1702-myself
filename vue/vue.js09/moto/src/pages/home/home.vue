<template>
    <div class="home">
        <header-yellow></header-yellow>
        <!-- 主体 -->
        <div id="main">
            <!-- 轮播图 -->
            <swiper :options="swiperOption" ref="mySwiper">
                <!-- slides -->
                <swiper-slide v-for="(item,index) in banner.img" :key="item"><img v-lazy="item" alt=""></swiper-slide>
                <!-- Optional controls -->
                <div class="swiper-pagination"  slot="pagination"></div>
                <div class="swiper-scrollbar"   slot="scrollbar"></div>
            </swiper>
            <!-- 主体内容 -->
            <div class="acts-category" v-for="(item,index) in classfiys">
                <span class="acts-category-name">{{item.classify_title}}</span>
                <a href="#/category">更多&gt</a>
                <img v-lazy="item.imgs.small" alt="">
                <ul class="acts-category-item-goodsList">
                    <li v-for="(pro,ind) in item.products" v-if="ind < 3">
                        <img v-lazy="pro.imgs.small" alt="">
                        <p class="product-name">{{pro.title}}</p>
                        <div class="product-operates">
                            <div class="product-operates-left">
                                <div>{{pro.unit}}ml</div>
                                <div>￥{{pro.price}}</div>
                            </div>
                            <div class="product-operates-right">+</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
  import HeaderYellow from '../../components/header-yellow/header-yellow'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  // 地址
  import Api from '../../api'
  export default {
    created () {
      // 获取首页数据
      this.$http.get(Api.host + 'banner')
        .then((data) => {
          // console.log(data.data)
          this.banner = data.data
        })
      this.$http.get(Api.host + 'classfiys')
        .then((data) => {
          // console.log(data.data)
          this.classfiys = data.data
        })
    },
    data () {
      return {
        banner: {},
        classfiys: [],
        swiperOption: {
          notNextTick: true,
          autoplay: 3000,
          setWrapperSize: true,
          pagination: '.swiper-pagination',
          paginationClickable: true,
          mousewheelControl: true,
          observeParents: true,
          grabCursor: true
        }
      }
    },
    components: {
      HeaderYellow,
      swiper,
      swiperSlide
    }
  }
</script>
<style lang="less" scoped>
@import url("../../common/style/variable.less");
.home{
  height: 100%;
}
#main{
  position: absolute;
  left: 0;
  right: 0;
  top: 4.5rem;
  bottom: 5rem;
  overflow: scroll;
}
.swiper{
  width: 100%;
}
.swiper-slide>img{
  width: 32rem;
}
.acts-icon{
  background-color: #fff;
  margin: 0.2rem 0;
  a{
    display: inline-block;
    width: 25%;
    img{
      width: 100%;
    }
    span{
      float: left;
      width: 100%;
      text-align: center;
      color: black;
    }
  }
}
.acts-category{
  width: 100%;
  background-color: white;
  overflow: hidden;
  margin-top: 0.5rem;
  span.acts-category-name{
    color: #60659F;
    float: left;
    margin: 0.9rem 0 0 1rem;
    border-left: 0.8rem solid #60659F;
    padding-left: 0.5rem;
    font-size: 1.2rem;
  }
  a{
    float: right;
    color: #999;
    padding-right: 0.9rem;
    line-height: 3rem;
  }
  img{
    width: 97%;
    height: 7rem;
    margin-left: 0.3rem;
  }
}
.acts-category-item-goodsList{
  overflow: hidden;
  li{
    width: 33.33333%;
    float: left;
    margin-top: 0.5rem;
    &:nth-child(3n-1){
        border-left: 1px solid #ccc;
        border-right: 1px solid #ccc;
        box-sizing: border-box;
    }
    img{
      width: 90%;
      height: 8rem;
      margin-left: 0.5rem;
    }
    p{
      font-size: 1.2rem;
      text-indent: 1.5rem;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }
}
.product-operates{
  width: 88%;
  height: 4rem;
  margin-top: 1.6rem;
  overflow: hidden;
}
.product-operates-left{
  float: left;
  width: 3rem;
  margin-left: 1.5rem;
  div:nth-child(1){
    color: gray;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  div:nth-child(2){
    color: #f40;
  }
}
.product-operates-right{
  float: right;
  width: 2rem;
  height: 2rem;
  border: 1px solid #ccc;
  border-radius: 50%;
  text-align: center;
  line-height: 2rem;
  margin-right: 0.2rem;
  color: red;
  font-weight: 900;
}
</style>
