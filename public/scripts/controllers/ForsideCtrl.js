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
