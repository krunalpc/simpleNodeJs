(function(){

	'use strict';
	
	// Add a new vertical module
	var registerModule = function(moduleName, dependencies) {
		// Create angular module
		angular.module(moduleName, dependencies || []);

		// Add the module to the AngularJS configuration file
		angular.module(scramble.applicationModuleName).requires.push(moduleName);
	};

	//Defining our app configs, cann add some more attributes to it later on as we progress
	var scramble = {
		applicationModuleName: "Scramble",
		applicationModuleVendorDependencies: ['ngRoute'],//['ngResource', 'ngAnimate', 'ui.router', 'ui.bootstrap', 'ui.utils'],
		registerModule: registerModule
	};

	window.scramble = scramble;

	//Declaring our root module
	angular.module(scramble.applicationModuleName,scramble.applicationModuleVendorDependencies);

	// Setting HTML5 Location Mode - May be later, not now
	angular.module(scramble.applicationModuleName).config(['$locationProvider',
		function($locationProvider) {
			//console.log("hello, hash prefixed");
			//$locationProvider.hashPrefix('!');
		}
		]);

	angular.module(scramble.applicationModuleName).directive('keypressEvents',

		function ($document, $rootScope) {
			return {
				restrict: 'A',
				link: function () {
					$document.bind('keypress', function (e) {
						$rootScope.$broadcast('keypress', e, String.fromCharCode(e.which));
					});
				}
			}
		});

})();