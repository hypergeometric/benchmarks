var buffertools = require('buffertools');

var naive = {
  reverse: function(buf) {
    var len = buf.length;
    var rbuf = new Buffer(len);
    for (var i = 0; i < len; i++) {
      rbuf[len - i - 1] = buf[i];
    }
    return rbuf;
  }
};

var inplace = {
  reverse: function(buf) {
    var head = 0, tail = buf.length - 1, t;
    while(head < tail) {
      t = buf[head];
      buf[head] = buf[tail];
      buf[tail] = t;
      tail--;
      head++;
    }
    return buf;
  }
};

var small = new Buffer(repeat('0', 1000));
var large = new Buffer(repeat('0', 1000000));

suite('Buffer reverse', function() {
  bench('naive-small', function () {
    naive.reverse(small);
  });

  bench('naive-large', function () {
    naive.reverse(large);
  });

  bench('inplace-small', function () {
    inplace.reverse(small);
  });

  bench('inplace-large', function () {
    inplace.reverse(large);
  });

  bench('buffertools-small', function () {
    buffertools.reverse(small);
  });

  bench('buffertoolse-large', function () {
    buffertools.reverse(large);
  });
});
