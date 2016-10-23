(function () {
    'use strict';
    var anyo = new Date().getFullYear();
    var anyosArray = [  { display: '' , value: 0},
                        { display: anyo - 7, value: anyo - 7 },
                        { display: anyo - 6, value: anyo - 6 },
                        { display: anyo - 5, value: anyo - 5 },
                        { display: anyo - 4, value: anyo - 4 },
                        { display: anyo - 3, value: anyo - 3 },
                        { display: anyo - 2, value: anyo - 2 },
                        { display: anyo - 1, value: anyo- 1 },
                        { display: anyo, value: anyo },
                        { display: anyo + 1, value: anyo + 1 },
                        { display: anyo + 2, value: anyo + 2 }];

    angular.module('app')
        .constant('anyosArray', anyosArray)
        .directive('anyosOptions', ['anyosArray', anyosOptions])
        .filter('mesesFilter', ['anyosArray', mesesFilter]);

    function anyosOptions(anyos) {

        return {
            link: {
                pre: function (scope, iElement, iAttrs) {

                    scope.anyosArray = scope.anyosArray || anyos;
                    iAttrs.ngOptions = "anyo.value as anyo.display for anyo in anyosArray";
                }
            }
        }
    }

    function mesesFilter(anyos) {
        return function (input) {
            if (!input) return '';
            var anyo = anyos.filter(function (anyo, ix) {
                return (anyo.value === input);
            });
            if (!anyo || anyo.length === 0) return '';

            return anyo[0].display;
        };
    }

})();