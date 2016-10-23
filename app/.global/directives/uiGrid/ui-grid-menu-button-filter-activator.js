/* global define */
(function () {
    'use strict';
    angular.module('app')
        .run(['$templateCache', function ($templateCache) {
            $templateCache.put('ui-grid/ui-grid-menu-button',
                                "<div class=\"ui-grid-menu-button\">" +
                                    "<div ui-grid-menu-button-filter-activator ></div>" +
                                    "<div role=\"button\" ui-grid-one-bind-id-grid=\"'grid-menu'\" class=\"ui-grid-icon-container\" ng-click=\"toggleMenu()\" aria-haspopup=\"true\">" +
                                        "<div>Menú</div> " +
                                    "</div>" +
                                    "<div ui-grid-menu menu-items=\"menuItems\"></div>" +
                                "</div>"
                                );
            $templateCache.put('ui-grid/ui-grid-menu-button-filter-activator',
                        "<div role=\"button\"  class=\"ui-grid-icon-container\" ng-hide=\"grid.options.hideMenuButtonFilter\"  ng-click=\"toogleColumnFilters()\" >" +
                            '<div class="glyphicon glyphicon-filter"></div>' +
                        "</div>"
                    );
        }])
    .directive('uiGridMenuButtonFilterActivator', ['uiGridConstants', '$templateCache', function (uiGridConstants) {
        return {
            templateUrl: 'ui-grid/ui-grid-menu-button-filter-activator',
            require: '^uiGrid',
            replace: true,
            transclude: true,
            link: function ($scope, $elm, $attrs, uiGridCtrl) {
                var grid = uiGridCtrl.grid;
                $scope.toogleColumnFilters = function () {
                    grid.options.enableFiltering = !grid.options.enableFiltering;
                    grid.api.core.notifyDataChange(uiGridConstants.dataChange.COLUMN);
                }
            }
        };
    }]);

})();

