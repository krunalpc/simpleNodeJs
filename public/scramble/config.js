(function(){

	'use strict';
	
	//Creating "HelloWorldController" controller -> normally create a separate files for controller
	angular
	.module(scramble.applicationModuleName)
	.config(MyAppFunction)

	function MyAppFunction($routeProvider){
		$routeProvider
		.when("/", {
			/*templateUrl : "/assignment/home/home.view.html" */
			redirectTo : "/home" 
		})
		.when("/home", {
			templateUrl : "/scramble/views/home/home.view.html" 
		})
		.otherwise({
			redirectTo : "/" 
		})
	};
})();