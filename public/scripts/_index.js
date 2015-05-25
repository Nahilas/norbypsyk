var norbypsyk;
(function (norbypsyk) {
    var Kompetence = (function () {
        function Kompetence(navn, beskrivelse, ikon, animateNow, langBeskrivelse) {
            this.navn = navn;
            this.beskrivelse = beskrivelse;
            this.ikon = ikon;
            this.animateNow = animateNow;
            this.langBeskrivelse = langBeskrivelse;
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
                new norbypsyk.Kompetence("Legeterapi", "Leg er en naturlig udtryksform for børn og det er gennem leg at børn bearbejder deres følelser, lærer om verden og udvikler sig.", "legeterapi", false, "Legeterapien kan give barnet og den unge mulighed for at bearbejde det som fylder for dem, samtidig med at legeterapien giver barnet eller den unge mulighed for at opleve sig forstået på et dybere niveau, hvorved følelsesmæssige problemer gennemarbejdes og gøres nemmere at håndtere. Også unge kan profitere af et legeterapeutisk tilbud, da det udvider muligheden for at kommunikere på flere niveauer."),
                new norbypsyk.Kompetence("Individuel terapi", "De individuelle samtaler kan omhandle et bredt spektrum af problemstillinger, så som personlig krise, angst eller stress.", "individuelterapi", false, "Jeg tilbyder individuel samtaleterapi med voksne og unge. Terapien tager udgangspunkt i den psykodynamiske metode, hvilket vil sige at vi tager udgangspunkt i det som fylder lige nu, men at der samtidig trækkes tråde til historik samt eventuelt uhensigtsmæssige handlemønstre og vaner. Jeg tilbyder behandling vedrørende et bredt spektrum af problemstillinger, så som personlig krise, angst, tilknytningsforstyrrelser, traumeproblematikker, stress, med mere."),
                new norbypsyk.Kompetence("Supervision", "Supervision kan skabe en mulighed for fælles refleksion og øget forståelse.", "supervision", false, "Jeg tilbyder bl.a. supervision til forældre, plejeforældre samt forskellige faggrupper, der arbejder med børneområdet. Gennem supervisionen forsøger vi sammen at opnå øget forståelse for barnets og egne reaktioner. Dette kan give mere overskud til at håndtere det som er svært. Som forældre eller i arbejdet med børn er man ofte følelsesmæssigt involveret. Derfor kan man opleve situationer, hvor man har behov for rådgivning, støtte eller blot nye øjne på en svær situation."),
                new norbypsyk.Kompetence("Undersøgelser", "Jeg laver både psykologiske undersøgelser af børn, samt forældrekompetenceundersøgelser, hvor både børn og voksne undersøges.", "undersoegelser", false, "I mine undersøgelser af børn og voksne laver jeg mine vurderinger på baggrund af flere undersøgelsesmetoder for at få en helhedsforståelse for individets eller den enkelte families særlige situation, samt for at skabe en så sikker og videnskabeligt underbygget vurdering som muligt. Jeg anvender således kognitiv og personlighedsmæssig testning, observation, samtaler og baggrundsmateriale i mine undersøgelser. Det tilpasses til det, der er behov for i den enkelte undersøgelse.")
            ];
            this.animationCount = 0;
            $scope.navn = "Cæcilie Nordby";
            $scope.title = "Psykolog";
            $scope.kompetencer = this._kompetencer;
            $scope.selectedKompetence = null;
            $scope.kompetenceClicked = function (kompetence) {
                $scope.selectedKompetence = kompetence;
            };
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
        function KontaktCtrl($scope, $http) {
            this.$scope = $scope;
            this.$http = $http;
            $scope.mailSendt = false;
            $scope.sendMail = function () {
                alert($scope.email);
                if (!$scope.email || !$scope.besked) {
                    return;
                }
                $http.post('mail/send', { email: $scope.email, besked: $scope.besked })
                    .success(function (data, status, headers, config) {
                    $scope.mailSendt = true;
                });
            };
        }
        KontaktCtrl.$inject = [
            '$scope',
            '$http'
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