'use strict';

/**
 * @ngdoc overview
 * @name pooIhmExemplesApp
 * @description
 * # pooIhmExemplesApp
 *
 * Main module of the application.
 */
angular
  .module('pooIhmExemplesApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/create', {
        templateUrl: 'views/createProject.html',
        controller: 'CreateProjectCtrl'
      })
      .when('/all' , {
        templateUrl: 'views/allProject.html',
        controller: 'ProjectsCtrl'
      })
      .when('/select/:id', {
        templateUrl: 'views/selectProject.html',
        controller: 'ProjectCtrl'
      });
  });
