/// <reference path="../typings/angularjs/angular"/>

module norbypsyk
{
	export interface IKontaktScope extends angular.IScope
	{
		email: string;
		besked: string;
		mailSendt: boolean;

		sendMail():void;
	}

}
