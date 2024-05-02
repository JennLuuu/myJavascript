/*
  ●  求1-n之间所有数的和 
  ●  求n-m之间所有数的和 
  ●  圆的面积 
  ●  求2个数中的最大值 
  ●  求3个数中的最大值 
  ●  判断一个数是否是素数(又叫质数，只能被1和自身整数的数) 
  ●  求任意个数的最大值 
  ●  求任意个数的和 
*/

//●  求1-n之间所有数的和

function addToN(n) {
  for (var i = 1; i <= n; i++) {
    var sum = 0;
    sum += i;
  }
  return sum;
}

//●  求n-m之间所有数的和
/**
 * 
 * @param {*} n 
 * @param {*} m 
 * @returns 
 */
function addNToM(n, m) {
  //异常处理：当n>m时
  if (n > m) {
    throw new Error("输入有误");
  }

  //异常处理：当n=m时
  if (n === m) {
    return n;
  }

  //正常情况
  for (var i = n; i <= m; i++) {
    var sum = 0;
    sum += i;
  }
}

//●  圆的面积
function roundArea(r) {
  return 3.14 * r * r;
}

//●  求2个数中的最大值
/**
 * 
 * @param {*} a 
 * @param {*} b 
 * @returns 
 */
function betweenMax(a, b) {
  if (a > b) {
    return a;
  }
  if (a < b) {
    return b;
  }
}

//●  求3个数中的最大值
/**
 * 
 * @param {*} a 
 * @param {*} b 
 * @param {*} c 
 * @returns 
 */
function threeBetweenMax(a, b, c) {
    if (a > b) {
        if (a > c) {
            return a;
        }
        if (a < c) {
            return c;
        }
    }
    if (b > c) {
        if (b > a) {
            return b;
        }
        if (b < a) {
            return a;
        }
    }
    if (c > a) {
        if (c > b) {
            return c;
        }
        if (c < b) {
            return b;
        }
    }
}

//●  判断一个数是否是素数(又叫质数，只能被1和自身整数的数) 
function isZhiShu(num) {
    var flag = true;
    for (var i = 2 ; i < num ; i++ ){
        if(num % i === 0){
            flag = false;
            return num + "不是质数";
        }
    }
    if(flag){
        return num + "是质数";
    }
}

//●  求任意个数的最大值 
/* 
一上来假定一个最大值；
for遍历每一个数，每一次都与假定的最大值比较，小则跳过，大则重新赋值最大值
*/

//●  求任意个数的和 
function nSum() {
    var sum = 0;
    for (var i = 0 ; i < arguments.length ; i++ ){
        sum += arguments[i];
    }
    return sum;
}