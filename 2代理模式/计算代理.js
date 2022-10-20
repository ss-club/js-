let mult = function () {
  console.log("开始计算乘积");
  var a = 1;
  for (var i = 0, l = arguments.length; i < l; i++) {
    a = a * arguments[i];
  }
  return a;
};

let proxyMult = (function () {
  let cache = {};
  return function () {
    let argus = Array.prototype.join.call(arguments, ",");
    if (cache[argus]) {
      return cache[argus];
    }
    return (cache[argus] = mult.apply(this, arguments));
  };
})();

proxyMult(1, 2, 3, 4);
proxyMult(1, 2, 3, 4);
