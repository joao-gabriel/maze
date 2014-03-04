function createArray(length) {
  var arr = new Array(length || 0),
          i = length;

  if (arguments.length > 1) {
    var args = Array.prototype.slice.call(arguments, 1);
    while (i--)
      arr[length - 1 - i] = createArray.apply(this, args);
  }

  return arr;
}

var seed = 13;

function random(seed) {
  var x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
}