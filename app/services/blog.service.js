(function() {
    'use strict';

    angular
        .module('myApp')
        .factory('blogservice', blogService);

    function blogService($rootScope, $firebase, $firebaseArray, $location) {
        var FIREBASE_URL = new Firebase('https://angular-firebase-aut.firebaseio.com/');
        var ref = new Firebase(FIREBASE_URL + '/blog/');
        var blogobject = [];
        blogobject = $firebaseArray(ref);

        var allBlogPosts = [];

        var service = {
            creatBlog: creatBlog,
            updateBlog: updateBlog,
            getAllBlogPosts: getAllBlogPosts
        };

        return service;

        function creatBlog(blogTtitle, blogContent) {
            blogobject.$add({
                title: blogTtitle,
                text: blogContent,
                timestamp: Firebase.ServerValue.TIMESTAMP
            }).then(function(ref) {
                // var id = ref.key();
                // $location.path('/viewbudget/' + budgetsobj.$indexFor(id));
            });
        }

        function updateBlog(id, title, desc) {
            var udpdatedBlog = blogobject[id];
            udpdatedBlog.title = title;
            udpdatedBlog.text = desc;
            // Save updated blog back to firebase
            blogobject.$save(udpdatedBlog).then(function(ref) {
                // Do something
            });
        }


        function getAllBlogPosts() {
            // Download the data from a Firebase reference into a (pseudo read-only) array
            // all server changes are applied in realtime
            return allBlogPosts = $firebaseArray(ref);
        }

    }
})();
