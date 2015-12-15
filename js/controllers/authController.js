 var authController = angular.module('authController', []);
 
 authController.controller('RegistrationController', ['$scope', 'Authentication',
 	function($scope, Authentication) {
 		$scope.register = function() {
 			Authentication.register($scope.user);
 		}; //register
 	}
 ]);

 authController.controller('LoginController', ['$scope','Authentication', 
 	function($scope, Authentication){
 		$scope.login = function() {
 			Authentication.login($scope.user);
 		}; //login
 	
 }]);

 authController.controller('LogoutController', ['$scope','Authentication', 
 	function($scope, Authentication){
 		$scope.logout = function() {
 			Authentication.logout();
 		}; //logout
 	
 }]);