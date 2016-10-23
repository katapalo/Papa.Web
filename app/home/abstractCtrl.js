(function () {
    angular.module("app.home")
    .controller('abstractCtrl',['$scope',abstractCtrl]);

    function abstractCtrl($scope) {
        var vm = this;
        $scope.modelo = {};
        $scope.modelo.objeto1 = {};
        $scope.modelo.objeto2 = {};
        $scope.modelo.objeto1.nombre = "elisa";
        $scope.modelo.objeto2.apellidos = "martinez";

        vm.prueba = "variable en ctrl padre";

        $scope.prueba = "mariano2";
        
      //  vm.prueba = "hola";
    }

})();