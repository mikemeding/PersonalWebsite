/**
 * Created by mike on 9/8/15.
 */

var app = angular.module('mainSite');
// main page controller
app.controller('MainSiteController', ["$http", "$scope", "Lightbox", MainSiteController])

function MainSiteController($http, $scope, Lightbox) {

    $(function () {
        angular.element('[data-toggle="tooltip"]').tooltip();
    });

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
     * get the file list of the img directory
     */
    $scope.fileList = [];
    $scope.getAllPhotos = function () {
        var request = {
            method: 'GET',
            url: 'http://localhost:3000/getListOfPhotos/'
        };

        $http(request)
            .success(function (data) { // If call successful

                // push each image into a specific format for lightbox
                angular.forEach(data, function (value, key) {
                    var url = "../img/" + value;
                    $scope.fileList.push({"url": url});
                });
                console.log($scope.fileList);

            })
            .error(function () { // If call fails
                console.error("unable to get file list");
            });
    };
    $scope.getAllPhotos();

    /**
     * open the lightbox modal when clicked on
     */
    $scope.openLightbox = function (index) {
        Lightbox.openModal($scope.fileList, index);
    };

}