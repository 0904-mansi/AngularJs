(function(){
    angular.module('DI',[]).controller('DIcontroller', DIcontroller);

    function DIcontroller($scope , $filter){
        $scope.name="Mansi";
        $scope.upper = function () {
            var up = $filter('uppercase');
            $scope.name = up($scope.name);
        }
    }

    function Annonate(name, job, blah) {
        return "blah";
    }
    console.log(Annonate());
    console.log(Annonate);
    console.log(Annonate.toString());
})();