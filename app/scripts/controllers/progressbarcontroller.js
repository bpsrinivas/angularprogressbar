'use strict';

/**
 * @ngdoc function
 * @name angularprogressbarApp.controller:ProgressbarcontrollerCtrl
 * @description
 * # ProgressbarcontrollerCtrl
 * Controller of the angularprogressbarApp
 */
angular.module('angularprogressbarApp')
  .controller('ProgressbarcontrollerCtrl', function ($scope) {
      $scope.progressBarData = {
        currentNumber:1,
        totalNumber:15,
        tickInterval:1000,
        onTick:function(cb){
          console.log('on Tick executed');
          this.currentNumber = this.currentNumber + 1;
          if(cb){
            cb(this.currentNumber);
          }
        },
        onStarted:function(){
          console.log('on started executed in the progressbar controller');
        },
        onComplete:function(){
          console.log('on complete of the directive called');
        }
      }
  });
