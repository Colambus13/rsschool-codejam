function make() {
  let sum = 0;

  let fn = function fn() {
    for (let i = 0; i < arguments.length; i++) {
      sum += parseInt(arguments[i]);
    }
    return fn;
  };

  fn.toString = function () {
    return sum;
  }

  for (let i = 0; i < arguments.length; i++) {
    sum += parseInt(arguments[i]);
  }

  return fn;
};