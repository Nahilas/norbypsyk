/// <reference path="../typings/angularjs/angular"/>
/// <reference path="../interfaces/ICVScope"/>

module norbypsyk {

	export class CVCtrl {

		public static $inject = [
			'$scope'
		];

		constructor(private $scope: ICVScope) {
			
			$scope.kategorier = [
				{
					navn: 'CV',
					elementer: [
						{ navn: "Egen praksis", aarstal: "2015 - i dag", teacher: null },
						{ navn: "Ansat ved Pædagogisk Psykologisk Rådgivning", aarstal: "2011-2013", teacher: null }		
					]
				},
				
				{
					navn: 'Kurser',
					elementer: [
						{ navn: "Kursus iValg af interventionsformer", aarstal: "2015", teacher: "Ved psykolog Jørgen Nielsen" },
						{ navn: "Kursus i Lovgivning og Etik", aarstal: "2015", teacher: "Ved psykolog Svend Hjerrild og Bente Adolphsen" },
						{ navn: "Kursus i Anvendelse af Exners Rorschach System I", aarstal: "2014", teacher: "Ved psykolog Kim Gabriel Hansen" },
						{ navn: "Kursus i Metoder og begreber i psykodynamisk børne- og ungdomspsykoterapi", aarstal: "2013", teacher: "Ved psykolog Gudrun Bodin" },
						{ navn: "Kursus i Aspekter ved undersøgelse af forældrekompetence", aarstal: "2013", teacher: "Ved psykolog Kim Gabriel Hansen" },
						{ navn: "Kursus i forældreevneundersøgelser", aarstal: "2013", teacher: "Ved psykolog Anna Rosenbeck" },
						{ navn: "Kursus i legeterapi modul 1 og 2", aarstal: "2011 - 2012", teacher: "Ved psykolog Jytte Mielcke" },
						{ navn: "Kursus vedr. WISC-IV", aarstal: "2011", teacher: "Ved børneneuropsykolog Käte From" },
						{ navn: "Kursus i ressourceorienteret kropsterapi i børnehøjde", aarstal: "2011", teacher: "Ved fysio- og kropsterapeut Kit Nygaard Bak" },
						{ navn: "Kursus vedr. behandling af angst hos børn", aarstal: "2011", teacher: "Ved psykolog Mikael Thastum" }
					]
				},
				{
					navn: 'Uddannelse',
					elementer: [
						{ navn: "Autoriseret ved psykolognævnet", aarstal: "2013", teacher: null },
						{ navn: "Uddannet cand.psych. fra  Aalborg universitet", aarstal: "2010", teacher: null }		
					]
				}
			];
			

		}
	}
}
