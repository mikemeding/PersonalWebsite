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
                templateUrl: "app/home/homeView.html",
                controller: "HomeController"
            })
            .state("resume", {
                url: "/resume",
                templateUrl: "app/resume/resumeView.html",
                controller: "ResumeController"
            })
            .state("about", {
                url: "/about",
                templateUrl: "app/about/aboutView.html"
                //controller: "AboutCtrl as vm"
            })
            .state("contact", {
                url: "/contact",
                templateUrl: "app/contact/contactView.html"
                //controller: "AboutCtrl as vm"
            })
            .state("cam", {
                url: "/cam",
                templateUrl: "app/cam/camView.html"
                //controller: "AboutCtrl as vm"
            });
    });

    app.run(function ($rootScope) {
        $rootScope.baseUrl = "http://localhost:8000/";
        //$rootScope.baseUrl = "http://www.mikemeding.com/API/";
    });


})();