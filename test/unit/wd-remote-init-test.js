// Generated by CoffeeScript 1.3.1
(function() {
  var should, wd;

  wd = require('../../lib/main');

  should = require('should');

  exports.wd = {
    'remote init test': {
      "default": function(test) {
        var browser;
        browser = wd.remote();
        browser.options.host.should.equal('127.0.0.1');
        browser.options.port.should.equal(4444);
        browser.options.path.should.equal('/wd/hub/session');
        browser.basePath.should.equal('/wd/hub');
        should.not.exist(browser.username);
        should.not.exist(browser.accessKey);
        return test.done();
      },
      params: {
        'host, port': function(test) {
          var browser;
          browser = wd.remote('localhost', 8888);
          browser.options.host.should.equal('localhost');
          browser.options.port.should.equal(8888);
          browser.options.path.should.equal('/wd/hub/session');
          browser.basePath.should.equal('/wd/hub');
          should.not.exist(browser.username);
          should.not.exist(browser.accessKey);
          return test.done();
        },
        'host, port, username, accesskey': function(test) {
          var browser;
          browser = wd.remote('localhost', 8888, 'mickey', 'mouse');
          browser.options.host.should.equal('localhost');
          browser.options.port.should.equal(8888);
          browser.options.path.should.equal('/wd/hub/session');
          browser.basePath.should.equal('/wd/hub');
          browser.username.should.equal('mickey');
          browser.accessKey.should.equal('mouse');
          return test.done();
        }
      },
      options: {
        empty: function(test) {
          var browser;
          browser = wd.remote({});
          browser.options.host.should.equal('127.0.0.1');
          browser.options.port.should.equal(4444);
          browser.options.path.should.equal('/wd/hub/session');
          browser.basePath.should.equal('/wd/hub');
          should.not.exist(browser.username);
          should.not.exist(browser.accessKey);
          return test.done();
        },
        'host, port': function(test) {
          var browser;
          browser = wd.remote({
            host: 'localhost',
            port: 8888
          });
          browser.options.host.should.equal('localhost');
          browser.options.port.should.equal(8888);
          browser.options.path.should.equal('/wd/hub/session');
          browser.basePath.should.equal('/wd/hub');
          should.not.exist(browser.username);
          should.not.exist(browser.accessKey);
          return test.done();
        },
        'host, port, username, accesskey': function(test) {
          var browser;
          browser = wd.remote({
            host: 'localhost',
            port: 8888,
            username: 'mickey',
            accessKey: 'mouse'
          });
          browser.options.host.should.equal('localhost');
          browser.options.port.should.equal(8888);
          browser.options.path.should.equal('/wd/hub/session');
          browser.basePath.should.equal('/wd/hub');
          browser.username.should.equal('mickey');
          browser.accessKey.should.equal('mouse');
          return test.done();
        },
        'path': function(test) {
          var browser;
          browser = wd.remote({
            path: '/taiwan'
          });
          browser.options.host.should.equal('127.0.0.1');
          browser.options.port.should.equal(4444);
          browser.options.path.should.equal('/taiwan/session');
          browser.basePath.should.equal('/taiwan');
          should.not.exist(browser.username);
          should.not.exist(browser.accessKey);
          return test.done();
        },
        'host, port, path': function(test) {
          var browser;
          browser = wd.remote({
            host: 'localhost',
            port: 8888,
            path: '/'
          });
          browser.options.host.should.equal('localhost');
          browser.options.port.should.equal(8888);
          browser.options.path.should.equal('/session');
          browser.basePath.should.equal('/');
          should.not.exist(browser.username);
          should.not.exist(browser.accessKey);
          return test.done();
        },
        'host, port, username, accesskey, path': function(test) {
          var browser;
          browser = wd.remote({
            host: 'localhost',
            port: 8888,
            username: 'mickey',
            accessKey: 'mouse',
            path: '/asia/taiwan'
          });
          browser.options.host.should.equal('localhost');
          browser.options.port.should.equal(8888);
          browser.options.path.should.equal('/asia/taiwan/session');
          browser.basePath.should.equal('/asia/taiwan');
          browser.username.should.equal('mickey');
          browser.accessKey.should.equal('mouse');
          return test.done();
        }
      }
    }
  };

}).call(this);
