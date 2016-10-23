(function () {
    "use strict";
    angular.module("app.api")
        .factory("servicio1", ["$resource", servicio1]);

    function servicio1($resource) {
        
        var Service = $resource("api/combo/:id/:slug",
                                { id: '@id', slug: '@slug' },
                                {
                                    update: { method: 'PUT' },
                                    prueba: {
                                        method: 'POST',
                                        isArray: false,
                                        params: {
                                            slug: 'prueba'
                                        }
                                    }
                                    // getProyectosAsignados: {
                                    //     method: 'GET',
                                    //     isArray: true,
                                    //     params: {
                                    //         slug: 'getProyectosAsignados'
                                    //     }
                                    // },                                    
                                    // eliminarProyecto: {
                                    //     method: 'GET',
                                    //     isArray: false,
                                    //     params: {
                                    //         slug: 'eliminarProyecto'
                                    //     }
                                    // },
                                    // getPeticionesByIdProyecto: {
                                    //     method: 'GET',
                                    //     isArray: true,
                                    //     params: {
                                    //         slug: 'GetPeticionesByIdProyecto'
                                    //     }
                                    // },                                    
                                    // projectMultiFilter: {
                                    //     method: 'POST',
                                    //     isArray: true,
                                    //     params: {
                                    //         slug: 'projectMultiFilter'
                                    //     }
                                    // },
                                });
        Service.create = function (options) {
            var defaults = {

            };
            options = angular.extend(defaults, options || {});
            return new Service(options);
        };
        return Service;
    }

})();