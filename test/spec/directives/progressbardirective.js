'use strict';

describe('Directive: ProgressBarDirective', function () {

  // load the directive's module
  beforeEach(module('angularprogressbarApp'));

  var element,
    scope,
    compile;

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    compile = $compile;
    scope.data = {
      currentNumber:1,
      totalNumber:10,
      tickInterval:3000,
      onTick:angular.noop,
      onComplete:angular.noop,
      onStarted: angular.noop
    };
    getCompiledElement();
  }));

  /*xit('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<-progress-bar-directive></-progress-bar-directive>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the ProgressBarDirective directive');
  }));
*/
  function getCompiledElement(){
    element = angular.element("<Progress-bar-Directive data='progressBarData'></Progress-bar-Directive>");
    element = compile(element)(scope);
    scope.$digest();
    return element;
  };



});
