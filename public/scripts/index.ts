/// <reference path="_references.d.ts"/>

module norbypsyk {

	var controllers = angular.module('norbypsykControllers', []);

	controllers.controller('forsideCtrl', ForsideCtrl);
	controllers.controller('menuCtrl', MenuCtrl);
	controllers.controller('kontaktCtrl', KontaktCtrl);
	controllers.controller('priserCtrl', PriserCtrl);
	controllers.controller('cvCtrl', CVCtrl);

	var norbypsyk = angular.module('norbypsyk', ['ngAnimate', 'ngRoute', 'norbypsykControllers']);


	norbypsyk.config(['$routeProvider', ($routeProvider:angular.route.IRouteProvider) => {
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

}
