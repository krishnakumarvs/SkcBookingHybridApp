var appName = "skcApp";
var app = angular.module(appName, ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
        .when("/login", {
            templateUrl: "app/login/login.html",
            controller : "loginController"
        })
        .when("/dashboard", {
            templateUrl: "app/dashboard/dashboard.html",
            controller : "dashboardController"
        })
        .otherwise({ redirectTo: '/login' });
});