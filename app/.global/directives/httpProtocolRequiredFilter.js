(function () {
    'use strict';

    angular.module('app')
        .filter('httpProtocolRequiredFilter', [httpProtocolRequiredFilter]);


    function httpProtocolRequiredFilter() {
        return function (link) {
            if (!link) return link;
            var result;
            var startingUrl = "http://";
            var httpsStartingUrl = "https://";
            if (link.startsWith(startingUrl) || link.startsWith(httpsStartingUrl)) {
                result = link;
            }
            else {
                result = startingUrl + link;
            }
            return result;
        }
    }

})();