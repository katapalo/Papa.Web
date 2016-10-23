(function () {
    'use strict';

    angular
        .module('app')
        .directive('uiGridLocalRowFilter', [uiGridLocalRowFilter]);

    function uiGridLocalRowFilter() {
        var directive = {
            require: '^uiGrid',
            scope: false,
            restrict: 'A',
            link: function ($scope, $elm, $attrs, uiGridCtrl) {
                var filterValue;
                $scope.$watch($attrs.uiGridLocalRowFilter, function (newValue, oldValue) {
                    filterValue = newValue;
                    uiGridCtrl.grid.refresh();
                });

                uiGridCtrl.grid.registerRowsProcessor(function (renderableRows, renderableColumns) {
                    if (filterValue) {
                        var matcher = new RegExp(filterValue.toString().toLowerCase());
                        renderableRows.forEach(function (row) {
                            var match = false;

                            renderableColumns.forEach(function (column) {
                                var cellValue = column.grid.getCellDisplayValue(row, column) || '';
                                if (cellValue.toString().toLowerCase().match(matcher)) {
                                    match = true;
                                }
                            });

                            if (!match) {
                                row.visible = false;
                            }
                        });
                    }

                    return renderableRows;
                }, 200);
            }
        };
        return directive;

    }
})();