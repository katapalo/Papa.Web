(function () {
    'use strict';
    var statesArray = [ { display: 'Abierto', value: 1 },
                        { display: 'Valoración procesos', value: 2 },
                        { display: 'En valoración', value: 3 },
                        { display: 'Pendiente Aceptar Valoración', value: 4 },
                        { display: 'Valoración Aceptada', value: 5 },
                        { display: 'Planificado', value: 6 },
                        { display: 'En Curso', value: 7 },
                        { display: 'UAT', value: 8 },
                        { display: 'Cerrado', value: 9 },
                        { display: 'Pdte de Terceros', value: 10 },
                        { display: 'Cancelado/Rechazado', value: 11 }];

    angular.module('app')
        .constant('statesArray', statesArray)
        .directive('statesOption', ['statesArray', statesOption])
        .filter('statesFilter', ['statesArray', statesFilter]);

    function statesOption(states) {
        return {
            link: {
                pre: function (scope, iElement, iAttrs) {
                    scope.statesArray = scope.statesArray || states;
                    iAttrs.ngOptions = "state.value as state.display for state in statesArray";
                }
            }
        }
    }

    function statesFilter(states) {
        return function (input) {
            if (!input) return '';
            var state = states.filter(function (state, ix) {
                return (state.value === input);
            });
            if (!state || state.length === 0) return '';

            return state[0].display;
        };
    }
})();