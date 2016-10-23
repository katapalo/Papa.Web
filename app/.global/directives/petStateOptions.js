(function () {
    'use strict';
    var petStateArray = [{ display: 'Pdte definición', value: 1 },
                        { display: 'Pdte valoración', value: 2 },
                        { display: 'No planificado', value: 3 },
                        { display: 'Pdte inicio', value: 4 },
                        { display: 'Análisis funcional', value: 5 },
                        { display: 'CONS y PI', value: 6 },
                        { display: 'UAT', value: 7 },
                        { display: 'Despliegue', value: 8 },
                        { display: 'Cerrado', value: 9 },
                        { display: 'Parado', value: 10 },
                        { display: 'Bloqueado', value: 11 },
                        { display: 'Cancelado / Rechazado', value: 12 }];

    angular.module('app')
        .constant('petStateArray', petStateArray)
        .directive('petStateOptions', ['petStateArray', petStateOptions])
        .filter('petStateFilter', ['petStateArray', petStateFilter]);

    function petStateOptions(states) {

        return {
            link: {
                pre: function (scope, iElement, iAttrs) {

                    scope.petStateArray = scope.petStateArray || states;
                    iAttrs.ngOptions = "petState.value as petState.display for petState in petStateArray";
                }
            }
        }
    }   

    function petStateFilter(states) {
        return function (input) {
            if (!input) return '';
            var state = states.filter(function(state, ix) {
                return (state.value === input) ;
            });
            if (!state || state.length === 0) return '';

            return state[0].display;
        };
    }

})();