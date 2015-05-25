/// <reference path="_references.d.ts"/>
var norbypsyk;
(function (norbypsyk_1) {
    var controllers = angular.module('norbypsykControllers', []);
    controllers.controller('forsideCtrl', norbypsyk_1.ForsideCtrl);
    var norbypsyk = angular.module('norbypsyk', ['ngAnimate', 'ngRoute', 'norbypsykControllers']);
    norbypsyk.controller('menuCtrl', norbypsyk_1.MenuCtrl);
    norbypsyk.controller('kontaktCtrl', norbypsyk_1.KontaktCtrl);
    norbypsyk.config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/', {
                templateUrl: 'partials/forside.html',
                controller: 'forsideCtrl'
            })
                .when('/kontakt', {
                templateUrl: 'partials/kontakt.html',
                controller: 'kontaktCtrl'
            });
        }]);
})(norbypsyk || (norbypsyk = {}));
