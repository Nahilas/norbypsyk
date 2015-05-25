/// <reference path="_references.d.ts"/>

module norbypsyk {

	var controllers = angular.module('norbypsykControllers', []);

	controllers.controller('forsideCtrl', ForsideCtrl);

	var norbypsyk = angular.module('norbypsyk', ['ngAnimate', 'ngRoute', 'norbypsykControllers']);

	norbypsyk.controller('menuCtrl', MenuCtrl);
	norbypsyk.controller('kontaktCtrl', KontaktCtrl);


	norbypsyk.config(['$routeProvider', ($routeProvider:angular.route.IRouteProvider) => {

		$routeProvider.when('/', {

			templateUrl: 'partials/forside.html',
			controller: 'forsideCtrl'

		})
		.when('/kontakt', {

			templateUrl: 'partials/kontakt.html',
			controller: 'kontaktCtrl'

		});

	}]);

}
