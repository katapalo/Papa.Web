(function () {
    'use strict';

    var prioridadArray = [{ display: 'A', value: 1 },
                        { display: 'B', value: 2 },
                        { display: 'C', value: 3 }];

    angular.module('app')
        .constant('prioridadArray', prioridadArray)
        .directive('prioridadOption', ['prioridadArray', prioridadOption])
        .filter('prioridadFilter', ['prioridadArray', prioridadFilter]);

    function prioridadOption(prioridades) {

        return {
            link: {
                pre: function (scope, iElement, iAttrs) {
                    var prioridadArray = [{ display: 'A', value: 1 },
                                          { display: 'B', value: 2 },
                                          { display: 'C', value: 3 }];
                    scope.prioridadArray = scope.prioridadArray || prioridades;
                    iAttrs.ngOptions = "prioridad.value as prioridad.display for prioridad in prioridadArray";
                }
            }
        }
    }

    function prioridadFilter(prioridades) {
        return function (input) {
            if (!input) return '';
            var prioridad = prioridades.filter(function (prioridad, ix) {
                return (prioridad.value === input);
            });
            if (!prioridad || prioridad.length === 0) return '';

            return prioridad[0].display;
        };
    }

})();