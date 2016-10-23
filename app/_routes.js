(function () {
    angular
        .module('app')
        .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise(                
                function ($injector, $location) {
                    debugger;
                var $state = $injector.get("$state");
                $state.go("app.home.index");
                // var userService = $injector.get("userService");
                // if (userService.isAuthenticated()) {
                //     $state.go("app.home.index");
                // } else {
                //     $state.go("unauthorized.login");
                // }

            });

            // $stateProvider
            //     .state('unauthorized', {
            //         abstract: true,
            //         url: '',
            //         templateUrl: 'app/anonymousTemplate.html'
            //     })
            $stateProvider
                .state('app', {
                    abstract: true,
                    url: '',
                    template: '<div ui-view></div>'
                });

        }]);
})();
