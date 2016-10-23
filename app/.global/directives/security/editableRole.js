(function () {
    'use strict';

    angular
        .module('app')
        .directive('editableRole', ['$compile','userService', editableRole]);

    function editableRole($compile, userService) {

        var directive = {
            link: link,
            restrict: 'A',
            priority: 100,
        };
        return directive;

        function link(scope, element, attrs) {
            var hasRole = userService.hasRole(attrs.editableRole);
            if (!hasRole) {
                var newElement = element.clone().attr('ng-readonly', 'true').attr('ng-disabled', 'true');
                newElement.removeAttr('editable-role');


                $compile(newElement)(scope);
                element.replaceWith(newElement);
            }

        }
    }
})();