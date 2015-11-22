(function(){
	'use strict';

	//Declaring sub module
	var moduleName = "home";

	// Use app's registerModule function to register a new module
	scramble.registerModule(moduleName);

	//Defining header controller
	angular
	.module(moduleName)
	.controller("HomeController", ['$scope', '$rootScope', '$location', '$window', 
		function($scope, $rootScope, $location, $window) {
			$scope.words = ["jumble", "frowzy", "pyjama", "jumped", "juking", "nozzle"];
			$scope.input = {};
			$scope.typed = "", $scope.remaining = "";

			String.prototype.shuffle = function () {
				var a = this.split(""),
				n = a.length;

				for(var i = n - 1; i > 0; i--) {
					var j = Math.floor(Math.random() * (i + 1));
					var tmp = a[i];
					a[i] = a[j];
					a[j] = tmp;
				}
				return a.join("");
			}

			$scope.scramble = function(word){
				return word.shuffle();
			}

			/**
 			 * Returns a random number between min (inclusive) and max (exclusive)
 			 */
 			 function getRandomNumber(min, max) {
 			 	return Math.random() * (max - min) + min;
 			 }

 			 $scope.initialize = function(){
 			 	$scope.error = $scope.success = "";
 			 	var random = Math.floor(getRandomNumber(0, $scope.words.length));
 			 	var randomWord = $scope.words[random];
 			 	$scope.word = randomWord;
 			 	$scope.scrambled = randomWord.shuffle();
 			 	$scope.typed = ""; $scope.remaining = $scope.scrambled;
 			 };

 			 $scope.initialize();

 			 $rootScope.$on('keypress', function (e, a, key) {
 			 	$scope.$apply(function () {
 			 		$scope.key = key;
 			 		if ($scope.remaining.indexOf(key) >= 0){
 			 			$scope.typed += key;
 			 			if ($scope.remaining){
 			 				$scope.remaining = $scope.remaining.replace(key, "");
 			 			}
 			 			if ($scope.remaining == "" ){
 			 				if ($scope.typed == $scope.word){
 			 					$scope.success = "Wuhooooooo, you did it...!!!";
 			 				} 
 			 				if ($scope.typed != $scope.word){
 			 					$scope.error = "oopsieeee, you missed it...";
 			 				}
 			 			}
 			 		}
 			 	});
 			 });
 			}
 			]);

})();