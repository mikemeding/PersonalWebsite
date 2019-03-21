/*
 ==========================================================================
 Written by: Michael Meding
 2016-12-12

 This file handles all the routes and route configuration for the links
 in the main navigation bar. It also handles the security configuration
 for the entire site.
 ==========================================================================
 */
(function () { // this is to protect global namespace
    "use-strict"; // for strict syntax checking

    // Setup module and bring in dependencies declared in index.html
    // var app = angular.module('psite', ['ui.router']);
    var app = angular.module('psite', []);

    // // Angular routing config
    // app.config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
    //     // if no route exists default to main page
    //     $urlRouterProvider.otherwise("home");
    //
    //     $stateProvider
    //     // PRIVATE ROUTING (all authentication must be true)
    //         .state("home", {
    //             url: "/home",
    //             templateUrl: "modules/home/homeView.html",
    //             controller: "HomeController",
    //             authenticate: true
    //         });
    //
    //     // Additional route states here
    //
    // }]);

    // app.run(function ($http, $window, $rootScope, $state) {
    app.run(function ($http, $window, $rootScope) {

        // function checkAuthentication() {
        //     //TODO: check that user is still authenticated here
        //     return true;
        // }

        // GET config params based on devel or production version from config.json
        $http({
            method: 'GET',
            url: 'config.json'
        }).then(function successCallback(response) {
            // init session variables
            $window.sessionStorage.globalBaseURL = response.data.globalBaseURL;
            $window.sessionStorage.APIKey = response.data.APIKey;
        }, function errorCallback(response) {
            console.error(response);
        });


        // // Authenticate page transitions
        // $rootScope.$on("$stateChangeStart", function (event, toState, toParams, fromState, fromParams) {
        //     // check authentication
        //     if (toState.authenticate && !checkAuthentication()) {
        //         // User isn’t authenticated
        //         console.log("invalid authentication");
        //         $state.transitionTo("login");
        //     }
        // });
        //
        // // Track current page for session restore
        // $rootScope.$on('$stateChangeSuccess',
        //     function (event, toState, toParams, fromState, fromParams) {
        //         $window.sessionStorage.globalCurrentState = toState.name;
        //     });
    });
})();
