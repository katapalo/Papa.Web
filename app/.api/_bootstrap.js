(function () {
    angular.module('app.api', [
        'LocalStorageModule',
        'ngResource'
    ]).constant('API', { url: ' api' });
})();
