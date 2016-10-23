(function () {
    'use strict';

    angular
        .module('app')
        .provider('datetimepicker', function () {
            var defaultOptions = {};

            this.setOptions = function (options) {
                defaultOptions = options;
            };

            this.$get = function () {
                return {
                    getOptions: function () {
                        return defaultOptions;
                    }
                };
            };
        })
        .directive('datetimepicker', ['$timeout', 'datetimepicker', '$templateCache', '$compile', function ($timeout, datetimepicker, $templateCache, $compile) {

            var defaultOptions = datetimepicker.getOptions();

            return {
                require: '?ngModel',
                restrict: 'AE',
                scope: {
                    datetimepickerOptions: '='
                },
                link: function ($scope, $element, $attrs, ngModelCtrl) {
                   
                    var options = angular.extend({}, defaultOptions, $scope.datetimepickerOptions);
                    var $target = $element;
                    if (!options.inline) {
                        $target = $element.parent();
                    }

                    $target
                      .on('dp.change', function (e) {
                          var newDate = e.date;
                          if (e.date === false) newDate = undefined;
                          if (ngModelCtrl) {
                              $timeout(function () {
                                  ngModelCtrl.$setViewValue(newDate);
                              });
                          }
                      })

                      .datetimepicker(options);

                    function setPickerValue() {
                        var date = options.defaultDate || null;

                        if (ngModelCtrl && ngModelCtrl.$modelValue) {
                            date = ngModelCtrl.$modelValue;
                        }

                        $target
                          .data('DateTimePicker')
                          .date(date);
                    }

                    if (ngModelCtrl) {
                        ngModelCtrl.$render = function () {
                            setPickerValue();
                        };
                    }

                    setPickerValue();
                }
            };
        }
        ]);
})();