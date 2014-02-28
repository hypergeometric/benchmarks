/**
 * This file attaches globals for use in all test files.
 *
 * If not running `make test` ensure you call mocha with `-r test/setup.js`.
 */

/* Node modules */
var fs = require('fs');
var path = require('path');
/* Dependency modules */
var chai = require('chai');
var rmrf = require('rimraf');
/* Local modules */
/* Module variables */

var dataRoot = path.join(__dirname, '.data');

// Remove data directory before and after tests
before(function (done) {
  rmrf(dataRoot, function () {
    fs.mkdir(dataRoot, done);
  });
});
after(function (done) {
  rmrf(dataRoot, done);
});

function repeat(str, times) {
  return new Array(times + 1).join(str);
}

global.getDataPath = path.join.bind(null, dataRoot);
global.assert = chai.assert;
global.expect = chai.expect;
global.rmrf = rmrf;

global.repeat = repeat;

