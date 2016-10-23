(function () {
    'use strict';

    var direccionArray = [{ display: 'Desarrollo RRHH', value: 1 },
                        { display: 'RR.LL. y Administración', value: 2 },
                        { display: 'Compensación y Sistemas de Gestión RRHH', value: 3 },
                        { display: 'Organización y Control Interno', value: 4 },
                        { display: 'Cumplimiento Normativo', value: 5 },
                        { display: 'Económico Financiera', value: 6 },
                        { display: 'Control de Gestión y Seguim. Actividad', value: 7 },
                        { display: 'Red Comercializadores SOLVIA', value: 8 },
                        { display: 'Marketing y Comunicación', value: 9 },
                        { display: 'Oficina Directa Inmobiliaria', value: 10 },
                        { display: 'Planificación y Adecuación Comercial', value: 11 },
                        { display: 'Administración Inmuebles', value: 12 },
                        { display: 'On boarding y Mantenimiento de Activos', value: 13 },
                        { display: 'Administración Crédito', value: 14 },
                        { display: 'Tecnología y Procesos', value: 15 },
                        { display: 'Gestión de Alquileres', value: 16 },
                        { display: 'Gestión Judicial', value: 17 },
                        { display: 'Negocio Activos Financieros', value: 18 },
                        { display: 'Riesgos Activos Financieros', value: 19 },
                        { display: 'Producto', value: 20 },
                        { display: 'Producción', value: 21 },
                        { display: 'Servicing Gestión Urbanística', value: 22 },
                        { display: 'Expansión', value: 23 },
                        { display: 'Comercial Territorial Solvia Cataluña-Norte', value: 24 },
                        { display: 'Servicing', value: 25 },
                        { display: 'Desarrollo Corporativo', value: 26 },
                        { display: 'Análisis Estratégico e Inteligencia de Mercado', value: 27 },
                        { display: 'Comercial Territorial Solvia Centro', value: 28 },
                        { display: 'BancSabadell', value: 29 },
                        { display: 'PDTE', value: 30 }];

    angular.module('app')
        .constant('direccionArray', direccionArray)
        .directive('direccionOption', ['direccionArray', direccionOption])
        .filter('direccionFilter', ['direccionArray', direccionFilter]);

    function direccionOption(direccion) {

        return {
            link: {
                pre: function (scope, iElement, iAttrs) {
                    scope.direccionArray = scope.direccionArray || direccion;
                    iAttrs.ngOptions = "direccion.value as direccion.display for direccion in direccionArray";
                }
            }
        }
    }

    function direccionFilter(direccion) {
        return function (input) {
            if (!input) return '';
            var direc = direccion.filter(function (direc, ix) {
                return (direc.value === input);
            });
            if (!direc || direc.length === 0) return '';

            return direc[0].display;
        };
    }

})();