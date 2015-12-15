var crudController = angular.module('crudController', ["firebase"]);

crudController.factory('crudItems', 
    ['$rootScope', '$firebaseArray','FIREBASE_URL',
    function($rootScope, $firebaseArray, FIREBASE_URL) {
        var ref = new Firebase(FIREBASE_URL + '/users/' + $rootScope.currentUser.$id + '/items');
        return $firebaseArray(ref);
    }
]);
crudController.controller('CreateItem', 
    ['$scope','$routeParams', 'crudItems',
    function($scope,$routeParams, crudItems) {

        $scope.messages = crudItems;
        $scope.whichItem = $routeParams.itemId;
        $scope.rec = $scope.messages.$getRecord($scope.whichItem); 

        $scope.addMessage = function() {
            // $add on a synchronized array is like Array.push() except it saves to the database!
            $scope.messages.$add({
                from: $scope.currentUser.firstname,
                content: $scope.message,
                title: $scope.title,
                timestamp: Firebase.ServerValue.TIMESTAMP
            });
            $scope.message = "";
        };//addMessage

        $scope.updateMessage = function(){
            var updateThisMessage = $scope.messages.$getRecord($scope.whichItem);

            updateThisMessage.title = $scope.title;
            updateThisMessage.content = $scope.content;
 
            $scope.messages.$save(updateThisMessage).then(function() {
                 console.log("Item updated!");
            });

        }//updateMessage

    }
]);
