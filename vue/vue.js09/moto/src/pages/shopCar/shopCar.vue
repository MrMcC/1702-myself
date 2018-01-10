<template>
  <div class="shopCar">
    <header-gray></header-gray>
    <div id="main" v-show="haveGoods">
      <table class="receive">
        <tr>
          <th width="28%">
            收<span class="u-hidden">a</span>货<span class="u-hidden">a</span>人
          </th>
          <td>McC&nbsp;先生</td>
          <td width="17%" rowspan="3" class="more">修改</td>
        </tr>
        <tr>
          <th>
            电<span class="u-hidden">aaaa</span>话
          </th>
          <td>18686778611</td>
        </tr>
        <tr>
          <th>收货地址</th>
          <td>深圳市中情局</td>
        </tr>
      </table>
      <div class="cart-groups">
        <div class="cart-groups-1">
          <div class="cart-bill">闪送超市</div>
          <span class="cart-collect">凑单专区</span>
          <p class="cart-condition">¥0起送，22:00前满¥30免运费，22:00后满¥50免运费</p>
        </div>
        <p class="cart-time">收货时间&nbsp;&nbsp;
          <select class="group-receive-select">
            <optgroup label="今天">
              <option value="30分钟送达">30分钟送达</option>
              <option value="15:00-16:00">15:00-16:00</option>
              <option value="16:00-17:00">16:00-17:00</option>
              <option value="17:00-18:00">17:00-18:00</option>
              <option value="18:00-19:00">18:00-19:00</option>
            </optgroup>
            <optgroup label="明天">
              <option value="明天 09:00-10:00">明天 09:00-10:00</option>
              <option value="明天 10:00-11:00">明天 10:00-11:00</option>
              <option value="明天 11:00-12:00">明天 11:00-12:00</option>
              <option value="明天 12:00-13:00">明天 12:00-13:00</option>
            </optgroup>
            <optgroup label="后天">
              <option value="后天 09:00-10:00">后天 09:00-10:00</option>
              <option value="后天 10:00-11:00">后天 10:00-11:00</option>
              <option value="后天 11:00-12:00">后天 11:00-12:00</option>
              <option value="后天 12:00-13:00">明天 12:00-13:00</option>
            </optgroup>
          </select>
          <span>&nbsp;可预订</span>
        </p>
        <div class="group-comment">
          收货备注&nbsp;&nbsp;
          <div class="comment-wrapper">
            <input type="text" placeholder="可输入100字以内特殊要求内容" maxlength="100">
          </div>
        </div>
        <table>
          <tr v-for="item in cartItem" >
            <td style="width: 5rem" class="group-item-checkbox" @click="changeSelect(item)" :class="{'active': item.activeSelect}"></td>
            <td style="width: 5rem">
              <div class="group-item-img-wrap">
                <img v-lazy="item.imgs.small" alt="">
              </div>
            </td>
            <td class="group-item-detail">
              <div class="group-item-name">{{item.title}}</div>
              <div class="product-specifics-wrap">
                <div class="product-specifics">
                  <span>￥{{item.price}}</span>
                </div>
                <div class="product-operates">
                  <span class="inner" @click="addNum(item)">+</span>
                  <span class="product-operates-item">{{item.num}}</span>
                  <span class="inner" @click="subNum(item)">-</span>
                </div>
              </div>
            </td>
          </tr>
        </table>
        <div class="group-footer">
          <span class="selectAll" :class="{'selectAll-true': allSelect}">全选</span>
          共：<span class="redfont">￥{{totalPrice}}</span>
          <span class="group-btn" :class="{'graybg': !totalPrice, 'yellowbg': totalPrice}">{{chooseTittle}}</span>
        </div>
      </div>
    </div>
    <div id="shopEmpty" v-show="!haveGoods">
      <div class="empty-notice">
        <div class="empty-pt"></div>
        亲，购物车空空的耶~
        <br>
        <span>去逛逛</span>
      </div>
    </div>
  </div>
</template>
<script>
import HeaderGray from '../../components/header-gray/header-gray'
export default {
  computed: {
    // 样式切换
    haveGoods () {
      if (this.cartItem.length > 0) {
        return true
      }
    },
    // 购物车商品
    cartItem () {
      return this.$store.state.cartData
    },
    // 总价
    totalPrice () {
      let result = 0
      for (var i = 0; i < this.cartItem.length; i++) {
        if (this.cartItem[i].activeSelect) {
          result += this.cartItem[i].num * this.cartItem[i].price
        }
      }
      if (result > 0) {
        return result.toFixed(2)
      }
      return result
    },
    // 全选
    allSelect () {
      return this.$store.state.allSelect
    },
    // 是否选好了
    chooseTittle () {
      return this.totalPrice > 0 ? '选好了' : '满￥0起送'
    }
  },
  data () {
    return {
    }
  },
  methods: {
    changeSelect (item) {
      this.$store.dispatch('changeSelect', item)
    },
    addNum (item) {
      if (item.activeSelect) {
        this.$store.dispatch('addNum', item)
      }
    },
    subNum (item) {
      if (item.activeSelect) {
        this.$store.dispatch('subNum', item)
      }
    }
  },
  components: {
    HeaderGray
  }
}
</script>
<style lang="less" scoped>
  @import url("../../common/style/mixin.less");
  .shopCar{
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 5rem;
  }
  // 无商品时样式
  #shopEmpty{
    position: absolute;
    top: 4.5rem;
    right: 0;
    bottom: 20rem;
    left: 0;
    .empty-notice{
      padding-top: 20%;
      text-align: center;
      color: #999;
      line-height: 4rem;
      font-size: 1.4rem;
      .empty-pt{
        width: 8rem;
        height: 8rem;
        border-radius: 4rem;
        background-image: url("./image/empty_list.png");
        background-repeat: no-repeat;
        background-position: center;
        background-size: 95%;
        margin: 0 auto;
      }
      span{
        text-align: center;
        border:1px solid #e0e0e0;
        border-radius: .3rem;
        padding: .4rem 3rem;
      }
    }
  }
  // 有商品时样式
  #main{
    overflow: scroll;
    position: absolute;
    left: 0;
    top: 4.5rem;
    right: 0;
    bottom: 0;
    .receive{
      width: 100%;
      height: 10rem;
      background-color: #fff;
      background-image: url("./image/twig.png"),url("./image/twig.png");
      background-position: left top,left bottom;
      background-size: auto .3rem;
      background-repeat: repeat-x;
      margin-bottom: 1.2rem;
      font-size: 1.4rem;
    }
  }
  .u-hidden{
    visibility: hidden;
  }
  .receive>th{
    padding: 0.5rem 1rem 0.5rem 1.5rem;
  }
  .more{
    background-image: url("./image/than.png");
    background-position: right center;
    background-repeat: no-repeat;
    background-size: auto 1rem;
    padding: .7rem 0;
  }
  .cart-groups{
    position: absolute;
    top: 11rem;
    background-color: white;
    padding-top: 0.5rem;
    color: #999;
    .cart-groups-1{
      float: left;
    }
    .cart-bill{
      height: 3rem;
      padding-left: 1.4rem;
      font-size: 1.2rem;
      line-height: 2rem;
      float: left;
      &:before{
        content: '';
        display: inline-block;
        width: 0.4rem;
        height: 1.2rem;
        margin-right: 0.5rem;
        border-radius: 0.2rem;
        background-color: #ffd600;
        vertical-align: -0.1rem;
      }
    }
    .cart-collect{
      float: right;
      color: #e64f1a;
      width: 7rem;
      height: 2.4rem;
      border: 1px solid #ff3800;
      line-height: 2.4rem;
      border-radius: 1.2rem;
      text-align: center;
      font-size: 1.2rem;
      margin-right: 1.2rem;
    }
    .cart-condition{
      float: left;
      font-size: 1.1rem;
      line-height: 2rem;
      padding-left: 1.4rem;
    }
    .cart-time{
      float: left;
      width: 100%;
      height: 5rem;
      font-size: 1.4rem;
      line-height: 5rem;
      color: #000;
      padding-left: 1.4rem;
      border: 1px solid #e0e0e0;
      background-image: url("./image/than.png");
      background-position: 95% center;
      background-repeat: no-repeat;
      background-size: auto 1.2rem;
      .group-receive-select{
        color: #e64f1a;
        // 无外边框
        outline: none;
        border: none;
        font-size: 1.4rem;
        background-color: transparent;
      }
    }
    .group-comment{
      float: left;
      width: 100%;
      height: 5rem;
      border-bottom: 1px solid #e0e0e0;
      font-size: 1.4rem;
      line-height: 5rem;
      color: #000;
      padding-left: 1.4rem;
      .comment-wrapper{
        width: 15rem;
        position: absolute;
        left: 8rem;
        top: 10.5rem;
        input{
          width: 100%;
          height: 3.2rem;
          outline: none;
          border: 1px solid #cecece;
          text-indent: 0.5rem;
          border-radius: 1rem;
        }
      }
    }
    table{
      width: 100%;
      float: left;
    }
    tr{
      width: 100%;
      height: 8rem;
      background-color: #fff;
      border-bottom: 1px solid #cecece;
    }
    .group-item-checkbox{
      background-image: url("./image/unselect.png");
      background-size: 1.8rem 1.8rem;
      background-repeat: no-repeat;
      background-position: center center;
    }
    .group-item-checkbox.active{
      background-image: url("./image/select.png");
    }
    .group-item-img-wrap{
      width: 5rem;
      height: 5rem;
      background-size: 100% 100%;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .group-item-detail{
      font-size: 1.4rem;
      color: #000;
      .group-item-name{
        padding-left: 1.4rem;
      }
    }
    .product-specifics-wrap{
      padding: 1.4rem 0 0 1.4rem;
      overflow: hidden;
    }
    .product-specifics{
      float: left;
      span{
        line-height: 2rem;
      }
    }
    .product-operates{
      float: right;
      padding-right: .5rem;
    }
    .product-operate{
      float: right;
      width: 70%;
    }
    /* + */
    .inner {
      float: right;
      width: 2rem;
      height: 2rem;
      border: 0.1rem solid #dcbd9e;
      border-radius: 50%;
      text-align: center;
      line-height: 1.5rem;
      color: #d73e00;
      font-size: 2.5rem;
      margin: 0 0.2rem;
    }
    .product-operates-item{
      float: right;
      font-size: 1.5rem;
      height: 2.5rem;
      line-height: 2rem;
    }
    .group-footer{
      width: 100%;
      height: 5rem;
      line-height: 5rem;
      float: left;
      font-size: 1.4rem;
      color: #000;
      padding-left: 1.4rem;
    }
    .selectAll{
      display: inline-block;
      width: 5rem;
      padding-left: 2.5rem;
      -webkit-background-size: 1.8rem 1.8rem;
      background-size: 1.8rem 1.8rem;
      background-repeat: no-repeat;
      background-position: left center;
    }
    .selectAll-false{
      background-image: url("./image/unselect.png");
    }
    .selectAll-true{
      background-image: url('./image/select.png');
    }
    .group-btn{
      height: 100%;
      float: right;
      width: 10rem;
      text-align: center;
    }
  }
</style>