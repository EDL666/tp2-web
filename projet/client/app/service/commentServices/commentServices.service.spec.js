'use strict';

describe('Service: commentServices', function () {

  // load the service's module
  beforeEach(module('fs3App'));

  // instantiate service
  var commentServices;
  beforeEach(inject(function (_commentServices_) {
    commentServices = _commentServices_;
  }));

  it('should do something', function () {
    expect(!!commentServices).toBe(true);
  });

});
