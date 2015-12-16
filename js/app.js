var myApp = angular.module('myApp', 
['ngRoute', 'firebase', 'artistControllers', 'authController', 'crudController'])
.constant('FIREBASE_URL', 'https://fix-lib.firebaseio.com/');

myApp.run(['$rootScope', '$location',
  function($rootScope, $location) {
    $rootScope.$on('$routeChangeError',
      function(event, next, previous, error) {
        if (error=='AUTH_REQUIRED') {
          $rootScope.message = 'Sorry, you must log-in to access that page';
          $location.path('/login');
        } // AUTH REQUIRED
      }); //event info
  }]); //run

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/list', {
    templateUrl: 'views/list.html',
    controller: 'ListController'
  }).
  when('/details/:itemId', {
    templateUrl: 'views/details.html',
    controller: 'DetailsController'
  }).
  when('/registration', {
    templateUrl: 'views/registration.html',
    cotroller: 'RegistrationController'
  }).
  when('/login', {
    templateUrl: 'views/login.html',
    controller: 'LoginController'
  }).
  when('/success', {
    templateUrl: 'views/success.html',
    resolve: {
      currentAuth: function(Authentication){
        return Authentication.requireAuth();
      }//currentAuth
    }//resolve
  }).
  when('/add', {
     templateUrl: 'views/add.html',
     controller: 'CreateItem',
     resolve: {
      currentAuth: function(Authentication){
        return Authentication.requireAuth();
      }//currentAuth
    }//resolve
  }).
  when('/view/:itemId', {
     templateUrl: 'views/view.html',
     controller: 'CreateItem',
     resolve: {
      currentAuth: function(Authentication){
        return Authentication.requireAuth();
      }//currentAuth
    }//resolve
  }).
  when('/update/:itemId', {
     templateUrl: 'views/update.html',
     controller: 'UpdateItem',
     resolve: {
      currentAuth: function(Authentication){
        return Authentication.requireAuth();
      }//currentAuth
    }//resolve
  }).
  otherwise({
    redirectTo: '/list'
  });
}]);