(function () {
    'use strict';

    var dunArray = [{ display: 'OT', value: 1 },
                    { display: 'OP', value: 2 },
                    { display: 'FC', value: 3 },
                    { display: 'CT', value: 4 },
                    { display: 'OP', value: 5 },
                    { display: 'GAF', value: 6 },
                    { display: 'PD', value: 7 },
                    { display: 'DI', value: 8 },
                    { display: 'BS', value: 9 },
                    { display: 'PDTE', value: 10 }];

    angular.module('app')
        .constant('dunArray', dunArray)
        .directive('dunOption', ['dunArray', dunOption])
        .filter('dunFilter', ['dunArray', dunFilter]);

    function dunOption(dunArr) {

        return {
            link: {
                pre: function (scope, iElement, iAttrs) {
                   
                    scope.dunArray = scope.dunArray || dunArr;
                    iAttrs.ngOptions = "dun.value as dun.display for dun in dunArray";
                }
            }
        }
    }

    function dunFilter(dunArr) {
        return function (input) {
            if (!input) return '';
            var dun = dunArr.filter(function (dun, ix) {
                return (dun.value === input);
            });
            if (!dun || dun.length === 0) return '';

            return dun[0].display;
        };
    }

})();