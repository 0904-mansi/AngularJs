(function(){
    'use strict'; //no mistakes will be done

    angular.module('myfirstapp', []) //creating module and connecting it with controller in one line
    .controller("myfirstcontroller", function ($scope){
        $scope.name="Mansi"
        $scope.sayHello = function(){
                return "Hello";
        };
    });

})();
