function make() {
  let sum = 0;

  let common = function common() {
    for (let i = 0; i < arguments.length; i++) {
      sum += parseInt(arguments[i]);
    }
    return common;
  };

  common.toString = function () {
    return sum;
  }

  for (let i = 0; i < arguments.length; i++) {
    sum += parseInt(arguments[i]);
  }

  return common;
};