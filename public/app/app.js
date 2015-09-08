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

    //angular libraries
    var app = angular.module('mainSite', ["ui.router", "bootstrapLightbox", "ui.bootstrap"]);

    //routing configuration
    app.config(function myAppConfig($stateProvider, $urlRouterProvider) {
        // default route
        $urlRouterProvider.otherwise("home");
        // states
        $stateProvider
            .state("home", {
                url: "/home",
                templateUrl: "home/homeView.html",
                //controller: "HomeCtrl as vm"
            })
            .state("resume", {
                url: "/resume",
                templateUrl: "resume/resumeView.html",
                //controller: "HomeCtrl as vm"
            })
            .state("about", {
                url: "/about",
                templateUrl: "about/aboutView.html",
                //controller: "AboutCtrl as vm"
            });
    });



})();