/**
 * Created by mike on 2/27/15.
 */
(function () {
    "use strict";
    angular.module("psite")
        .controller("HomeController", ["$scope", "$http", "$log", "$window", HomeController]);

    function HomeController($scope, $http, $log, $window) {

        $log.debug("loaded HomeController");
        $scope.message = "template is working";

        // $('#.spy').scrollspy({ target: '#.spy' })


    }
}());