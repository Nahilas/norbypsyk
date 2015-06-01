/// <reference path="../typings/angularjs/angular"/>
/// <reference path="../interfaces/IMenuScope"/>

module norbypsyk {

	export class MenuCtrl {

		public static $inject = [
			'$scope',
			'$location'
		];


		constructor(private $scope: IMenuScope, private $location: angular.ILocationService) {
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

			$scope.$on('$routeChangeSuccess', function(next, current) {
				var newPath = $location.path();

				for(var i in $scope.items) { $scope.items[i].selected = $scope.items[i].route === newPath; }
			});

			$scope.itemClicked = (item) => {
				$location.path(item.route);
			};



		}


	}



}
