//1售楼处与买房者的发布与订阅

// let salesOffices = {};
// salesOffices.clientList = [];
// salesOffices.listen = function (fn) {
//   this.clientList.push(fn);
// };

// salesOffices.trigger = function () {
//   for (let i = 0; i < this.clientList.length; i++) {
//     this.clientList[i].apply(this, arguments);
//   }
// };

// salesOffices.listen(function (price, squaremeter) {
//   console.log("price is ", price);
//   console.log("ming", squaremeter);
// });

// salesOffices.listen(function (price, squaremeter) {
//   console.log("price is ", price);
//   console.log("hong", squaremeter);
// });

// salesOffices.trigger(220, 80);

//1仅订阅特定key的消息

let salesOffices = {};
salesOffices.clientList = [];
salesOffices.listen = function (key, fn) {
  if (!this.clientList[key]) {
    this.clientList[key] = [];
  }
  this.clientList[key].push(fn);
};

salesOffices.trigger = function () {
  const key = Array.prototype.shift.call(arguments);
  fns = this.clientList[key];

  if (!fns || fns.length === 0) {
    return false;
  }

  for (let i = 0; i < fns.length; i++) {
    fns[i].apply(this, arguments);
  }
};

salesOffices.listen("squareMeter88", function (price) {
  // 小明订阅 88 平方米房子的消息
  console.log("小明想要的房子，价格= " + price); // 输出： 2000000
});
salesOffices.listen("squareMeter110", function (price) {
  // 小红订阅 110 平方米房子的消息
  console.log("小红想要的房子，价格= " + price); // 输出： 3000000
});

salesOffices.trigger("squareMeter88", 2000000); // 发布 88 平方米房子的价格
salesOffices.trigger("squareMeter110", 3000000); // 发布 110 平方米房子的价格
