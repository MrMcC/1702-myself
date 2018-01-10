<template>
  <div class="market">
    <header-yellow></header-yellow>
    <div id="main">
      <div class="category">
        <!-- 左边的列表 -->
        <ul class="categories">
          <li v-for="(item,index) in classfiys" @click="changeClassfiyIndex(index)"><span :class="{'active': item.classfiy_id === activeClassfiyId}">{{item.classify_title}}</span></li>
        </ul>
        <div class="product-filter">
          <ul class="filter-titles">
            <!-- active指旋转小三角 -->
            <li><p :class="{active: allClassfiy}" @click="changeClassfiyBol()">全部分类<var>&nbsp;</var></p></li>
            <li><p :class="{active: ranking}" @click="changeRankingBol()">综合排序<var>&nbsp;</var></p></li>
          </ul>
          <!-- 全部分类 -->
          <div class="filter-items" :class="{'act': allClassfiy}">
            <ul>
              <li @click="changeClassfiy('all')" :class="{'active': allCategoriesIndex === 'all'}">全部分类</li>
              <li v-for="(item,index) in allClassifys" @click="changeClassfiy(index)" :class="{'active': allCategoriesIndex === index}">{{item.name}}</li>
            </ul>
          </div>
          <!-- 综合排序 -->
          <div class="filter-items" :class="{'act': ranking}">
            <ul>
              <li v-for="(item,index) in rankingList" @click="changeRanking(index)" :class="{'active': activeRankingIndex === index}">{{item.name}}</li>
            </ul>
          </div>
        </div>
        <!-- 右边的产品列表 -->
        <ul class="productList-wrap">
          <li v-for="item in filterProducts">
            <dl>
              <dt><img v-lazy="item.imgs.small" alt=""></dt>
              <dd class="product-item-title">{{item.title}}</dd>
              <dd class="product-specifics-wrap">
                <div class="product-specifics">
                  <span>{{item.unit}}ml</span>
                  <var>￥{{item.price}}</var>
                </div>
                <div class="product-operate">
                  <!-- 点击时候把当前产品的对象传过去 -->
                  <span class="inner" @click="addNum(item)">+</span>
                  <span class="product-operates-item" v-show="item.num > 0">{{item.num}}</span>
                  <span class="inner" @click="subNum(item)" v-show="item.num > 0">-</span>
                </div>
              </dd>
            </dl>
          </li>
        </ul>
        <!--&lt;!&ndash; 点击加号时的动画 &ndash;&gt;-->
        <!--<div class="addAnimate" ng-repeat="item in addCartItem" ng-style="item.cartStartPosition">-->
          <!--<img src="{{item.cartImg}}" alt="">-->
        <!--</div>-->
      </div>
    </div>
  </div>
</template>
<script>
  import HeaderYellow from '../../components/header-yellow/header-yellow'
  // 地址
  import Api from '../../api'
  export default{
    created () {
      if (!(this.$store.state.classfiys.length > 0)) {
        this.$http.get(Api.host + 'classfiys')
          .then((data) => {
            // 调用mutations里的方法,并把分类数据传过去
            this.$store.commit('SAVE_CLASSFIYS', data.data)
          })
      }
    },
    data () {
      return {
        // 分类激活的id
        activeClassfiyId: 1,
        // 全部分类
        allClassfiy: false,
        // 分类激活的下标
        allCategoriesIndex: 'all',
        // 综合排序
        ranking: false,
        // 综合排序数据
        rankobj: [{name: '综合排序'}, {name: '价格最低'}, {name: '价格最高'}],
        // 激活的排序下标
        activeRankingIndex: 0
      }
    },
    computed: {
      // 全部分类
      allClassifys () {
        // 异步操作,加载时已获取到
        if (this.classfiys.length > 0) {
          return this.classfiys[this.activeClassfiyId - 1].cids
        }
      },
      // 综合排序
      rankingList () {
        return this.rankobj
      },
      // 获取当前激活的分类数据
      activeClassfiyProducts () {
        let filterClassfiys = this.filterClassfiys
        return filterClassfiys.filter(item => item.classfiy_id === this.activeClassfiyId)[0]
      },
      // 通过allCategoriesIndex来筛选数据和activeRankingIndex来排序
      filterProducts () {
        // 筛选
        let result = []
        if (this.activeClassfiyProducts) {
          if (this.allCategoriesIndex === 'all') {
            result = this.activeClassfiyProducts.products
          } else {
            for (var i = 0; i < this.activeClassfiyProducts.products.length; i++) {
              if (this.activeClassfiyProducts.products[i].cids === this.allCategoriesIndex) {
                result.push(this.activeClassfiyProducts.products[i])
              }
            }
          }
        }
        // 排序
        function up (a, b) {
          return a.price - b.price
        }
        function down (a, b) {
          return b.price - a.price
        }
        switch (this.activeRankingIndex) {
          case 0:
            return result
          case 1:
            return result.sort(up)
          case 2:
            return result.sort(down)
        }
      },
      // 所有商品数据
      classfiys () {
        let classfiys = this.$store.state.classfiys
        if (classfiys.length > 0) {
          return classfiys
        } else {
          return []
        }
      },
      // 购物车数据
      cartData () {
      // 获取vuex中的购物车数据
        let cartData = this.$store.state.cartData
        if (cartData.length > 0) {
          return cartData
        } else {
          return []
        }
      },
      filterClassfiys () {
        let classfiys = this.classfiys
        let cartData = this.cartData
        // console.log(classfiys)
        // console.log(cartData)
        if (cartData.length > 0 && classfiys.length > 0) {
        // 比较购物车和所有商品,匹配上后将购物车的数量赋值给商
          for (var i = 0; i < classfiys.length; i++) {
            for (var j = 0; j < classfiys[i].products.length; j++) {
              for (var z = 0; z < cartData.length; z++) {
                if (classfiys[i].products[j].product_id === cartData[z].product_id) {
                  classfiys[i].products[j].num = cartData[z].num
                }
              }
            }
          }
          return classfiys
        } else {
          return this.classfiys
        }
      }
    },
    methods: {
      // 切换左侧分类列表
      changeClassfiyIndex (index) {
        this.allClassfiy = false
        this.ranking = false
        this.activeClassfiyId = index + 1
        this.allCategoriesIndex = 'all'
        this.activeRankingIndex = 0
      },
      // 全部分类
      changeClassfiyBol () {
        this.ranking = false
        this.allClassfiy = !this.allClassfiy
      },
      // 综合排序
      changeRankingBol () {
        this.allClassfiy = false
        this.ranking = !this.ranking
      },
      // 点击左侧小方块
      changeClassfiy (index) {
        this.allCategoriesIndex = index
      },
      // 点击右侧小方块
      changeRanking (index) {
        this.activeRankingIndex = index
      },
      // 添加
      addNum (item) {
        this.$store.dispatch('addNum', item)
      },
      // 减少
      subNum (item) {
        this.$store.dispatch('subNum', item)
      }
    },
    components: {
      HeaderYellow
    }
  }
</script>
<style lang="less" scoped>
.market{
  height: 100%;
}
#main{
  position: absolute;
  top: 4.5rem;
  right: 0;
  bottom: 5rem;
  left: 0;
}
.category{
  overflow: hidden;
  height: 100%;
}
.categories{
  float: left;
  width: 23.75%;
  height: 100%;
}
.categories>li{
  height: 4rem;
  color: #6d6d6d;
  border-bottom: 0.1rem solid #e0e0e0;
  box-sizing: border-box;
  overflow: hidden;
}
.categories>li>span{
  display: block;
  height: 3rem;
  line-height: 3rem;
  text-align: center;
  margin-top: 0.5rem;
  border-left: 0.6rem solid #f8f8f8;
}
.categories>li>span.active{
  border-left: 0.6rem solid #f0d001;
}
.product-filter{
  background-color: white;
  float: right;
  width: 76%;
  height: 100%;
  position: relative;
}
.filter-titles{
  width: 100%;
  overflow: hidden;
}
.filter-titles>li{
  float: left;
  width: 50%;
  height: 4rem;
  overflow: hidden;
  border-bottom: 0.1rem solid #e0e0e0;
  box-sizing: border-box;
}
.filter-titles>li>p{
  margin-top: 1.25rem;
  text-align: center;
  color: #6d6d6d;
}
.filter-titles>li:nth-child(1)>p{
  border-right: 0.1rem solid #e0e0e0;
}
.filter-titles>li>p>var{
  display: inline-block;
  background: url("./image/icon-down.png") no-repeat 80% 40%;
  width: 1.3rem;
  height: 1.8rem;
  background-size: auto 0.5rem;

  transform: rotate(0deg);
  -webkit-transform: rotate(0deg);
  transition: 1s ease;
  -webkit-transition: 0.5s ease;
  transform-origin: 60% 40%;
}
.filter-titles>li>p.active>var{
  transform: rotate(-180deg);
  -webkit-transform: rotate(-180deg);
}
.filter-items{
    width: 100%;
    z-index: 10;
    position: absolute;
    top: 4rem;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    display: none;
}
.act{
    display: block;
    background-color: rgba(0,0,0,0.1);
}
.filter-items>ul{
    padding-bottom: 1rem;
    background-color: rgba(255,255,255,1);
    overflow: hidden;

}
.filter-items>ul>li{
    float: left;
    padding: 0.7rem 0.9rem;
    border: 0.1rem solid #e6d056;
    border-radius: 0.4rem;
    margin: 0.8rem 0 0 0.8rem;
}
.filter-items>ul>li.active{
  background-color: #fff9d9;
  border-color: #e6d056;
}
.productList-wrap{
    position: absolute;
    top: 4.5rem;
    bottom: 0;
    left: 24%;
    right: 0;
    width: 76%;
    overflow-y: scroll;
    background-color: #fff;
    z-index: 8;
    padding-bottom: 5rem;
}
.productList-wrap>li{
    border-bottom: 0.1rem solid #e1dbdd;
    padding: 0.8rem 1rem;
}
.productList-wrap>li>dl{
    overflow: hidden;
}
.productList-wrap>li>dl>dt{
    width: 8rem;
    height: 8rem;
    float: left;
    overflow: hidden;
}
.productList-wrap>li>dl>dt>img{
    width: 100%;
}
/*第一个dd*/
.product-item-title{
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    margin-bottom: 2.9rem;
    padding-left: 0.5rem;
}
/*第二个dd*/
.product-specifics-wrap{
    overflow: hidden;
    padding-left: 0.5rem;
}
/*第二个dd里第一个div*/
.product-specifics{
    float: left;
    width: 30%;
    overflow: hidden;
}
.product-specifics>span{
    display: block;
    color: #858585;
    margin-bottom: 0.5rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.product-specifics>var{
    color: #f40;
}
/*第二个dd里第二个div*/
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
/*添加购物车的 起点动画位置*/
.addAnimate{
    position: fixed;
    width: 8rem;
    height: 8rem;
    z-index: 888;
    -webkit-transform: rotate(30deg) scale(0.5);
    transform: rotate(30deg) scale(0.5);
    -webkit-transition: all 0.5s cubic-bezier(0.58,-1.15, 0.99, 1.07);
    transition: all 0.5s cubic-bezier(0.58,-1.15, 0.99, 1.07);
    opacity: 0.9;
}
.addAnimate>img{
    width: 100%;
    border-radius: 50%;
}
</style>