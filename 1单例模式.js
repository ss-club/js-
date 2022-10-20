let Singleton = function (name) {
  this.name = name;
  this.instance = null;
};

Singleton.prototype.getName = function () {
  console.log(this.name);
};

Singleton.getInstance = function (name) {
  if (!this.instance) {
    this.instance = new Singleton(name);
  }
  return this.instance;
};

let a = Singleton.getInstance("one");
let b = Singleton.getInstance("two");

// console.log(a.getName());
console.log(a === b);
