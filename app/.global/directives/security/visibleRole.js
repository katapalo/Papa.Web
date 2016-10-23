(function () {
    'use strict';

    angular
        .module('app')
        .directive('visibleRole', ['userService', visibleRole]);

    function visibleRole(userService) {

        var directive = {
            link: link,
            restrict: 'A',
            priority: 100,
        };
        return directive;

        function link(scope, element, attrs) {
            var hasRole = userService.hasRole(attrs.visibleRole);
            if (!hasRole) {
                element.remove();
            }

        }
    }
})();