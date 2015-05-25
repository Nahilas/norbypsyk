var norbypsyk;
(function (norbypsyk) {
    var Kompetence = (function () {
        function Kompetence(navn, beskrivelse, ikon, animateNow) {
            this.navn = navn;
            this.beskrivelse = beskrivelse;
            this.ikon = ikon;
            this.animateNow = animateNow;
        }
        return Kompetence;
    })();
    norbypsyk.Kompetence = Kompetence;
})(norbypsyk || (norbypsyk = {}));
/// <reference path="../typings/angularjs/angular"/>
/// <reference path="../models/Kompetence"/>
/// <reference path="../typings/angularjs/angular"/>
/// <reference path="../interfaces/IForsideScope"/>
var norbypsyk;
(function (norbypsyk) {
    var ForsideCtrl = (function () {
        function ForsideCtrl($scope, $timeout) {
            this.$scope = $scope;
            this.$timeout = $timeout;
            this._kompetencer = [
                new norbypsyk.Kompetence("Legeterapi", "Leg er den vigtigste udtryksform for børn og det giver barnet mulighed for at opleve sig forstået på et dybere niveau", "legeterapi", false),
                new norbypsyk.Kompetence("Individuel terapi", "Leg er den vigtigste udtryksform for børn og det giver barnet mulighed for at opleve sig forstået på et dybere niveau", "individuelterapi", false),
                new norbypsyk.Kompetence("Supervision", "Leg er den vigtigste udtryksform for børn og det giver barnet mulighed for at opleve sig forstået på et dybere niveau", "supervision", false),
                new norbypsyk.Kompetence("Undersøgelser", "Leg er den vigtigste udtryksform for børn og det giver barnet mulighed for at opleve sig forstået på et dybere niveau", "undersoegelser", false)
            ];
            this.animationCount = 0;
            $scope.navn = "Cæcilie Nordby";
            $scope.title = "Psykolog";
            $scope.kompetencer = this._kompetencer;
            this.showKompetencer($scope, $timeout);
        }
        ForsideCtrl.prototype.showKompetencer = function ($scope, $timeout) {
            var _this = this;
            if (this.animationCount === $scope.kompetencer.length)
                return;
            $timeout(function () {
                $scope.kompetencer[_this.animationCount].animateNow = true;
                _this.animationCount++;
                _this.showKompetencer($scope, $timeout);
            }, 200);
        };
        ForsideCtrl.$inject = [
            '$scope',
            '$timeout'
        ];
        return ForsideCtrl;
    })();
    norbypsyk.ForsideCtrl = ForsideCtrl;
})(norbypsyk || (norbypsyk = {}));
var norbypsyk;
(function (norbypsyk) {
    var MenuItem = (function () {
        function MenuItem(navn, route, selected) {
            this.navn = navn;
            this.route = route;
            this.selected = selected;
        }
        return MenuItem;
    })();
    norbypsyk.MenuItem = MenuItem;
})(norbypsyk || (norbypsyk = {}));
/// <reference path="../typings/angularjs/angular"/>
/// <reference path="../models/MenuItem"/>
/// <reference path="../typings/angularjs/angular"/>
/// <reference path="../interfaces/IMenuScope"/>
var norbypsyk;
(function (norbypsyk) {
    var MenuCtrl = (function () {
        function MenuCtrl($scope, $location) {
            this.$scope = $scope;
            this.$location = $location;
            $scope.items = [
                {
                    navn: 'Forside',
                    route: '/',
                    selected: true
                },
                {
                    navn: 'Kontakt',
                    route: '/kontakt',
                    selected: false
                },
                {
                    navn: 'Priser',
                    route: '/priser',
                    selected: false
                },
                {
                    navn: 'CV',
                    route: '/cv',
                    selected: false
                }
            ];
            $scope.$on('$routeChangeSuccess', function (next, current) {
                var newPath = $location.path();
                for (var i in $scope.items) {
                    $scope.items[i].selected = $scope.items[i].route === newPath;
                }
            });
            $scope.itemClicked = function (item) {
                $location.path(item.route);
            };
        }
        MenuCtrl.$inject = [
            '$scope',
            '$location'
        ];
        return MenuCtrl;
    })();
    norbypsyk.MenuCtrl = MenuCtrl;
})(norbypsyk || (norbypsyk = {}));
/// <reference path="../typings/angularjs/angular"/>
/// <reference path="../typings/angularjs/angular"/>
/// <reference path="../interfaces/IKontaktScope"/>
var norbypsyk;
(function (norbypsyk) {
    var KontaktCtrl = (function () {
        function KontaktCtrl($scope) {
            this.$scope = $scope;
        }
        KontaktCtrl.$inject = [
            '$scope'
        ];
        return KontaktCtrl;
    })();
    norbypsyk.KontaktCtrl = KontaktCtrl;
})(norbypsyk || (norbypsyk = {}));
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
//# sourceMappingURL=_index.js.map