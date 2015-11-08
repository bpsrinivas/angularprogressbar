'use strict';

describe('Controller: ProgressbarcontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('angularprogressbarApp'));

  var ProgressbarcontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProgressbarcontrollerCtrl = $controller('ProgressbarcontrollerCtrl', {
      $scope: scope
    });
  }));

  it('should set the progressBarData on the scope', function () {
    expect(scope.progressBarData).toBeDefined();
  });
});
