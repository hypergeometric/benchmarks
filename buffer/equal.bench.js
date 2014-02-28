var buffertools = require('buffertools');

var naive = {
  equal: function(a, b) {
    var len = a.length;
    if (len !== b.length) {
      return false;
    }
    for (var i = 0; i < len; i++) {
      if (a[i] !== b[i]) {
        return false;
      }
    }
    return true;
  }
};

var small = new Buffer(repeat('0', 1000));
var small2 = new Buffer(repeat('0', 1000));
var large = new Buffer(repeat('0', 1000000));
var large2 = new Buffer(repeat('0', 1000000));

suite('Buffer equal', function() {
  bench('naive-small', function () {
    naive.equal(small, small2);
  });

  bench('naive-large', function () {
    naive.equal(large, large2);
  });

  bench('buffertools-small', function () {
    buffertools.equals(small, small2);
  });

  bench('buffertoolse-large', function () {
    buffertools.equals(large, large2);
  });
});
