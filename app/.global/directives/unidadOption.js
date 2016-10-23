(function () {
    'use strict';

    var unidadArray = [{ display: 'Mejora de Procesos', value: 1 },
                        { display: 'Infraestructura IT', value: 2 },
                        { display: 'Seguridad', value: 3 },
                        { display: 'Sistemas de Información', value: 4 }];

    angular.module('app')
        .constant('unidadArray', unidadArray)
        .directive('unidadOption', ['unidadArray', unidadOption])
        .filter('unidadFilter', ['unidadArray', unidadFilter]);

    function unidadOption(unidades) {

        return {
            link: {
                pre: function (scope, iElement, iAttrs) {              
                    scope.unidadArray = scope.unidadArray || unidades;
                    iAttrs.ngOptions = "unidad.value as unidad.display for unidad in unidadArray";
                }
            }
        }
    }

    function unidadFilter(unidades) {
        return function (input) {
            if (!input) return '';
            var unidad = unidades.filter(function (unidad, ix) {
                return (unidad.value === input);
            });
            if (!unidad || unidad.length === 0) return '';

            return unidad[0].display;
        };
    }

})();