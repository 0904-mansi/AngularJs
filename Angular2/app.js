(function(){
    'use strict'; //no mistakes will be done

    angular.module('myfirstapp', [])
    .controller("myfirstcontroller", function ($scope){
        $scope.name="Mansi"
        $scope.sayHello = function(){
                return "Hello";
        };
    });

})();