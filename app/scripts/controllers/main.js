'use strict';

/**
 * @ngdoc function
 * @name angularprogressbarApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularprogressbarApp
 */
angular.module('angularprogressbarApp')
  .controller('MainCtrl', function ($scope) {

    console.log('comes to main controller');

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
