/// <reference path="../typings/angularjs/angular"/>
/// <reference path="../models/MenuItem"/>

module norbypsyk
{
	export interface IMenuScope extends angular.IScope
	{
		items:MenuItem[];
		itemClicked(item:MenuItem):void;
	}

}
