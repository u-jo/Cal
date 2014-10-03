'use strict';

describe('Service: authenticated', function () {

  // load the service's module
  beforeEach(module('calWebApp'));

  // instantiate service
  var authenticated;
  beforeEach(inject(function (_authenticated_) {
    authenticated = _authenticated_;
  }));

  it('should do something', function () {
    expect(!!authenticated).toBe(true);
  });

});
