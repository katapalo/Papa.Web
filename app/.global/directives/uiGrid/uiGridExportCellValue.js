(function () {
    'use strict';

    angular
        .module('app')
        .directive('uiGridExportCellValue', [uiGridExportCellValues]);

    function uiGridExportCellValues() {
        var directive = {
            require: '^uiGrid',
            scope: false,
            restrict: 'A',
            link: function ($scope, $elm, $attrs, uiGridCtrl) {
                var grid = uiGridCtrl.grid;
                grid.options.exporterFieldCallback = function (grid, row, col, value) {

                    var result = grid.getCellDisplayValue(row, col) || '';
                    return result;
                }
            }
        };
        return directive;

    }
})();