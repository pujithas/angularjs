/**
 * Created by PUJITHA on 2/20/2017.
 */
var app= angular.module("myapp",[])
                 .controller('myctrl',['$scope','myfactory',function($scope,myfactory){
                     $scope.a=10;
                     $scope.b=20;
                     $scope.cal=function(){
                      myfactory.calculate($scope.a,$scope.b,function(r){
                       $scope.c=r;
                      });
                     };

                 }]);
app.factory('myfactory',['$http','$log',function($http,$log){
          $log.log("instante the serice");
          var calservice={};
         // calservice.calculate=function(a,b){
           //   return parseFloat(a)+parseFloat(b);
    calservice.getsum=function(a,b,cb){

    var s= parseInt(a)+parseInt(b);
    cb(s);
    };
          return calservice;
}]);