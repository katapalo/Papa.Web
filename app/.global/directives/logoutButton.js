(function() {

    angular
        .module('app')
        .directive('logoutButton', logoutButton);

    function logoutButton() {
        return {
            restrict: 'EA',
            replace: true,
            template: '<a ng-click="vm.logout()"><i class="fa fa-sign-out"></i></div>',
            controllerAs: 'vm',
            controller: ['authService', function (authService) {
                var vm = this;
                vm.logout = function () {
                    authService.logout();
                }
            }]
        };
    };


})();