(function () {
    'use strict';

    var petPartnerArray = [ 
                            { display: 'Better', value: 1 },
                            { display: 'BSIS', value: 2 },
                            { display: 'Egara', value: 3 },
                            { display: 'Everis', value: 4 },
                            { display: 'IZO', value: 5 },
                            { display: 'Mecemsa-plf', value: 6 },
                            { display: 'Mecemsa-proteo', value: 7 },
                            { display: 'SIA', value: 8 },
                            { display: 'Sistel', value: 9 },
                            { display: 'SolidQ', value: 10 },
                            { display: 'Solvia', value: 11 },
                            { display: 'Sopra', value: 12 },
                            { display: 'PDTE', value: 13 },
                            { display: 'AIS', value: 14 },
                            { display: 'GFT', value: 15 }];

    angular.module('app')
        .constant('petPartnerArray', petPartnerArray)
        .directive('petPartnerOptions', ['petPartnerArray', petPartnerOptions])
        .filter('petPartnerFilter', ['petPartnerArray', petPartnerFilter]);


    function petPartnerOptions(petPartner) {

        return {
            link: {
                pre: function (scope, iElement, iAttrs) {             
                    scope.petPartnerArray = scope.petPartnerArray || petPartner;
                    iAttrs.ngOptions = "petPartner.value as petPartner.display for petPartner in petPartnerArray";
                }
            }
        }
    }

    function petPartnerFilter(petPartner) {
        return function (input) {
            if (!input) return '';
            var partner = petPartner.filter(function (partner, ix) {
                return (partner.value === input);
            });
            if (!partner || partner.length === 0) return '';

            return partner[0].display;
        };
    }

})();