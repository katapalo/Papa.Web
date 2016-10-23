(function () {
    'use strict';

    angular.module('app')
        .directive('myLink',myLink);
    
    function myLink () {
        return {
            scope: {
                enabled: '=myLink'
            },
            link: function (scope, element, attrs) {
                element.bind('click', function (event) {
                    if (!scope.enabled) {
                        event.preventDefault();
                    }
                });

            }
        };
    }

})();