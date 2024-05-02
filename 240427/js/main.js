// var thumbnailData = goodData.imgsrc

//00.获取图片信息,将图片展示到页面上
(function () {
  //获取数据要展示的页面元素
  var oSmallImg = document.querySelector(
    ".content_inner .detail .detail_img .preview .smallArea img"
  );
  var oBigImg = document.querySelector(
    ".content_inner .detail .detail_img .preview .bigArea img"
  );
  var oListImg = document.querySelector(
    ".content_inner .detail .detail_img .img_scroll ul"
  );

  //获取要展示的数据
  var oImg = goodData.imgsrc;

  //遍历数据,展示在轮播图中
  oImg.forEach(function (item) {
    var newLi = document.createElement("li");
    var oImg = new Image();
    oImg.src = item.s;
    newLi.appendChild(oImg);

    oListImg.appendChild(newLi);
  });

  //将图片展示到页面中
  oSmallImg.src = oImg[0].m;
  oBigImg.src = oImg[0].b;
})();

//01. 导航栏路径展示
(function () {
  //获取数据要展示的页面元素元素
  var oContentNav = document.querySelector(".content_inner .content_nav span");
  //获取要展示的数据
  var oNavMsg = goodData.path;

  var str = ``;
  oNavMsg.forEach(function (item, index) {
    var omsg = item.title;
    var ourl = item.url;

    //判断如果是最后一个就不拼接/
    if (index === oNavMsg.length - 1) {
      str += `
      <a>${omsg}</a>
      `;
    } else {
      str += `
      <a href="${ourl}">${omsg}</a>&nbsp; / &nbsp
      `;
    }

    oContentNav.innerHTML = str;
  });
})();

//02. 放大镜效果
(function () {
  //获取数据要展示的页面元素
  var oBigArea = document.querySelector(
    ".content_inner .detail .detail_img .preview .bigArea"
  );
  var oBigImg = document.querySelector(
    ".content_inner .detail .detail_img .preview .bigArea img"
  );
  var oMask = document.querySelector(
    ".content_inner .detail .detail_img .preview .mask"
  );
  var oTarget = document.querySelector(
    ".content_inner .detail .detail_img .preview .target"
  );

  //给遮罩层绑定移动事件
  //移动事件触发频率太高,需要写节流

  oTarget.onmousemove = my.throttle(turnBigMove, 1000 / 60);
  oTarget.onmouseleave = function () {
    oBigArea.style.display = "none";
    oMask.style.display = "none";
  };

  //放大镜鼠标移动跟随事件
  function turnBigMove(e) {
    oBigArea.style.display = "block";
    oMask.style.display = "block";
    //计算mask的位置
    var maskPosition = {
      x: e.offsetX - oMask.offsetWidth / 2,
      y: e.offsetY - oMask.offsetHeight / 2,
    };

    //临界值判断
    if (maskPosition.x <= 0) {
      maskPosition.x = 0;
    } else if (maskPosition.x >= oTarget.clientWidth - oMask.offsetWidth) {
      maskPosition.x = oTarget.clientWidth - oMask.offsetWidth;
    }
    if (maskPosition.y <= 0) {
      maskPosition.y = 0;
    } else if (maskPosition.y >= oTarget.clientHeight - oMask.offsetHeight) {
      maskPosition.y = oTarget.clientHeight - oMask.offsetHeight;
    }

    //赋值,控制mask移动
    oMask.style.left = maskPosition.x + "px";
    oMask.style.top = maskPosition.y + "px";

    //大图的移动
    //移动比例
    var scale =
      (oTarget.clientWidth - oMask.offsetWidth) /
      (oBigImg.clientWidth - oBigArea.offsetWidth);
    //图片移动
    var bigImgMove = {
      x: -maskPosition.x / scale,
      y: -maskPosition.y / scale,
    };

    oBigImg.style.left = bigImgMove.x + "px";
    oBigImg.style.top = bigImgMove.y + "px";
  }
})();

//03. 轮播图效果
(function () {
  //获取数据要展示的页面元素
  var oList = document.querySelector(
    ".content_inner .detail .detail_img .img_scroll ul"
  );
  var oListLi = document.querySelectorAll(
    ".content_inner .detail .detail_img .img_scroll ul li"
  );
  var oLeft = document.querySelector(
    ".content_inner .detail .detail_img .img_scroll p:nth-child(1)"
  );
  var oRight = document.querySelector(
    ".content_inner .detail .detail_img .img_scroll p:nth-child(2)"
  );

  //ul的位置
  var ulPosition = 0;
  //每次点击移动两张图片
  var everyNum = 2;
  //每次移动的距离
  var everyStep = everyNum * oListLi[0].offsetWidth;
  //绑定点击事件
  oRight.onclick = function () {
    ulPosition -= everyStep;

    var canMove = (oListLi.length - 5) * oListLi[0].offsetWidth;
    //临界值判断
    if (ulPosition <= -canMove) {
      ulPosition = -canMove;
    }

    oList.style.transform = "translateX(" + ulPosition + "px)";
  };
  oLeft.onclick = function () {
    ulPosition += everyStep;

    var canMove = (oListLi.length - 5) * oListLi[0].offsetWidth;
    //临界值判断
    if (ulPosition >= 0) {
      ulPosition = 0;
    }

    oList.style.transform = "translateX(" + ulPosition + "px)";
  };
})();

//04. 轮播图点击切换效果
(function () {
  //获取数据要展示的页面元素
  var oListLi = document.querySelectorAll(
    ".content_inner .detail .detail_img .img_scroll ul li"
  );
  var oBigImg = document.querySelector(
    ".content_inner .detail .detail_img .preview .bigArea img"
  );
  var oSmallImg = document.querySelector(
    ".content_inner .detail .detail_img .preview .smallArea img"
  );

  //获取要展示的数据
  var oImg = goodData.imgsrc;

  //遍历li元素,给每一个li绑定点击事件
  oListLi.forEach(function (item, index) {
    item.onclick = function () {
      oSmallImg.src = oImg[index].m;
      oBigImg.src = oImg[index].b;
    };
  });
})();

//05. 手机详情展示
(function () {
  //获取数据要展示的页面元素
  var oDetailTop = document.querySelector(
    ".content_inner .detail .detail_msg_top"
  );

  //获取要展示的数据
  var oDetailMsg = goodData.goodsDetail;

  var str = `
  <h3>${oDetailMsg.title}</h3>
                <p class="tuiJian">
                ${oDetailMsg.recommend}
                </p>
                <div class="price">
                  <div class="price_detail">
                    <p>价&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格</p>
                    <p><span>￥<em>${oDetailMsg.price}</em>元</span></p>
                  </div>
                  <div class="price_buy">
                    <p>促&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;销</p>
                    <p>
                      <span>${oDetailMsg.promoteSales.type}</span
                      >${oDetailMsg.promoteSales.content}
                    </p>
                  </div>
                </div>
                <div class="support">
                  <p>支&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;持</p>
                  <p>${oDetailMsg.support}</p>
                </div>
                <div class="peiSong">
                  <p>配&nbsp;送&nbsp;至</p>
                  <p>${oDetailMsg.address}</p>
                </div>
  `;
  oDetailTop.innerHTML = str;
})();

//06. 手机配置展示
(function () {
  //获取要展示数据的页面元素
  var oDetailBtm = document.querySelector(
    ".content_inner .detail .detail_msg_btm"
  );

  //获取要展示的数据
  var detialMsg = goodData.goodsDetail.crumbData;

  //遍历数据,每个数据都生成对应标签,并放到页面上
  detialMsg.forEach(function (item) {
    //创建一个dl
    var newDl = document.createElement("dl");
    //创建一个dt
    var newDt = document.createElement("dt");
    newDt.textContent = item.title;
    newDl.appendChild(newDt);
    //创建一个dd
    item.data.forEach(function (item) {
      var newDd = document.createElement("dd");
      newDd.textContent = item.type;
      newDl.appendChild(newDd);
    });
    oDetailBtm.appendChild(newDl);
  });
})();

//07. 配置选择后改变样式
(function () {
  //获取要展示的页面元素
  var oDls = document.querySelectorAll(
    ".content_inner .detail .detail_msg_btm dl"
  );
  var oShow = document.querySelector(".content_inner .detail .detial_msg_show");
  //遍历oDls,找每一个dl中的所有dd

  var contentArr = new Array(oDls.length);

  oDls.forEach(function (item, index) {
    //item为一个dl
    //找到dl中所有的dd
    var oDds = item.getElementsByTagName("dd");
    //给每一个dd绑定点击事件
    //因为oDds不是数组,不能用forEach方法,所以要转为数组
    Array.from(oDds).forEach(function (item) {
      //item为每一个dd
      item.onclick = function () {
        //先清除dd上的样式,再给点击的对象添加样式
        //要想清除所有dd上的样式,就要遍历所有的dd
        Array.from(oDds).forEach(function (item) {
          item.style.color = "#666";
        });
        this.style.color = "red";
        // var _this = this;
        //将dd中的内容,按照index的位置放入数组对应index的位置
        contentArr[index] = item.textContent;
        // console.log(contentArr);
        //每次点击清空oShow的内容,再重新赋值
        oShow.textContent = "";

        //遍历数组,将数组中的内容放入oShow中
        contentArr.forEach(function (item, index) {
          //生成新的div
          var newDiv = document.createElement("div");
          // console.log(newDiv);
          //生成新的span
          var newMsgSpan = document.createElement("span");
          //span中放入dd的内容
          newMsgSpan.textContent = item;
          //将span推入新生成的div中
          newDiv.appendChild(newMsgSpan);
          //生成新的a,用来放X
          var newDelete = document.createElement("a");
          newDelete.dataset.myIndex = index;
          newDelete.textContent = "X";
          //将X所在的a推入div中
          newDiv.appendChild(newDelete);

          //将新生成的div放入页面中
          oShow.appendChild(newDiv);
        });
      };
    });
  });

  //事件委托:将事件委托给父元素,可以给未来的元素绑定事件,也可以减少绑定事件的次数
  //给每个X绑定点击事件,删除div
  oShow.onclick = function (e) {
    //当事件触发对象是a标签时,才会删除
    if (e.target.nodeName !== "A") return;

    //删除数组内容
    delete contentArr[e.target.dataset.myIndex];
    //事件触发时,删除newDiv元素
    e.target.parentNode.remove();

    //删除样式
    //获取dl下的所有dd
    var allDd = oDls[e.target.dataset.myIndex].getElementsByTagName("dd");
    console.log(allDd);
    //遍历所有的dd,将每一个dd的color改变
    Array.from(allDd).forEach(function (item) {
      item.style.color = "#666";
    });
  };

  /* // var str = ``;
  contentArr.forEach(function (item) {
    str += `
<div class="msg">
            <span>${item}</span>
            <span>x</span>
          </div>
`;

    var newDiv = document.createElement("div");
    console.log(newDiv);
    var newMsgSpan = document.createElement("span");
    newMsgSpan.textContent = item;
    newDiv.appendChild(newMsgSpan);

    oShow.appendChild(newDiv);
  });
  // console.log(str); */
})();

//08. 添加购买数量
(function () {
  var oIpt = document.querySelector(
    ".content_inner .detail .addAndCar .add input"
  );
  var oJia = document.querySelector(
    ".content_inner .detail .addAndCar .add #jia"
  );
  var oJian = document.querySelector(
    ".content_inner .detail .addAndCar .add #jian"
  );

  //用户上一次输入的值
  var lastIptVal = 1;

  oJia.onclick = function () {
    lastIptVal++;
    oIpt.value = lastIptVal;
  };
  oJian.onclick = function () {
    lastIptVal--;

    //临界值判断
    if (lastIptVal <= 1) {
      lastIptVal = 1;
    }
    oIpt.value = lastIptVal;
  };

  //给input框绑定输入事件
  oIpt.oninput = function () {
    console.log(oIpt.value);
    console.log(lastIptVal);
    //拿到输入的值
    //判断输入的值是否是纯数字,不是纯数字则改为上一次输入的值
    userIptVal = parseInt(oIpt.value);

    //判断用户输入的value是否是数字,是则将parseInt(oIpt.value)赋给input的value,不是,则将上一次输入的值赋给input的value
    if (userIptVal) {
      oIpt.value = userIptVal;
      lastIptVal = userIptVal;
    } else {
      oIpt.value = lastIptVal;
    }
  };
})();

//选项卡构造函数
function Tab(titles, contents) {
  this.titles = titles;
  this.contents = contents;

  var _this = this;
  //遍历标题列表,给每个标题绑定点击事件
  titles.forEach(function (item, index) {
    item.onclick = function () {
      // console.log(555);
      //点击item,实现选项卡的切换
      //因为选项卡的结构切换较复杂,可以将函数放在外面写,这里只调用
      //因为想要让当前点击的对象是tabTurn的this,所以就需要将当前的this(item)传给tabTurn
      //给切换事件传入当前触发点击事件的元素(this),以及下标,用来切换对应的内容
      _this.tabTurn(this, index);
      // console.log(_this);
    };
  });
}
//选项卡切换函数
Tab.prototype.tabTurn = function (target, index) {
  var _this = this;
  this.titles.forEach(function (item, index) {
    item.classList.remove("choose");
    _this.contents[index].classList.remove("choose");
  });
  // console.log(target.classList);
  target.classList.add("choose");
  _this.contents[index].classList.add("choose");
};

//09. 选项卡切换
(function () {
  //获取所有的标题列表
  var oTitles = document.querySelectorAll(".recommend_inner .left .title  div");
  //获取所有的内容列表
  var oContents = document.querySelectorAll(
    ".recommend_inner .left .contents div"
  );
  // console.log(oTitles);
  // console.log(oContents);

  //实例化构造函数Tab,生成选项卡切换
  new Tab(oTitles, oContents);

  //获取所有的详情标题列表
  var oDetialTitles = document.querySelectorAll(
    ".recommend_inner .right .describes .goodsDes li"
  );
  //获取所有的详情内容列表
  var oDetialContents = document.querySelectorAll(
    ".recommend_inner .right .describes .content div"
  );

  new Tab(oDetialTitles, oDetialContents);
})();

//10. 侧边栏点击效果
(function () {
  //获取页面元素
  var oShowOuter = document.querySelector(".showOuter");
  var oShowClick = document.querySelector(".show .click");

  //给元素绑定点击事件
  //判断点击是要展开还是收回
  //默认是收回的
  var flag = false;
  //index用来标识点击的次数
  var index = 1;
  oShowClick.onclick = function () {
    index++;
    if (index % 2 === 0) {
      //展开
      flag = true;
    } else {
      flag = false;
    }

    if (flag) {
      oShowOuter.style.right = 0;
    } else {
      oShowOuter.style.right = "-294px";
    }
  };
})();

//11. 侧边栏小图标鼠标移入展示
(function () {
  //获取页面元素
  var oLis = document.querySelectorAll(".showOuter ul li");

  //给ul绑定鼠标移入事件
  //给每一个li绑定鼠标移入事件
  oLis.forEach(function (item) {
    item.onmouseenter = function (e) {
      // console.log(e.target);
      // console.log(e.target.children);
      // console.log(Array.from(e.target.children)[0]);
      Array.from(e.target.children)[0].style.left = "-62px";
    };
    item.onmouseleave = function (e) {
      Array.from(e.target.children)[0].style.left = "0px";
    };
  });
})();
