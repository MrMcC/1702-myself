/**
 * Created by miaoce on 17/7/1.
 */

//配置路由
var app = angular.module('myApp',['ngRoute']);

app.config(['$routeProvider',function ($routeProvider) {
    $routeProvider
        .when('/',{
        //    注意是一个点
            templateUrl: './views/home.html',
            controller: 'HomeCtrl'
        })
        .when('/market',{
            templateUrl: './views/market.html' ,
            controller: 'MarketCtrl'
        })
        .when('/shopCar',{
            templateUrl: './views/shopCar.html',
            controller: 'ShopCarCtrl'
        })
        .when('/mine',{
            templateUrl: './views/mine.html',
            controller: 'MineCtrl'
        })
        .when('/404',{
            templateUrl: './views/404.html',
        })
        .otherwise({
            redirectTo: '/404'
        })
}])












