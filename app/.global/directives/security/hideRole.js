(function () {
    'use strict';

    angular
        .module('app')
        .directive('hideRole', ['userService', hideRole]);

    function hideRole(userService) {

        var directive = {
            link: link,
            restrict: 'A',
            priority: 100,
        };
        return directive;

        function link(scope, element, attrs) {
            var hasRole = userService.hasRole(attrs.hideRole);
            if (hasRole) {
                element.remove();
            }

        }
    }
})();