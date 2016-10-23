(function () {
    angular.module('app.test')
           .controller('testIndexCtrl', ['protectedService', testIndexCtrl]);

    function testIndexCtrl(protectedService) {
        var vm = this;
        vm.claims = [];

        vm.testApi = function() {
            protectedService.query(function(data) {
                angular.copy(data, vm.claims);
            });
        }
    };
})();
