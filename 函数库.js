/**
 * @method
 * @param {*} fn
 * @param {*} time
 * @returns function(){}
 * @description 节流函数,返回一个函数,this指向事件调用者,用来控制核心函数规定时间内的调用
 */
function throttle(fn, time) {
  //初始值上一次的执行时间为0
  var lastTime = 0;

  //返回节流函数的返回值,用来赋给想调用节流函数的那个人
  return function () {
    //看门狗,用来控制核心函数的执行情况
    var nowTime = Date.now();

    if (nowTime - lastTime < time) {
      return;
    }

    lastTime = nowTime;
    //调用核心代码
    //此时核心代码是默认调用,this指向的是window,想要将该this指向想要节流的人,就用call/apply调用且改变this指向
    fn.call(this);
  };
}

/**
 * @method
 * @param {*} fn
 * @param {*} time
 * @returns function(){}
 * @description 防抖函数,延迟核心代码执行时间,实现多次输入一次请求
 */
function debounce(fn, time) {
  //要想获取到上一次的定时器,定时器就得在回调函数外面定义
  var timer = null;
  return function () {
    //获取回调函数的this指向
    var _this = this;

    //清空上次定时器
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.call(_this);
    }, time);
  };
}
/**
 * @method 
 * @param {*} parent 
 * @param {*} newEl 
 * @description 在元素内部最前面插入节点
 */
function beforeChildInsert(parent,newEle){
  if (parent.firstElementChild) {
    parent.insertBefore(newEle,parent.firstElementChild);
  }else{
    parent.appendChild(newEle);
  }
}
/**
 * @method
 * @param {*} target 
 * @param {*} newEle 
 * @description 在某个元素后面插入一个节点
 */
function insertAfter(target,newEle) {
  if (target.nextElementSibling) {
    target.parentNode.insertBefore(newEle,target.nextElementSibling)
  }else{
    target.parentNode.appendChild(newEle)
  }
}
/**
 * @method
 * @param {*} ele 
 * @description 清除元素内部所有子元素
 */
function clearChildEle(ele) {
    while (ele.firstElementChild) {
      ele.firstElementChild.remove();
    }
}