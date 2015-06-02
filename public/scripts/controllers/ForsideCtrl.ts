/// <reference path="../typings/angularjs/angular"/>
/// <reference path="../interfaces/IForsideScope"/>

module norbypsyk {

	export class ForsideCtrl {

		public static $inject = [
			'$scope',
			'$timeout'
		];

		private _kompetencer:Kompetence[] = [
			new Kompetence("Legeterapi",
				"Leg er en naturlig udtryksform for børn og det er gennem leg at børn bearbejder deres følelser, lærer om verden og udvikler sig.",
				"legeterapi",
				false,
				"Legeterapien kan give barnet og den unge mulighed for at bearbejde det som fylder for dem, samtidig med at legeterapien giver barnet eller den unge mulighed for at opleve sig forstået på et dybere niveau, hvorved følelsesmæssige problemer gennemarbejdes og gøres nemmere at håndtere. Også unge kan profitere af et legeterapeutisk tilbud, da det udvider muligheden for at kommunikere på flere niveauer."),
			new Kompetence("Individuel terapi",
			"De individuelle samtaler kan omhandle et bredt spektrum af problemstillinger, så som personlig krise, angst eller stress.",
			"individuelterapi", false,
			"Jeg tilbyder individuel samtaleterapi med voksne og unge. Terapien tager udgangspunkt i den psykodynamiske metode, hvilket vil sige at vi tager udgangspunkt i det som fylder lige nu, men at der samtidig trækkes tråde til historik samt eventuelt uhensigtsmæssige handlemønstre og vaner. Jeg tilbyder behandling vedrørende et bredt spektrum af problemstillinger, så som personlig krise, angst, tilknytningsforstyrrelser, traumeproblematikker, stress, med mere."
			),
			new Kompetence("Supervision", "Supervision kan skabe en mulighed for fælles refleksion og øget forståelse.\n\n", "supervision", false,
			"Jeg tilbyder bl.a. supervision til forældre, plejeforældre samt forskellige faggrupper, der arbejder med børneområdet. Gennem supervisionen forsøger vi sammen at opnå øget forståelse for barnets og egne reaktioner. Dette kan give mere overskud til at håndtere det som er svært. Som forældre eller i arbejdet med børn er man ofte følelsesmæssigt involveret. Derfor kan man opleve situationer, hvor man har behov for rådgivning, støtte eller blot nye øjne på en svær situation."),
			new Kompetence("Undersøgelser", "Jeg laver både psykologiske undersøgelser af børn, samt forældrekompetenceundersøgelser, hvor både børn og voksne undersøges.", "undersoegelser", false,
			"I mine undersøgelser af børn og voksne laver jeg mine vurderinger på baggrund af flere undersøgelsesmetoder for at få en helhedsforståelse for individets eller den enkelte families særlige situation, samt for at skabe en så sikker og videnskabeligt underbygget vurdering som muligt. Jeg anvender således kognitiv og personlighedsmæssig testning, observation, samtaler og baggrundsmateriale i mine undersøgelser. Det tilpasses til det, der er behov for i den enkelte undersøgelse.")
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
			$scope.selectedKompetence = null;
			$scope.kompetenceClicked = (kompetence) => {

				$scope.selectedKompetence = kompetence;

			};

			this.showKompetencer($scope, $timeout);

		}


	}



}
