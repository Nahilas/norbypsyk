/// <reference path="../typings/angularjs/angular"/>
/// <reference path="../interfaces/IForsideScope"/>

module norbypsyk {

	export class ForsideCtrl {

		public static $inject = [
			'$scope',
			'$timeout'
		];

		private _kompetencer:Kompetence[] = [
			new Kompetence("Legeterapi", "Leg er den vigtigste udtryksform for børn og det giver barnet mulighed for at opleve sig forstået på et dybere niveau", "legeterapi", false),
			new Kompetence("Individuel terapi", "Leg er den vigtigste udtryksform for børn og det giver barnet mulighed for at opleve sig forstået på et dybere niveau", "individuelterapi", false),
			new Kompetence("Supervision", "Leg er den vigtigste udtryksform for børn og det giver barnet mulighed for at opleve sig forstået på et dybere niveau", "supervision", false),
			new Kompetence("Undersøgelser", "Leg er den vigtigste udtryksform for børn og det giver barnet mulighed for at opleve sig forstået på et dybere niveau", "undersoegelser", false)
		];

		private animationCount:number = 0;

		showKompetencer($scope: IForsideScope, $timeout:any)
		{
			if(this.animationCount === $scope.kompetencer.length) return;

			$timeout(() => {

				$scope.kompetencer[this.animationCount].animateNow = true;
				this.animationCount++;

				this.showKompetencer($scope, $timeout);

			}, 200);
		}

		constructor(private $scope: IForsideScope, private $timeout: any) {

			$scope.navn = "Cæcilie Nordby";
			$scope.title = "Psykolog";
			$scope.kompetencer = this._kompetencer;


			this.showKompetencer($scope, $timeout);

		}


	}



}
