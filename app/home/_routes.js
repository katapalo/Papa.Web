(function () {
    angular
       .module("app.home")
       .config(["$stateProvider", "$locationProvider", function ($stateProvider) {
       
           $stateProvider
               .state("app.home", {
                      abstract: true,
                      url: "/home",
                      resolve: {
                                obj1: function() { return {'name':'yolanda'}; }
                      },
                      controller:"abstractCtrl as vm",
                      template: "<div ui-view></div>"
               })
               .state("app.home.index", {
               url: "",
               templateUrl: "app/home/homeIndex.html",
               resolve: {
                   Modelo: function(obj1) { 
                       var modelo = {};
                       modelo.obj1 = obj1;
                       modelo.obj2 = {'name':'mariano'};
                       return modelo
               }},
               controller: "homeIndexCtrl as vm",
               ncyBreadcrumb: { label: "Home" }
               })                          
           .state("app.home.tabla", {
               url: "/tabla",
               templateUrl: "app/home/tabla.html",
               resolve: {
               },
               controller: "demoController",
               ncyBreadcrumb: { label: "Home" }
           })
            .state("app.home.grid", {
                url: "/tabla",
                templateUrl: "app/home/grid.html",
                resolve: {
                },
                controller: "gridController",
                ncyBreadcrumb: { label: "grid" }
            })
       }]);
})();