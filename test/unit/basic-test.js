// Generated by CoffeeScript 1.3.1
(function() {
  var runTestWith;

  runTestWith = require('../common/basic-test-base').runTestWith;

  exports.wd = {
    'basic test': {
      chrome: runTestWith({}, {
        browserName: 'chrome'
      }),
      firefox: runTestWith({}, {
        browserName: 'firefox'
      })
    }
  };

}).call(this);
