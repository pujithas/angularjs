/**
 * Created by PUJITHA on 2/20/2017.
 */
var app = angular.module('myapp',[])
                 .controller('myctrl',['$scope',function($scope){
                     $scope.msg="thrid message";

}]);
                app.directive('myMsg',function(){
                    return{
                      templateUrl:"my-msg.html"
                    };
                 });

                 app.directive('secMsg',function(){
                           return{
                              templateUrl:"sec-msg.html"
                              }   ;
                 });