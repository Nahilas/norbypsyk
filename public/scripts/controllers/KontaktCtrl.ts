/// <reference path="../typings/angularjs/angular"/>
/// <reference path="../interfaces/IKontaktScope"/>

module norbypsyk {

	export class KontaktCtrl {

		public static $inject = [
			'$scope',
			'$http'
		];


		constructor(private $scope: IKontaktScope, private $http: angular.IHttpService) {

			$scope.mailSendt = false;

			$scope.sendMail = () => {
				if(!$scope.email || !$scope.besked) { return; }

				$http.post('mail/send', { email: $scope.email, besked: $scope.besked })
					.success((data, status, headers, config) => {
						$scope.mailSendt = true;
					});
			}
		}
	}
}
