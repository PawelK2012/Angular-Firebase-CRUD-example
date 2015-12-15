//services (factory - method for creating services) are available accross all views(when we need it)
///$rootScope is available in any one of the controllers at any time
myApp.factory('Authentication', 
  ['$rootScope', '$firebaseAuth', '$firebaseObject', '$location', 'FIREBASE_URL',
  function($rootScope, $firebaseAuth, $firebaseObject, $location, FIREBASE_URL) {

    var ref = new Firebase(FIREBASE_URL);
    var auth = $firebaseAuth(ref);

    auth.$onAuth(function(authUser){
        if (authUser) {
          var userRef = new Firebase(FIREBASE_URL + 'users/' + authUser.uid);
          //$firebaseObject - a service  helping to retrive information from DB
          var userObj = $firebaseObject(userRef);
          //an adding userObject to $rootScope
          $rootScope.currentUser = userObj;
        }else{
          $rootScope.currentUser = '';
        };
    });
    //return object  
    var myObject = {
      //var user comes from login form - authController login() 
      //- authentication service by calling login()
      login: function(user) {
        console.log("login")
        auth.$authWithPassword({
          email: user.email,
          password: user.password
        }).then(function(regUser) {
          //location is angular service - a way of redirecting to another view
          $location.path('/success');
        }).catch(function(error) {
          $rootScope.message = error.message;
        });
      }, //login

      logout: function(){
        return auth.$unauth();
      },//logout

      requireAuth: function() {
      return auth.$requireAuth();
     }, //require Authentication

      register: function(user) {
          auth.$createUser({
            email: user.email,
            password: user.password
          }).then(function(regUser) {
            var regRef = new Firebase(FIREBASE_URL + 'users').child(regUser.uid).set({
              date: Firebase.ServerValue.TIMESTAMP,
              regUser: regUser.uid,
              firstname: user.firstname,
              lastname: user.lastname,
              age: user.age,
              email: user.email
            }); //user info
            myObject.login(user);
          }).catch(function(error) {
            $rootScope.message = $scope.message;
          });
        } //register
    }; //return
    return myObject;
  }
]);