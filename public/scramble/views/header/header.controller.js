(function(){
	'use strict';

	//Declaring sub module
	var moduleName = "header";

	// Use app's registerModule function to register a new module
	scramble.registerModule(moduleName);

	//Defining header controller
	angular
	.module(moduleName)
	.controller("HeaderController", ['$scope', '$rootScope', '$location', '$window', 
		function($scope, $rootScope, $location, $window) {
			
		}
		]);

})();