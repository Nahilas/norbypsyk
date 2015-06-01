/// <reference path="../typings/angularjs/angular"/>
/// <reference path="../models/CVKategori"/>

module norbypsyk
{
	export interface ICVScope extends angular.IScope
	{
		kategorier: CVKategori[]
	
	}

}
