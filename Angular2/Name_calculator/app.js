(function(){
    'use strict';
    angular.module('Namecalculator',[])
    .controller('namecalculator', function($scope){
        $scope.name="";
        $scope.totalValue=0;
        $scope.displayNumeric = function () {
            var totalNameValue = calculate($scope.name);
            $scope.totalValue = totalNameValue;
        };

        function calculate(string) {
             var totalStringval=0;
             for (let index = 0; index < string.length; index++) {
                totalStringval += string.charCodeAt(index);
                
             }
             return totalStringval;
        }
    })
})();