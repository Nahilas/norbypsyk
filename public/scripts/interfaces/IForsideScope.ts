/// <reference path="../typings/angularjs/angular"/>
/// <reference path="../models/Kompetence"/>

module norbypsyk
{
	export interface IForsideScope extends angular.IScope
	{
		kompetencer:Kompetence[],
		navn: string,
		title: string,
		selectedKompetence: Kompetence,

		kompetenceClicked(kompetence:Kompetence):void
	}

}
