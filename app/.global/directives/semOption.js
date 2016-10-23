(function () {
    'use strict';

    var semArray = [{ display: 'Rojo', value: 1 },
                    { display: 'Naranja', value: 2 },
                    { display: 'Verde', value: 3 }];

    angular.module('app')
        .constant('semArray', semArray)
        .directive('semOption', ['semArray', semOption])
        .filter('semFilter', ['semArray', semFilter]);

    function semOption(semaforos) {

        return {
            link: {
                pre: function (scope, iElement, iAttrs) {
                    scope.semArray = scope.semArray || semaforos;
                    iAttrs.ngOptions = "sem.value as sem.display for sem in semArray";
                }
            }
        }
    }

    function semFilter(semaforos) {
        return function (input) {
            if (!input) return '';
            var semaforo = semaforos.filter(function (semaforo, ix) {
                return (semaforo.value === input);
            });
            if (!semaforo || semaforo.length === 0) return '';

            return semaforo[0].display;
        };
    }

})();