/**
 * Created by PUJITHA on 2/19/2017.
 */
var app=angular.module('myapp',[])
               .controller('myctrl', ['$scope','$rootScope' ,function($scope,$rootScope){
                  $scope.a=1;
                  $scope.b=2;
                  $scope.s=0;
                  $scope.sum=function(){
                      $scope.s=Number($scope.a)+Number($scope.b);

                   };

               }]);
var csum = function(){
    var $scope= angular.element($("#div1")).scope();
    $scope.s=Number($scope.a)+Number($scope.b);
    $scope.$apply();

}