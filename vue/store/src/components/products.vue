<template>
    <div class="container-fluid">
        <div class="panel panel-default row">
            <div class="col-xs-3">
                <!-- <a class="btn btn-block btn-default btn-lg" href="###">所有商品</a> -->
                <!-- btn-primary -->
                <a class="btn btn-block btn-default btn-lg" href="###" v-for="(item,index) in classifyList" @click="changeClassify(item)" :class="{'btn-primary': item.id === nowClassify}">{{item.name}}</a>
            </div>
            <div class="col-xs-8">
                <div class="well" v-for="(item,index) in nowPageProduct">
                    <h3>
                        <strong>{{item.title}}</strong>
                        <span class="pull-right label label-primary">￥{{item.price}}</span>
                    </h3>
                    <div class="description">
                        <span class="lead">{{item.descirbe}}</span>
                        <button class="btn btn-success pull-right" @click="addCart(item)">添加到购物车</button>
                    </div>
                </div>
                <div class="pull-right btn-group">
                    <!--  btn-primary -->
                    <a class="btn btn-default" v-for="(item,index) in pageCount" @click="changeCount(index)" :class="{'btn-primary': index === nowPage}">
                        {{item}}
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
// 每页显示的数量
const pageSize = 3
export default {
  created () {
    // 获取分类列表
    var _this = this
    this.$http.get('http://localhost:8081/classifyCount')
      .then(function (data) {
        _this.classifyList = data.data
      })
    // 获取所有的商品
    this.$http.get('http://localhost:8081/products')
      .then(function (data) {
        _this.products = data.data
      })
  },
  data () {
    return {
      classifyList: [],
      products: [],
      // 分页下标
      nowPage: 0,
      // 当前的分类
      nowClassify: 0
    }
  },
  computed: {
    // 根据选择的分类选择对应的商品数据
    nowClassifyProduct () {
      if (this.nowClassify === 0) {
        return this.products
      } else {
        return this.products.filter(item => item.classify === this.nowClassify)
      }
    },
    // 根据分页下标返回商品
    nowPageProduct () {
      let result = []
      for (let i = 0; i < this.nowClassifyProduct.length; i++) {
        let start = this.nowPage * pageSize
        let end = this.nowPage * pageSize + pageSize - 1
        if (i >= start && i <= end) {
          result.push(this.nowClassifyProduct[i])
        }
      }
      return result
    },
    // 获取分页按钮的数量
    pageCount () {
      // 根据种类的数量得出分页的数量
      let count = Math.ceil(this.nowClassifyProduct.length / pageSize)
      return count
    }
  },
  methods: {
    changeClassify (item) {
      this.nowClassify = item.id
      this.nowPage = 0
    },
    changeCount (index) {
      this.nowPage = index
    },
    addCart (item) {
      this.$store.dispatch('addCart', item)
    }
  }
}
</script>
<style type="text/css">

</style>
