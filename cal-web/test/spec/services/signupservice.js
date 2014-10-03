'use strict';

describe('Service: signupService', function () {

  // load the service's module
  beforeEach(module('calWebApp'));

  // instantiate service
  var signupService;
  beforeEach(inject(function (_signupService_) {
    signupService = _signupService_;
  }));

  it('should do something', function () {
    expect(!!signupService).toBe(true);
  });

});
