// // 1. 立即执行函数
// const CreateInstance = (function () {
//   let _instance = null;
//   return function (name) {
//     if (_instance) return _instance;
//     this.name = name;
//     _instance = this;
//   };
// })();
// const instance = new CreateInstance("x-1");
// const instance2 = new CreateInstance("x-2");
// console.log(instance === instance2); // true

// 2. 代理模式实现
const CreateInstance = function (name) {
  this.name = name;
};
const ProxyCreate = (function () {
  let _instance = null;
  return function (name) {
    if (_instance) return _instance;
    _instance = new CreateInstance(name);
    return _instance;
  };
})();
const instance = new ProxyCreate("x-1");
const instance2 = new ProxyCreate("x-2");
console.log(instance === instance2); // true

