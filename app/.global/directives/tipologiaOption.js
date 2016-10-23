(function () {
    'use strict';

    var tipologiaArray = [{ display: 'T', value: 1 },
                          { display: 'P', value: 2 },
                          { display: 'TyP', value: 3 },
                          { display: 'Estadístico', value: 4 }];

    angular.module('app')
        .constant('tipologiaArray', tipologiaArray)
        .directive('tipologiaOption', ['tipologiaArray', tipologiaOption])
        .filter('tipologiaFilter', ['tipologiaArray', tipologiaFilter]);

    function tipologiaOption(tipologias) {
        return {
            link: {
                pre: function (scope, iElement, iAttrs) {
                    scope.tipologiaArray = scope.tipologiaArray || tipologias;
                    iAttrs.ngOptions = "tipologia.value as tipologia.display for tipologia in tipologiaArray";
                }
            }
        }
    }

    function tipologiaFilter(tipologias) {
        return function (input) {
            if (!input) return '';
            var tipologia = tipologias.filter(function (tipologia, ix) {
                return (tipologia.value === input);
            });
            if (!tipologia || tipologia.length === 0) return '';

            return tipologia[0].display;
        };
    }
})();