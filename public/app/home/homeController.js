/**
 * Created by mike on 5/16/16.
 */
/**
 * Created by mike on 9/8/15.
 */
(function () {
    "use-strict";

    var app = angular.module('mainSite');

    app.controller("HomeController", ["$rootScope", "$scope", "$http", function ($rootScope, $scope, $http) {
        $scope.title = "home controller";


        // GET ALL BLOG POSTS
        $http({
            method: 'GET',
            url: $rootScope.baseUrl + 'BlogPost'
        }).then(function successCallback(response) {
            $scope.blogPosts = response.data;
        }, function errorCallback(response) {
            console.error(response);
        });

    }]);
})();

