'use strict';

describe('Service: PointFactory', function () {

  // load the service's module
  beforeEach(module('ktnAppApp'));

  // instantiate service
  var PointFactory;
  beforeEach(inject(function (_PointFactory_) {
    PointFactory = _PointFactory_;
  }));

  it('should do something', function () {
    expect(!!PointFactory).toBe(true);
  });

});
