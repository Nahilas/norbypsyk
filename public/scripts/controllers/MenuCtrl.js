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
