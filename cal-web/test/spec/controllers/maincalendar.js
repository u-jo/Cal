'use strict';

describe('Controller: MaincalendarCtrl', function () {

  // load the controller's module
  beforeEach(module('calWebApp'));

  var MaincalendarCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MaincalendarCtrl = $controller('MaincalendarCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
