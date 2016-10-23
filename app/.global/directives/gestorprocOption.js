(function () {
    'use strict';
    var gestorprocArray = [{ display: 'Amaia Urbialde', value: 1 },
                           { display: 'Alicia Arenas', value: 2 },
                           { display: 'Álvaro Ibáñez', value: 3 },
                           { display: 'Carlos Modesto', value: 4 },
                           { display: 'Javier Abad', value: 5 },
                           { display: 'Julio García', value: 6 },
                           { display: 'María Francés', value: 7 },
                           { display: 'Marta Giménez', value: 8 },
                           //{ display: 'Ricardo Minguela', value: 9 },
                           { display: 'Víctor Sánchez', value: 10 }];

    angular.module('app')
        .constant('gestorprocArray', gestorprocArray)
        .directive('gestorprocOption', ['gestorprocArray', gestorprocOption])
        .filter('gestorprocFilter', ['gestorprocArray', gestorprocFilter]);

    function gestorprocOption(gestoresproc) {
        return {
            link: {
                pre: function (scope, iElement, iAttrs) {
                    scope.gestorprocArray = scope.gestorprocArray || gestoresproc;
                    iAttrs.ngOptions = "gestorproc.value as gestorproc.display for gestorproc in gestorprocArray";
                }
            }
        }
    }

    function gestorprocFilter(gestoresproc) {
        return function (input) {
            if (!input) return '';
            var gestorproc = gestoresproc.filter(function (gestorproc, ix) {
                return (gestorproc.value === input);
            });
            if (!gestorproc || gestorproc.length === 0) return '';

            return gestorproc[0].display;
        };
    }
})();