(function () {
    'use strict';
    var partidaArray = [{ display: 'Sareb Proyectos', value: 1 },
                        { display: 'Sistemas Solvia', value: 2 },
                        { display: 'Solvia Infraestructura', value: 3 },
                        { display: 'Solvia Seguridad', value: 4 },
                        { display: 'Victory Program', value: 5 },
                        { display: 'PMO', value: 6 },
                        { display: 'Gestores Proyecto', value: 7 },
                        { display: 'BSIS', value: 8 }];
    var actividadArray = /*[{ display: 'Colabora', value: 1 },
                        { display: 'Medea', value: 2 },
                        { display: 'Alejandria', value: 3 },
                        { display: 'Reporting', value: 4 },
                        { display: 'Tesorería', value: 5 },
                        { display: 'Otros desarrollos', value: 6 }];*/
    [{ display: 'Colabora', value: 101, idPartida:1 },
                        { display: 'Medea', value: 102, idPartida: 1 },
                        { display: 'Alejandria', value: 103, idPartida: 1 },
                        { display: 'IOGs', value: 104, idPartida: 1 },
                        { display: 'Tesorería', value: 105, idPartida: 1 },
                        { display: 'SLA', value: 107, idPartida: 1 },
                        { display: 'Otros desarrollos', value: 106, idPartida: 1 },
                        { display: 'Evolutivos Mejoras', value: 201, idPartida: 2 },
                        { display: 'Mantenimiento', value: 202, idPartida: 2 },
                        { display: 'UAT Incidencias', value: 203, idPartida: 2 },
                        { display: 'Licencias', value: 301, idPartida: 3 },
                        { display: 'Infraestrucuta Centralizada', value: 302, idPartida: 3 },
                        { display: 'Puesto Usuarios', value: 303, idPartida: 3 },
                        { display: 'Otros', value: 304, idPartida: 3 },
                        { display: 'Seguridad', value: 401, idPartida: 4 },
                        { display: 'Jira', value: 501, idPartida: 5 },
                        { display: 'Calidad del dato', value: 502, idPartida: 5 },
                        { display: 'Puesto de trabajo', value: 503, idPartida: 5 },
                        { display: 'CRM', value: 504, idPartida: 5 },
                        { display: 'Movilidad', value: 505, idPartida: 5 },
                        { display: 'Alquileres', value: 506, idPartida: 5 },
                        { display: 'DWH', value: 507, idPartida: 5 },
                        { display: 'Gobierno IT', value: 508, idPartida: 5 },
                        { display: 'Solvia Price Index', value: 509, idPartida: 5 },
                        { display: 'Mapa to Be', value: 510, idPartida: 5 },
                        { display: 'Promoción', value: 511, idPartida: 5 },
                        { display: 'Suelos', value: 512, idPartida: 5 },
                        { display: 'BPM', value: 513, idPartida: 5 },
                        { display: 'Agencias y Franquicias', value: 514, idPartida: 5 },
                        { display: 'Gestión Documental', value: 515, idPartida: 5 },
                        { display: 'Quality', value: 517, idPartida: 5 },
                        { display: 'Arquitectura', value: 516, idPartida: 5 },
                        { display: 'PMO Sareb', value: 601, idPartida: 6 },
                        { display: 'PMO Solvia', value: 602, idPartida: 6 },
                        { display: 'PMO Victory', value: 603, idPartida: 6 },
                        { display: 'Gestión Proyectos SSII', value: 701, idPartida: 7 },
                        { display: 'Gestor Procesos', value: 702, idPartida: 7 },
                        { display: 'BSIS', value: 801, idPartida:8},
    {display: '', value: 0, idPartida:4}];//añado para evitar que se cuelge al seleccionar seguridad

    angular.module('app')
        .constant('partidaArray', partidaArray)
        .directive('partidaOption', ['partidaArray', partidaOption])
        .filter('partidaFilter', ['partidaArray', partidaFilter]);
    angular.module('app')
        .constant('actividadArray',actividadArray)
        .directive('actividadOption',['actividadArray',actividadOption])
        .filter('actividadFilter', ['actividadArray', actividadFilter]);

    function partidaOption(partidas) {

        return {
            link: {
                pre: function (scope, iElement, iAttrs) {
                    scope.partidaArray = scope.partidaArray || partidas;
                    iAttrs.ngOptions = "partida.value as partida.display for partida in partidaArray";
                }
            }
        }
    }

    function partidaFilter(partidas) {
        return function (input) {
            if (!input) return '';
            var partida = partidas.filter(function (partida, ix) {
                return (partida.value === input);
            });
            if (!partida || partida.length === 0) return '';

            return partida[0].display;
        };
    }
    
    function actividadOption(actividades) {
        return {
            link: {
                pre: function (scope, iElement, iAttrs) {
                    scope.actividadArray = scope.actividadArray || actividades;
                    iAttrs.ngOptions = "actividad.value as actividad.display for actividad in actividadArray | filter:{idPartida:vm.proyecto.partidaPre}";
                }
            }
        }
    }

    function actividadFilter(actividades) {
        return function (input) {
            if (!input) return '';
            var actividad = actividades.filter(function (actividad, ix) {
                return (actividad.value === input);
            });
            if (!actividad || actividad.length === 0) return '';

            return actividad[0].display;
        };
    }
})();