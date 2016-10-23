(function () {
    'use strict';

    var solicitanteArray = [
                            { display: 'TP - Transformación y personas / Oficina de Transformación / DOMINGO REAL, JUAN', value: 11, group: 'TP' },
                            //{ display: 'OP - Organización y Personas / Desarrollo RRHH / MENENDEZ SIERRA, ANTONIO', value: 12, group: 'OP' },
                            //{ display: 'OP - Organización y Personas / RR.LL. y Administración / ESCUDERO MARTINEZ, CRISTINA', value: 13, group: 'OP' },
                            //{ display: 'OP - Organización y Personas / Compensación y Sistemas de gestión RRHH / FIGAROLA CERVERA, ANNA', value: 14, group: 'OP' },
                            { display: 'TP - Transformación y personas / Organización y Control Interno / DIAZ MARTINEZ PINNA, CRISTINA', value: 15, group: 'TP' },
                            { display: 'TP - Transformación y personas / Cumplimiento Normativo / NAVAJAS MARTINEZ, FRANCISCO', value: 16, group: 'TP' },
                            { display: 'TP - Transformación y personas / Seguridad Solvia / TRIGUEROS PACHECO, JOSE', value: 17, group: 'TP' },
                            { display: 'TP - Transformación y personas / Personas / --', value: 18, group: 'TP' },
                            { display: 'TP - Transformación y personas / Servicios generales/ ALMECIJA FURIO, JOSE FRANCISCO', value: 19, group: 'TP' },

                            //{ display: '---', value: 6 },
                            { display: 'FC - Financiera y Corporativa / Gestión Económica y Contable / VICENTE RUIZ, ANTONIO', value: 21, group: 'FC' },
                            { display: 'FC - Financiera y Corporativa / Control de Gestión y Seguim. de Actividad / IBARGUEN ALBENTOSA, SUSANA', value: 22, group: 'FC' },
                            //{ display: '---', value: 9 },
                           // { display: 'CM - Comercialización y Marketing / Red Comercializadores SOLVIA / MOYA, D.', value: 31, group: 'CT' },
                            { display: 'CM - Comercialización y Marketing / Marketing y Comunicación / MORA, L.', value: 32, group: 'CM' },
                            { display: 'CM - Comercialización y Marketing / Oficina Directa / GOMEZ, I.', value: 33, group: 'CM' },
                            { display: 'CM - Comercialización y Marketing / Planificación Comercial / BONO ESCRICHE, JESUS', value: 34, group: 'CM' },
                            { display: 'CM - Comercialización y Marketing / Retail & Prime/ LINARES, J.C.', value: 35, group: 'CM' },
                            { display: 'CM - Comercialización y Marketing / Solvia Sun/ --', value: 36, group: 'CM' },
                            { display: 'CM - Comercialización y Marketing / Corporate/ --', value: 37, group: 'CM' },
                            { display: 'CM - Comercialización y Marketing / Helpdesk- Solvia/ GARCIA, D.', value: 38, group: 'CM' },

                            //{ display: '---', value: 14 },
                            { display: 'IT - Servicios Inmobiliarios y Tecnología / Administración de Inmuebles / DÍAZ DE A., CARLOS', value: 41, group: 'IT' },
                            { display: 'IT - Servicios Inmobiliarios y Tecnología / Property Management & Cross Services / PEREZ ALVAREZ, VICTOR', value: 42, group: 'IT' },
                            { display: 'IT - Servicios Inmobiliarios y Tecnología / Administración de Créditos / CAMPOS PALERO, JESUS ENRIQUE', value: 43, group: 'IT' },
                            { display: 'IT - Servicios Inmobiliarios y Tecnología / Tecnología / HAFNER DE LA RODA, ÁLVARO', value: 44, group: 'IT' },
                            { display: 'IT - Servicios Inmobiliarios y Tecnología / Gestión de Alquileres / BAÑULS PARREÑO, JOSE LUIS', value: 45, group: 'IT' },
                            { display: 'IT - Servicios Inmobiliarios y Tecnología / Planificación Operaciones/ MIQUEL, DANIEL', value: 46, group: 'IT' },

                           // { display: '---', value: 20 },
                            { display: 'GAF - Red Territorial y Gestión de Activos Financieros / Gestión Judicial / UBIS  LUPION, GUADALUPE', value: 51, group: 'GAF' },
                            { display: 'GAF - Red Territorial y Gestión de Activos Financieros / Negocio de Activos Financieros / CORROCHANO HERNANDO, JOSE ANTONIO', value: 52, group: 'GAF' },
                            { display: 'GAF - Red Territorial y Gestión de Activos Financieros / Riesgos Activos Financieros / PUIGMITJA DE CASTRO, CARLOS', value: 53, group: 'GAF' },
                            //{ display: 'GAF - Gestión Activos Financieros / Dirección Territorial Levante / LÓPEZ SÁNCHEZ, ALFREDO', value: 54, group: 'GAF' },
                            { display: 'GAF - Red Territorial y Gestión de Activos Financieros / Territorial Solvia Cataluña - Noreste/ PUGLISI, H.', value: 55, group: 'GAF' },
                            { display: 'GAF - Red Territorial y Gestión de Activos Financieros / Coordinación Territorial/ VILCHES, G.', value: 56, group: 'GAF' },
                            { display: 'GAF - Red Territorial y Gestión de Activos Financieros / Territorial Solvia Madrid, Castilla y Noroeste/ ROMÁN, J.', value: 57, group: 'GAF' },
                            { display: 'GAF - Red Territorial y Gestión de Activos Financieros / Territorial Solvia Sur - Canarias/ BELTRÁN, M.', value: 58, group: 'GAF' },
                            { display: 'GAF - Red Territorial y Gestión de Activos Financieros / Territorial Solvia Este/ LÓPEZ SÁNCHEZ, ALFREDO', value: 59, group: 'GAF' },

                            //{ display: '---', value: 24 },
                            { display: 'PD - Solvia Promoción y Desarrollo / Producto / --', value: 61, group: 'PD' },
                            { display: 'PD - Solvia Promoción y Desarrollo / Producción / BORRAS BARBER, JAUME JOSEP', value: 62, group: 'PD' },
                            { display: 'PD - Solvia Promoción y Desarrollo / Servicing gestión urbanística / TAPIAS XIRAU, FRANCESC XAVIER', value: 63, group: 'PD' },
                           // { display: 'PD - Promoción y Desarrollos / Expansión / MONTE, A.', value: 64, group: 'PD' },
                            //{ display: 'PD - Promoción y Desarrollos / Comercial Territorial Solvia Cataluña-Norte / PUGLISI, HUGO', value: 65, group: 'PD' },
                            { display: 'PD - Solvia Promoción y Desarrollo / Coordinación / MOREU, S.', value: 66, group: 'PD' },
                            { display: 'PD - Solvia Promoción y Desarrollo / Innovación / GUANTER, A.', value: 67, group: 'PD' },
                            { display: 'PD - Solvia Promoción y Desarrollo / Comercialización / TRASSIERRA, J.', value: 68, group: 'PD' },
                            { display: 'PD - Solvia Promoción y Desarrollo / Nuevos proyectos/ --', value: 69, group: 'PD' },
                            { display: 'PD - Solvia Promoción y Desarrollo / Financiera/ --', value: 601, group: 'PD' },
                            { display: 'PD - Solvia Promoción y Desarrollo / Desarrollo Suelo Promoción/--', value: 602, group: 'PD' },

                            //{ display: '---', value: 30 },
                            { display: 'IS -  Inversiones y Servicing / Servicing / CEBRIÁN, L.', value: 71, group: 'IS' },
                            { display: 'IS -  Inversiones y Servicing / Desarrollo Corporativo / --', value: 72, group: 'IS' },
                            { display: 'IS -  Inversiones y Servicing / Análisis Estratégico e Inteligencia de Mercado / RODRIGUEZ CAÑAS, MARCOS', value: 73, group: 'IS' },
                            //{ display: 'DI - Desarrollo de Inversiones / Comercial Territorial Solvia Centro / ROMAN PALERO, JAVIER', value: 74, group: 'DI' },

                            //{ display: '---', value: 35 },
                            { display: 'BancSabadell', value: 9999, group: 'Otros' },
                            { display: 'Pendiente', value: 1000, group: 'Otros' }];

    angular.module('app')
        .constant('solicitanteArray', solicitanteArray)
        .directive('solicitanteOption', ['solicitanteArray', solicitanteOption])
        .filter('solicitanteFilter', ['solicitanteArray', solicitanteFilter]);

    function solicitanteOption(solicitantes) {

        return {
            link: {
                pre: function (scope, iElement, iAttrs) {
                    scope.solicitanteArray = scope.solicitanteArray || solicitantes;
                    iAttrs.ngOptions = "solicitante.value as solicitante.display group by solicitante.group for solicitante in solicitanteArray";
                }
            }
        }
    }

    function solicitanteFilter(solicitantes) {
        return function (input) {
            if (!input) return '';
            var solicitante = solicitantes.filter(function (solicitante, ix) {
                return (solicitante.value === input);
            });
            if (!solicitante || solicitante.length === 0) return '';

            return solicitante[0].display;
        };
    }

})();