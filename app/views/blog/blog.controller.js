(function() {
    'use strict';

    angular.module('myApp.blog', ['ngRoute', 'firebase'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/blog', {
            restrict: 'E',
            templateUrl: 'views/blog/blog.partial.html',
            controller: 'BlogController',
            controllerAs: 'vm',
            bindToController: true
        });
    }])

    .controller('BlogController', BlogController);

    BlogController.$inject = ['blogservice']

    function BlogController(blogservice) {

        var vm = this;
        // We get all blog post from blog service
        vm.getAllBlogPosts = blogservice.getAllBlogPosts();
        vm.createBlogPost = function(blogTtitle, blogContent) {
            blogservice.creatBlog(blogTtitle, blogContent);
            // Clear form inputs
            vm.blogTitle = "";
            vm.blogContent = "";
        }
        vm.updateBlog = function(id, title, desc) {
            blogservice.updateBlog(id, title, desc);
            $('#myModal').modal('hide');
            // Clear inputs 
            vm.updateTitle = "";
            vm.updateContent = "";
        }
    };


})();
