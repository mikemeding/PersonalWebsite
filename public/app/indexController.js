/**
 * Created by mike on 9/8/15.
 */

var app = angular.module('mainSite');
// main page controller
app.controller('MainSiteController', ["$http", "$scope", MainSiteController])

function MainSiteController($http, $scope) {

    $(function () {
        angular.element('[data-toggle="tooltip"]').tooltip();
    });

    $scope.title = "";
    $scope.stuff = [];


}