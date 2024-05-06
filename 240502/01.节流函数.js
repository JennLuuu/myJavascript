/**
 *
 * @param {核心函数} center
 * @param {节流时长} time
 * @returns function
 */
function throttle(center, time) {
  var lastTime = 0;

  return function () {
    var nowTime = Date.now();
    if (nowTime - lastTime < time) {
      return;
    }
    lastTime = nowTime;
    center.call(this);
  };
}

function throttle(center, time) {
  var lastTime = 0;
  return function () {
    var nowTime = Date.now();
    if (nowTime - lastTime < time) {
      return;
    }
    lastTime = nowTime;
    center.call(this);
  };
}

function throttle(center, time) {
  var lastTime = 0;
  return function () {
    var nowTime = Date.now();
    if (nowTime - lastTime < time) {
      return;
    }
    lastTime = nowTime;
    center.call(this);
  };
}

function throttle(center, time) {
  var lastTime = 0;
  return function () {
    var nowTime = Date.now();
    if (nowTime - lastTime < time) {
      return;
    }
    center.call(this);
  };
}

function throttle(center, time) {
  var lastTime = 0;
  return function () {
    var nowTime = Date.now();
    if (nowTime - lastTime < time) {
      return;
    }
    center.call(this);
  };
}
