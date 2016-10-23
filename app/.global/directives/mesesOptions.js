(function () {
    'use strict';
    
    var mesesArray = [  { display: '', value: 0 },
                        { display: 'Enero', value: 1 },
                        { display: 'Febrero', value: 2 },
                        { display: 'Marzo', value: 3 },
                        { display: 'Abril', value: 4 },
                        { display: 'Mayo', value: 5 },
                        { display: 'Junio', value: 6 },
                        { display: 'Julio', value: 7 },
                        { display: 'Agosto', value: 8 },
                        { display: 'Septiembre', value: 9 },
                        { display: 'Octubre', value: 10 },
                        { display: 'Noviembre', value: 11 },
                        { display: 'Diciembre', value: 12 }];

    angular.module('app')
        .constant('mesesArray', mesesArray)
        .directive('mesesOptions', ['mesesArray', mesesOptions])
        .filter('mesesFilter', ['mesesArray', mesesFilter]);

    function mesesOptions(meses) {

        return {
            link: {
                pre: function (scope, iElement, iAttrs) {

                    scope.mesesArray = scope.mesesArray || meses;
                    iAttrs.ngOptions = "mes.value as mes.display for mes in mesesArray";
                }
            }
        }
    }

    function mesesFilter(meses) {
        return function (input) {
            if (!input) return '';
            var mes = meses.filter(function (mes, ix) {
                return (mes.value === input);
            });
            if (!mes || mes.length === 0) return '';

            return mes[0].display;
        };
    }

})();