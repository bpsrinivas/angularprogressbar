'use strict';

/**
 * @ngdoc directive
 * @name angularprogressbarApp.directive:ProgressBarDirective
 * @description
 * # ProgressBarDirective
 */
angular.module('angularprogressbarApp')
  .directive('progressBarDirective', function ($interval) {
    return {
      templateUrl: '../../views/ProgressBar.html',
      restrict: 'AEC',
      scope:{
        data:'='
      },
      link: function postLink(scope, element, attrs) {

        var promise ;

        scope.data = angular.extend({
          currentNumber:1,
          totalNumber:10,
          tickInterval:3000,
          onTick:angular.noop,
          onComplete:angular.noop,
          onStarted: angular.noop,
        },scope.data);

        scope.$watch(function(scope){
            return scope.data.currentNumber;
        },function(newVal, oldVal){
            scope.percentageCompletion = Math.floor((scope.data.currentNumber/scope.data.totalNumber) * 100);
            if(scope.percentageCompletion == 100){
              $interval.cancel(promise);
              scope.data.onComplete();
            }
        },true);

        scope.data.onStarted();
        promise = $interval(function(){
          scope.data.onTick(function(currentNumber){
            scope.data.currentNumber = currentNumber;
          });
        },scope.data.tickInterval);
      }
    };
  });
