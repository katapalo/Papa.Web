(function () {

    angular
        .module('app')
        .directive('minimalizaMenu', minimalizaMenu);


    /**
     * minimalizaSidebar - Directive for minimalize sidebar
     */
    function minimalizaMenu($rootScope) {
        return {
            restrict: 'EA',
            template: '<div class="header-link hide-menu" ng-click="minimalize()"><i class="fa fa-bars"></i></div>',
            controller: function ($scope, $element) {

                $scope.minimalize = function () {
                    if ($(window).width() < 320) {
                        $("body").toggleClass("show-sidebar");
                    } else {
                        $("body").toggleClass("hide-sidebar");
                    }
                }
            }
        };
    };


})();