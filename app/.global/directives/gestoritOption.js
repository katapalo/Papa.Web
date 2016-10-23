(function () {
    'use strict';

    var gestoritArray = [
                        //{ display: 'Alicia Arenas', value: 1 },
                        { display: 'Ana Jordá', value: 2 },
                        { display: 'Gonzalo García', value: 3 },
                        { display: 'Iván Amat', value: 4 },
                        { display: 'Javier de Miguel', value: 5 },
                        { display: 'Jose Vicente Lafuente', value: 6 },
                        { display: 'Juanjo Rosario', value: 7 },
                        { display: 'Manuel Alonso', value: 8 },
                        { display: 'Mario Menor', value: 9 },
                        { display: 'Nacho de Miguel', value: 10 },
                        { display: 'Noemi Merino', value: 11 },
                        //{ display: 'Oscar Fernández', value: 12 },
                        { display: 'Paco Roch', value: 13 },
                        { display: 'Raúl Martínez', value: 14 },
                        { display: 'Ricardo Cao', value: 15 },
                        { display: 'Sergio García', value: 16 },
                        { display: 'Sergio Sanchís', value: 17 },
                        { display: 'Narciso Gonzalez', value: 20 }];

    angular.module('app')
        .constant('gestoritArray', gestoritArray)
        .directive('gestoritOption', ['gestoritArray', gestoritOption])
        .filter('gestoritFilter', ['gestoritArray', gestoritFilter]);

    function gestoritOption(gestoresit) {

        return {
            link: {
                pre: function (scope, iElement, iAttrs) {
                    scope.gestoritArray = scope.gestoritArray || gestoresit;
                    iAttrs.ngOptions = "gestorit.value as gestorit.display for gestorit in gestoritArray";
                }
            }
        }
    }

    function gestoritFilter(gestoresit) {
        return function (input) {
            if (!input) return '';
            var gestorit = gestoresit.filter(function (gestorit, ix) {
                return (gestorit.value === input);
            });
            if (!gestorit || gestorit.length === 0) return '';

            return gestorit[0].display;
        };
    }

})();