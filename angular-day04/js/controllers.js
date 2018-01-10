/**
 * Created by miaoce on 17/6/29.
 */
//使用myApp这个模块
angular.module("myApp")
    .controller('HomeCtrl',['$scope','UserService',function ($scope,UserService) {
        $scope.title = "我是主页";
        $scope.userServe = UserService.getUserList;
        // console.log(UserService.getUserList);

    }])
    .controller('cartCtrl',['$scope',function ($scope) {
        $scope.title = "我是cart页"
    }])
    .controller('mineCtrl',['$scope',function ($scope) {
        $scope.title = "我是mine页"
    }])
    .controller('detailCtrl',['$scope','UserService','$routeParams',function ($scope,UserService,$routeParams) {
        $scope.title = "我是详情页";
        // console.log($routeParams)  //一个对象用于接受传递参数的
        var id = $routeParams.MC;
        $scope.useInfo =UserService .getUserInfDetail(id)


    }])




