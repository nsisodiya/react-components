/**
 * Created by narendrasisodiya on 11/03/16.
 */


module.exports = {
  clone(obj){
    return JSON.parse(JSON.stringify(obj));
  },
  iff(condition, trueRet, falseRet) {
    if (condition === true) {
      return trueRet;
    } else {
      return falseRet;
    }
  },
  if_(condition, trueRet, falseRet) {
    if (condition === true) {
      if (typeof trueRet === "function") {
        return trueRet();
      }
      return trueRet;
    } else {
      if (typeof falseRet === "function") {
        return falseRet();
      }
      return falseRet;
    }
  },
  mapObject(obj, cb) {
    var a = [];
    Object.keys(obj).map(function (key) {
      a.push(cb(obj[key], key));
    });
    return a;
  }
};
