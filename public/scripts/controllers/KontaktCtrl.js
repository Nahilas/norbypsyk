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
