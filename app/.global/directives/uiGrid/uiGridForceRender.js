(function () {
    'use strict';

    angular
        .module('app')
        .directive('uiGridForceRender', ['$interval', uiGridForceRender]);

    function uiGridForceRender($interval) {
        var directive = {
            require: '^uiGrid',
            scope: false,
            restrict: 'A',
            link: function ($scope, $elm, $attrs, uiGridCtrl) {
                $interval(function () {
                    uiGridCtrl.grid.api.core.handleWindowResize();
                }, 100, 20);
            }
        };
        return directive;

    }
})();