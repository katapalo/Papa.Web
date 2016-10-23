(function () {
    'use strict';

    angular
        .module('app')
        .directive('readonlyRole', ['$compile', 'userService', readonlyRole]);

    function readonlyRole($compile, userService) {

        var directive = {
            link: link,
            restrict: 'A',
            priority: 100,         
        };
        return directive;

        function link(scope, element, attrs) {
            var hasRole = userService.hasRole(attrs.readonlyRole);
            if (hasRole) {
                var newElement = element.clone().attr('ng-readonly', 'true').attr('ng-disabled', 'true');
                newElement.removeAttr('readonly-role')

                $compile(newElement)(scope);
                element.replaceWith(newElement);
            }

        }
    }
})();