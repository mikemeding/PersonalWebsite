/**
 * Created by mike on 9/8/15.
 */
(function () {
    "use-strict";

    var app = angular.module('mainSite');

    app.controller("ResumeController", ["$scope", "$anchorScroll", "$location", function ($scope, $anchorScroll, $location) {
        $scope.title = "controller works";
        $scope.scrollTo = function (elementId) {
            $location.hash(elementId);
            $anchorScroll();
        };
    }]);
})();
