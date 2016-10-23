(function () {
    angular.module("app.home")
    .controller('homeIndexCtrl',['$scope','Modelo','servicio1',homeIndexCtrl]);

    function homeIndexCtrl($scope,Modelo,servicio1) {        
        var vm = this;
        vm.Modelo = Modelo;
        console.log("hola home");
      //  $scope.prueba = "mariano";
        vm.prueba = "hola";        

        vm.loadModel = function()
        {
            vm.Model1 = {};
            vm.Model1.obj1 = 1;
        };       
    }

})();