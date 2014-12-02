angular.module('angular-canvas-piechart')
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise("/markup");

  $stateProvider
    .state('markup', {
      url: "/markup",
      templateUrl: "views/markup-template.html"
    })
    .state('controller', {
      url: "/controller",
      templateUrl: "views/controller-template.html"
    });
}])
