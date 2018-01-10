/**
 * Created by miaoce on 17/7/1.
 */
//使用mgApp
angular.module("myApp")
    //当angular初始化完成会运行run
    .run(['$rootScope','$location',function ($rootScope,$location) {
        //控制初始激活的导航
        //本地储存路径location.path()
        if($location.path() == "/"){
            $rootScope.navActiveIndex = 0
        }else if($location.path().indexOf('/market') != -1){
            $rootScope.navActiveIndex = 1
        }else if($location.path().indexOf('/shopCar') != -1){
            $rootScope.navActiveIndex = 2
        }else if($location.path().indexOf('/mine') != -1){
            $rootScope.navActiveIndex = 3
        }
    }])
    .controller('HomeCtrl',['$scope','$http',function ($scope,$http) {
        //轮播图
        $scope.slide = [];
        //菜单
        $scope.menu = [];
        //拿到数据
        $http.get("http://h5.yztctech.net/api/axf/apihome.php").success(function (data) {
            $scope.slide = data.data.slide.filter((item,index)=>index!=0&&index!=data.data.slide.length-1)
            $scope.menu = data.data.menu;
            //图片预加载
            var num =0;
            for(var i= 0; i< $scope.slide.length; i++){
                var imgObj = new Image();
                imgObj.src = $scope.slide[i].activity.img;
                imgObj.onload = function () {
                    num++;
                    if(num == $scope.slide.length) {
                        //(图片都加载完成后)初始化Swiper
                        var mySwiper = new Swiper('.swiper-container', {
                            loop: true,
                            //自动轮播
                            autoplay: 2500,
                            // 如果需要分页器
                            pagination: '.swiper-pagination',

                            //启动动态检查器，当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper。
                            // observer : true
                        })

                        // angular.element(document.querySelector('.swiper-container')).addEventListener('touchstart', function () {
                        //     mySwiper.stopAutoplay();
                        // })
                        //
                        // angular.element(document.querySelector('.swiper-container')).addEventListener('touchend', function () {
                        //     mySwiper.startAutoplay();
                        // })
                    }
                }
            }
        })

        //获取热卖数据
        $scope.homehot = [];
        $scope.water = [];
        $scope.easy = [];
        $scope.life = [];
        $http.get('http://h5.yztctech.net/api/axf/apihomehot.php').success(function (data) {
            $scope.homehot = data.data.slice(0,3)
            $scope.water = data.data.slice(9,12)
            $scope.easy = data.data.slice(3,6)
            $scope.life = data.data.slice(24,27)
        })
    }])



    .controller('MarketCtrl',['$scope','$http','$timeout','cart',function ($scope,$http,$timeout,cart) {
        //全部分类
        $scope.allCategories = false;
        //综合排序
        $scope.ranking = false;

        //用于储存所有分类数据
        $scope.categories = [];
        //用于储存所有商品信息
        $scope.products = {};

        //左侧激活的分类id,初始第一个
        $scope.activeCategoriesId = 0;
        //存储产品的数组
        $scope.productsItem = [];


        $http.get("aixianfeng.json").success(function (data){
            // console.log(data)

            //初始化赋值分类数据
            $scope.categories = data.data.categories;
            //初始化赋值储存商品信息
            $scope.products = data.data.products;
            //初始化左侧激活的分类id
            $scope.activeCategoriesId = data.data.categories[0].id;
            $scope.productsItem = $scope.products[$scope.activeCategoriesId];
        })


        //存储过滤的选项 , 可选为全部分类 和 综合排序
        $scope.filterItems = [];

        //右上全部分类点击
        $scope.changeCategorieBol = function () {
            $scope.ranking = false;
            $scope.allCategories = !$scope.allCategories;

            //通过左边的分类id获取对应的cid 也就是点击的分类列表
            for(var i = 0; i < $scope.categories.length; i++){
                //如果数组里的id 是 左边的激活的id
                if($scope.categories[i].id == $scope.activeCategoriesId){
                    //把激活的id对应的cid数组存到临时数组里
                    $scope.filterItems = $scope.categories[i].cids;
                }
            }
        }
        //自定义个cid数组
        $scope.rankings = [{name: "综合排序"},{name: "价格最低"},{name: "价格最高"}]
        //右上综合排序点击
        $scope.changeRankingBol = function () {
            $scope.allCategories = false;
            $scope.ranking = !$scope.ranking;
            //把自定义数组存到临时数组里
            $scope.filterItems = $scope.rankings;

        }
        //左测激活的分类id点击
        $scope.changeCategoriesIndex = function (id) {
            //获取激活的item.id并赋值给当前激活id
            $scope.activeCategoriesId = id;
            //将全部分类和综合排序隐藏掉
            $scope.allCategories = false;
            $scope.ranking = false;
            //将数据改成当前点击的数据
            $scope.productsItem = $scope.products[$scope.activeCategoriesId]

        }


        //点击小方块
        $scope.filterProduct = function (item) {

            var result = [];
            //判断是分类还是排序
            if($scope.allCategories){
                //如果点击的是全部分类就把我左边点击的那个id下的所有产品(对象)放到数组里
                if(item.name == '全部分类') {
                    $scope.productsItem = $scope.products[$scope.activeCategoriesId];
                    return;
                }
                //存储数组,然后筛选
                $scope.productsItem = $scope.products[$scope.activeCategoriesId];
                for(var i=0; i < $scope.productsItem.length; i++){
                    //如果点击的小方块和产品里的cids里的名字一致,就把这个产品存一个新数组里
                    if(item.name == $scope.productsItem[i].cids[$scope.productsItem[i].child_cid]){
                        result.push($scope.productsItem[i])
                    }
                }
                $scope.productsItem = result;

            }else if($scope.ranking){
                var result1 = [];
                switch (item.name){
                    case '综合排序':
                        $scope.productsItem = $scope.products[$scope.activeCategoriesId]
                        break;
                    case '价格最低':
                        for(var i =0; i< $scope.productsItem.length; i++){
                            result1.push($scope.productsItem[i])
                        }
                        result1.sort(function (a,b) {
                           return a.price-b.price;
                        })
                        $scope.productsItem = result1;
                        break;
                    case '价格最高':
                        for(var i =0; i< $scope.productsItem.length; i++){
                            result1.push($scope.productsItem[i])
                        }
                        result1.sort(function (a,b) {
                            return b.price-a.price;
                        })
                        $scope.productsItem = result1;
                        break;
                }
            }
        }

        //减少数量
        $scope.subNum = function (item) {

            if(item.pre_state == 0){
                return;
            }
            cart.subProduct(item.id)
        }

        //储存每个item动画的位置和动画的图片
        $scope.addCartItem = []


        //增加数量
        $scope.addNum = function (item) {

            cart.addProduct(item)

            //点击的item动画的起点位置和动画的图片
            var addCartObj = {
                'cartStartPosition': {
                    'left' : (event.clientX - 300)/10 + "rem",
                    'top' : (event.clientY - 10)/10 + "rem"
                },
                'cartImg' : item.img
            }

            $scope.addCartItem.push(addCartObj)

            //点击的item动画的终点位置和动画的图片
            var cartEndPosition = {
                'left': document.querySelector('.market').offsetLeft + "px",
                'top': document.querySelector('.market').offsetParent.offsetTop + "px",
                "transform": "scale(0) rotate(120deg)",
                "opacity":"0"
            }
            $timeout(function () {
                addCartObj.cartStartPosition = cartEndPosition;
            },100)
            $timeout(function () {
                $scope.addCartItem.splice(addCartObj,1)
            },500)
        }
    }])

    // 购物车
    .controller("ShopCarCtrl",["$scope","cart",function ($scope,cart){

        $scope.products = cart.getProduct()
        

    }])


    // 我的
    .controller("MineCtrl",["$scope",function ($scope) {

    }])

    //自定义服务
    .factory('cart',['$rootScope','$timeout',function ($rootScope,$timeout) {
        //存储点击后在购物车上显示的个数对象的数组
        var cartData = [];
        return{
            getProduct : function () {
                return cartData
            },
            //减少
            subProduct : function (id) {
                for(var i=0; i < cartData.length; i++){
                    if(cartData[i].id == id){
                        cartData[i].pre_state--;
                        if(cartData[i].pre_state <= 0){
                            //把数组里的这个对象移除
                            cartData.splice(i,1);
                        }
                    }
                }
                //页面展示数量
                $rootScope.total = 0;
                for(var i =0; i< cartData.length; i++){
                    $rootScope.total += cartData[i].pre_state;
                }
                //购物车动画
                $rootScope.numZoomActive = true;
                $timeout(function () {
                    $rootScope.numZoomActive = false;
                },200)
            },
            //添加
            addProduct : function (item) {
                //两种情况 1.追加 2.添加新的
                var addedToExistingItem = false;

                //追加
                for(var i =0; i< cartData.length; i++){
                    if(cartData[i].id == item.id){
                        //追加
                        cartData[i].pre_state++;
                        addedToExistingItem = true;
                    }
                }

                //添加
                if(!addedToExistingItem){
                    item.pre_state++;
                    cartData.push(item);
                }
                //在页面展示
                $rootScope.total = 0;
                for (var i=0; i<cartData.length; i++) {
                    $rootScope.total += cartData[i].pre_state;
                }
                //购物车动画在主页里加
                $rootScope.numZoomActive = true
                $timeout(function(){
                    $rootScope.numZoomActive = false
                }, 200)
            }
        }
    }])
