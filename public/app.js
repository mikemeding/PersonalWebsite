/**
 * ====================================================================
 * Michael Meding
 * mikemeding.com
 *
 * Personal Website
 * 2015-08-28
 *
 * app.js handles all application routing and main page control
 * ====================================================================
 */
(function () {
    "use-strict";

    var app = angular.module('mainSite', ["ui.router"]);
    app.controller('MainSiteController', ["$http", "$scope", MainSiteController])

    function MainSiteController($http, $scope) {

        $scope.title = "";
        $scope.stuff = [];

        function getPosts() {
            $scope.title = "";
            var request = {
                method: 'GET',
                url: 'http://localhost:3000/getAllPosts'
            };
            $http(request)
                .success(function (data) { // If call successful
                    $scope.stuff = data;
                })
                .error(function () { // If call fails
                    console.error("failed to get posts");
                });
        }

        getPosts(); // on page load

        $scope.addNewPost = function (title) {
            var request = {
                method: 'POST',
                url: 'http://localhost:3000/addPost',
                data: {
                    title: title
                }
            };
            $http(request)
                .success(function (data) { // If call successful
                    console.log("added some new data");
                    getPosts();
                })
                .error(function () { // If call fails
                    console.error("failed to add new item");
                });
        };

        $scope.removePost = function (post) {
            //console.log(post);
            var request = {
                method: 'POST',
                url: 'http://localhost:3000/removePost',
                data: {
                    post: post
                }
            };
            $http(request)
                .success(function (data) { // If call successful
                    console.log("removed data");
                    getPosts();
                })
                .error(function () { // If call fails
                    console.error("failed to remove item");
                });
        };

        /**
         * get the file list of the photos directory
         */
        $scope.fileList = [];
        $scope.getAllPhotos = function () {
            var request = {
                method: 'GET',
                url: 'http://localhost:3000/getListOfPhotos/'
            };

            $http(request)
                .success(function (data) { // If call successful
                    console.log(data);
                    $scope.fileList = data;

                })
                .error(function () { // If call fails
                    console.error("unable to get file list");
                });
        };

    }

})();