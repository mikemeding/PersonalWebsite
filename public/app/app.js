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
                templateUrl: "app/home/homeView.html"
                //controller: "HomeCtrl as vm"
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
            .state("hw2", {
                absolute: true,
                url: "/webSystems",
                templateUrl: "app/webSystems/webSystemsIndex.html"
                //controller: "AboutCtrl as vm"
            })
            .state("contact", {
                url: "/contact",
                templateUrl: "app/contact/contactView.html"
                //controller: "AboutCtrl as vm"
            });
    });


})();