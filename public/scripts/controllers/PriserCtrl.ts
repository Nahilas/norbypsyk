/// <reference path="../typings/angularjs/angular"/>
/// <reference path="../interfaces/IPriserScope"/>

module norbypsyk {

	export class PriserCtrl {

		public static $inject = [
			'$scope'
		];

		constructor(private $scope: IPriserScope) {
			
			$scope.ydelser = [
				{ 
					navn: 'Individuel terapi med børn, unge eller voksne',
					pris: '1000,- kr per session' 
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


	}



}
