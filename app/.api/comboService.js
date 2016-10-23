/* global define */
;
(function () {
    "use strict";
    angular.module("app.api")
        .factory("comboService", ["API", "$resource", comboService]);

    function comboService(API, $resource) {        
        var Service = $resource("api/combo/:id/:slug",
            { id: '@id', slug: '@slug' },            
            {
                update: { method: 'PUT' }                
            });        
        return Service;
    }

})();