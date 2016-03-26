(function() {
    'use strict';

    angular.module('myApp.navMenu', ['ngRoute'])

    .directive('navMenu', function() {
        return {
            restrict: 'E',
            templateUrl: 'directives/nav/nav-menu.partial.html',
            controller: NavMenuController,
            controllerAs: 'vm',
            bindToController: true
        };
    });

    function NavMenuController() {
        var vm = this;
    }

})();
