(function () {
    angular
        .module('app.test')
        .config(['$stateProvider', '$locationProvider', function ($stateProvider) {

            $stateProvider
                .state('app.test', {
                    abstract: true,
                    url: '/test',
                    template: '<div ui-view></div>'
                })
                .state('app.test.index', {
                    url: '',
                    templateUrl: 'app/test/testIndexView.html',
                    controller: 'testIndexCtrl as vm',
                    resolve: {},
                    ncyBreadcrumb: { label: 'Test' },
                });
        }]);
})();
