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
                new norbypsyk.Kompetence("Legeterapi", "Leg er en naturlig udtryksform for børn og det er gennem leg at børn bearbejder deres følelser, lærer om verden og udvikler sig.<br /><br />", "legeterapi", false, "Legeterapien kan give barnet mulighed for at bearbejde det som fylder for dem.<br/>Legeterapien giver samtidig mulighed for at opleve sig forstået på et dybere niveau, hvorved følelsesmæssige problemer gennemarbejdes og gøres nemmere at håndtere.<br />Også unge kan profitere af et legeterapeutisk tilbud, da det udvider muligheden for at kommunikere på flere niveauer."),
                new norbypsyk.Kompetence("Individuel terapi", "De individuelle samtaler kan omhandle et bredt spektrum af problemstillinger, så som personlig krise, angst eller stress.<br /><br />", "individuelterapi", false, "Jeg tilbyder individuel samtaleterapi med voksne og unge.<br />Terapien tager udgangspunkt i den psykodynamiske metode, hvilket vil sige at vi tager udgangspunkt i det som fylder lige nu, men at der samtidig trækkes tråde til historik samt eventuelt uhensigtsmæssige handlemønstre og vaner. <br />Jeg tilbyder behandling vedrørende et bredt spektrum af problemstillinger, så som personlig krise, angst, tilknytningsforstyrrelser, traumeproblematikker, stress, depression med mere."),
                new norbypsyk.Kompetence("Supervision", "Supervision kan skabe en mulighed for fælles refleksion og øget forståelse. <br /><br /><br /><br />", "supervision", false, "Jeg tilbyder bl.a. supervision til forældre, plejeforældre samt forskellige faggrupper, der arbejder med børneområdet. <br />Gennem supervisionen forsøger vi sammen at opnå øget forståelse for barnets og egne reaktioner. Dette kan give mere overskud til at håndtere det som er svært. Som forældre eller i arbejdet med børn er man ofte følelsesmæssigt involveret. Derfor kan man opleve situationer, hvor man har behov for rådgivning, støtte eller blot nye øjne på en svær situation."),
                new norbypsyk.Kompetence("Undersøgelser", "Jeg laver både psykologiske undersøgelser af børn og voksne samt forældrekompetenceundersøgelser, hvor både børn og voksne undersøges.", "undersoegelser", false, "I mine undersøgelser laver jeg vurderinger på baggrund af flere undersøgelsesmetoder og testredskaber med sigte på at skabe en helhedsforståelse af individets eller den enkelte families særlige situation. Yderligere er formålet at at skabe en så sikker og videnskabeligt underbygget vurdering som muligt. <br />Jeg anvender således kognitiv og personlighedsmæssig testning, observation, interviews og baggrundsmateriale i mine undersøgelser. <br />Undersøgelseshandlingen og rapportmateriale tilpasses altid det aktuelle behov.")
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
var norbypsyk;
(function (norbypsyk) {
    var Ydelse = (function () {
        function Ydelse(navn, pris) {
            this.navn = navn;
            this.pris = pris;
        }
        return Ydelse;
    })();
    norbypsyk.Ydelse = Ydelse;
})(norbypsyk || (norbypsyk = {}));
/// <reference path="../typings/angularjs/angular"/>
/// <reference path="../models/Ydelse.ts"/>
/// <reference path="../typings/angularjs/angular"/>
/// <reference path="../interfaces/IPriserScope"/>
var norbypsyk;
(function (norbypsyk) {
    var PriserCtrl = (function () {
        function PriserCtrl($scope) {
            this.$scope = $scope;
            $scope.ydelser = [
                {
                    navn: 'Individuel terapi med børn, unge eller voksne',
                    pris: '950,- kr per session'
                },
                {
                    navn: 'Supervision med forældre/plejeforældre',
                    pris: '1500,- kr per session'
                },
                {
                    navn: 'Supervision med større grupper',
                    pris: 'Pris efter aftale'
                },
                {
                    navn: 'Undersøgelser',
                    pris: 'Pris aftales i henhold til den enkelte opgaves art.'
                }
            ];
        }
        PriserCtrl.$inject = [
            '$scope'
        ];
        return PriserCtrl;
    })();
    norbypsyk.PriserCtrl = PriserCtrl;
})(norbypsyk || (norbypsyk = {}));
var norbypsyk;
(function (norbypsyk) {
    var CVElement = (function () {
        function CVElement(aarstal, navn, teacher) {
            this.aarstal = aarstal;
            this.navn = navn;
            this.teacher = teacher;
        }
        ;
        return CVElement;
    })();
    norbypsyk.CVElement = CVElement;
})(norbypsyk || (norbypsyk = {}));
/// <reference path="CVElement"/>
var norbypsyk;
(function (norbypsyk) {
    var CVKategori = (function () {
        function CVKategori(navn, elementer) {
            this.navn = navn;
            this.elementer = elementer;
        }
        return CVKategori;
    })();
    norbypsyk.CVKategori = CVKategori;
})(norbypsyk || (norbypsyk = {}));
/// <reference path="../typings/angularjs/angular"/>
/// <reference path="../models/CVKategori"/>
/// <reference path="../typings/angularjs/angular"/>
/// <reference path="../interfaces/ICVScope"/>
var norbypsyk;
(function (norbypsyk) {
    var CVCtrl = (function () {
        function CVCtrl($scope) {
            this.$scope = $scope;
            $scope.kategorier = [
                {
                    navn: 'CV',
                    elementer: [
                        { navn: "Egen praksis", aarstal: "2015 - i dag", teacher: null },
                        { navn: "Ansat i privat praksis", aarstal: "2013-2015", teacher: null },
                        { navn: "Ansat ved Pædagogisk Psykologisk Rådgivning", aarstal: "2011-2013", teacher: null }
                    ]
                },
                {
                    navn: 'Kurser',
                    elementer: [
                        { navn: "Kursus i Valg af interventionsformer", aarstal: "2015", teacher: "Ved psykolog Jørgen Nielsen" },
                        { navn: "Kursus i Lovgivning og Etik", aarstal: "2015", teacher: "Ved psykolog Svend Hjerrild og Bente Adolphsen" },
                        { navn: "Kursus i Anvendelse af Exners Rorschach System I", aarstal: "2014", teacher: "Ved psykolog Kim Gabriel Hansen" },
                        { navn: "Kursus i Metoder og begreber i psykodynamisk børne- og ungdomspsykoterapi", aarstal: "2013", teacher: "Ved psykolog Gudrun Bodin" },
                        { navn: "Kursus i Aspekter ved undersøgelse af forældrekompetence", aarstal: "2013", teacher: "Ved psykolog Kim Gabriel Hansen" },
                        { navn: "Kursus i forældreevneundersøgelser", aarstal: "2013", teacher: "Ved psykolog Anna Rosenbeck" },
                        { navn: "Kursus i legeterapi modul 1 og 2", aarstal: "2011 - 2012", teacher: "Ved psykolog Jytte Mielcke" },
                        { navn: "Kursus vedr. WISC-IV", aarstal: "2011", teacher: "Ved børneneuropsykolog Käte From" },
                        { navn: "Kursus i ressourceorienteret kropsterapi i børnehøjde", aarstal: "2011", teacher: "Ved fysio- og kropsterapeut Kit Nygaard Bak" },
                        { navn: "Kursus vedr. behandling af angst hos børn", aarstal: "2011", teacher: "Ved psykolog Mikael Thastum" }
                    ]
                },
                {
                    navn: 'Uddannelse',
                    elementer: [
                        { navn: "Autoriseret ved psykolognævnet", aarstal: "2013", teacher: null },
                        { navn: "Uddannet cand.psych. fra  Aalborg universitet", aarstal: "2010", teacher: null }
                    ]
                }
            ];
        }
        CVCtrl.$inject = [
            '$scope'
        ];
        return CVCtrl;
    })();
    norbypsyk.CVCtrl = CVCtrl;
})(norbypsyk || (norbypsyk = {}));
/// <reference path="_references.d.ts"/>
var norbypsyk;
(function (norbypsyk_1) {
    var controllers = angular.module('norbypsykControllers', []);
    controllers.controller('forsideCtrl', norbypsyk_1.ForsideCtrl);
    controllers.controller('menuCtrl', norbypsyk_1.MenuCtrl);
    controllers.controller('kontaktCtrl', norbypsyk_1.KontaktCtrl);
    controllers.controller('priserCtrl', norbypsyk_1.PriserCtrl);
    controllers.controller('cvCtrl', norbypsyk_1.CVCtrl);
    var norbypsyk = angular.module('norbypsyk', ['ngAnimate', 'ngRoute', 'ngSanitize', 'norbypsykControllers']);
    norbypsyk.config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/', {
                templateUrl: 'partials/forside.html',
                controller: 'forsideCtrl'
            })
                .when('/kontakt', {
                templateUrl: 'partials/kontakt.html',
                controller: 'kontaktCtrl'
            })
                .when('/priser', {
                templateUrl: 'partials/priser.html',
                controller: 'priserCtrl'
            })
                .when('/cv', {
                templateUrl: 'partials/cv.html',
                controller: 'cvCtrl'
            });
        }]);
})(norbypsyk || (norbypsyk = {}));
//# sourceMappingURL=_index.js.map