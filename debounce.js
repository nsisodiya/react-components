module.exports = function () {
  var timeOut;
  return function (callback, ms) {
    clearTimeout(timeOut);
    timeOut = setTimeout(callback, ms);
  }
};
