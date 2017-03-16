/**
 * Created by PUJITHA on 2/19/2017.
 */
var app= angular.module('myapp',[])
                .controller('myctrl',function($scope){
                    $scope.a=1;
                    $scope.b=1;
                    $scope.c=1;
                    $scope.o = {
                        x:10,
                        y:20,
                        z:33
                    };
                    $scope.$watch("o",function(newValue,oldValue){
                        if(newValue!=oldValue)
                       $scope.o.x=$scope.o.y*$scope.o.z;
                    },true);
                    $scope.updatec=function(){
                        $scope.c=$scope.a*4;
                    };
                    $scope.$watch("c",function(newValue,oldValue){
                      if (newValue!=oldValue)
                          console.log("updateC to"+newValue);
                    });
                    $scope.$watch("a",function(newValue,oldValue){
                        if (newValue!=oldValue)
                            $scope.b=$scope.a*8;
                    });
                });