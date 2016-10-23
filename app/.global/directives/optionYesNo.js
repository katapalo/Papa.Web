(function () {
    'use strict';

    var yesNoArray = [{ n: 'SI', v: true }, { n: 'No', v: false }];

    angular.module('app')
        .constant('yesNoArray', yesNoArray)
        .directive('optionYesNo', ['yesNoArray', optionYesNo])
        .filter('yesNoFilter', ['yesNoArray', yesNoFilter]);
    
    function optionYesNo(yesNoArr) {
       
        return {
            link: {
                pre: function (scope, iElement, iAttrs) {
                    scope.yesNoArray = scope.yesNoArray || yesNoArr;
                    iAttrs.ngOptions = "o.v as o.n for o in yesNoArray";
                }
            }
        }

    }

    function yesNoFilter(yesNoArr) {
        return function (input) {
            if (!input) return '';
            var yesNo = yesNoArr.filter(function (yesNo, ix) {
                return (yesNo.value === input);
            });
            if (!yesNo || yesNo.length === 0) return '';

            return yesNo[0].display;
        };
    }

})();