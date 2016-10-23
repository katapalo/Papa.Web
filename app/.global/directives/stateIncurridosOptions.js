(function () {
    'use strict';
    var incStateArray = [{ display: 'Revisión', value: 1 },
                        { display: 'Aprobado', value: 2 },
                        { display: 'Rechazado', value: 3 }];

    angular.module('app')
     .constant('incStateArray', incStateArray)
     .directive('stateIncurridosOptions', ['incStateArray', stateIncurridosOptions])
     .filter('stateIncurridosFilter', ['incStateArray', stateIncurridosFilter]);

    function stateIncurridosOptions(states) {

        return {
            link: {
                pre: function (scope, iElement, iAttrs) {
                    scope.incStateArray = scope.incStateArray || states;
                    iAttrs.ngOptions = "state.value as state.display for state in incStateArray";
                }
            }
        }
    }

    function stateIncurridosFilter(states) {
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