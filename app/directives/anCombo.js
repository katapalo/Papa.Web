
(function () {
    'use strict';
    
    angular.module('app').directive('anCombo',['comboService',anCombo]);      
    
    function anCombo(comboService) {
       
        return {
            restrict: "E",
            replace: true,
            template: "<select class='form-control input-sm' ng-options='item.value as item.name for item in data'>",
            scope: {
                name:"@",
                id:"@",
                model:"="
            },
            link: {
                pre: function (scope, iElement, iAttrs) {
                    scope.data = comboService.query({id:scope.name});                                
                    console.log(scope.model);      
                                             
                }
            }
        }

    }    
})();