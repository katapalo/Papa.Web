(function () {
    'use strict';

    angular
        .module('watson')
        .directive('authenticated', ['userService', authenticated])
        .directive('anonymous', ['userService', anonymous]);

    function authenticated(userService) {

        var directive = {
            link: link,
            restrict: 'A',
        };
        return directive;

        function link(scope, element, attrs) {

            scope.$watch(userService.isAuthenticated, function (newValue, oldValue) {
                if (!newValue) {
                    element.hide();
                } else {
                    element.show();
                }
            });
        }
    }

    function anonymous(userService) {

        var directive = {
            link: link,
            restrict: 'A',
        };
        return directive;

        function link(scope, element, attrs) {

            scope.$watch(userService.isAuthenticated, function (newValue, oldValue) {
                if (newValue) {
                    element.hide();
                } else {
                    element.show();
                }
            });
        }
    }

})();