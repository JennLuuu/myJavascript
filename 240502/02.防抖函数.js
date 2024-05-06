/*
 * @Author: Jenn_Lu 1129694837@qq.com
 * @Date: 2024-05-02 21:52:26
 * @LastEditors: Jenn_Lu 1129694837@qq.com
 * @LastEditTime: 2024-05-02 21:52:44
 * @FilePath: \MyCode\My_JavaScript\20240502\02.防抖函数.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 *
 * @param {核心函数} center
 * @param {延时时长} time
 * @returns function
 */
function debounce(center, time) {
  var timer = null;

  return function () {
    var _this = this;
    clearTimeout(timer);
    timer = setTimeout(() => {
      center.call(_this);
    }, time);
  };
}

function debounce(center, time) {
  var timer = null;
  return function () {
    var _this = this;
    clearTimeout(timer);
    timer = setTimeout(function () {
      center.call(_this);
    }, time);
  };
}

function debounce(center, time) {
  var timer = null;
  return function () {
    var _this = this;
    clearTimeout(timer);
    timer = setTimeout(() => {
      center.call(_this);
    }, time);
  };
}

function debounce(center, time) {
  var timer = null;
  return function () {
    var _this = this;
    clearTimeout(timer);
    timer = setTimeout(() => {
      center.call(_this);
    }, time);
  };
}

function debounce(center, time) {
  var timer = null;
  return function () {
    var _this = this;
    clearTimeout(timer);
    timer = setTimeout(() => {
      center.call(_this);
    }, time);
  };
}
