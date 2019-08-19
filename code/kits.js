// 创建对象
let kits = {};
// 补零方法
kits.appendZore = function (num) {
  return num < 10 ? '0' + num : num;
}
// 获得当前时间方法
kits.formatDate = function () {
  let date = new Date();
  let nowYear = date.getFullYear();
  let nowMonth = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
  let nowDay = date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate();
  let nowHours = date.getHours() < 10 ? '0' + (date.getHours()) : date.getHours();
  let nowMinutes = date.getMinutes() < 10 ? '0' + (date.getMinutes()) : date.getMinutes();
  let nowSeconds = date.getSeconds() < 10 ? '0' + (date.getSeconds()) : date.getSeconds();
  return nowYear + '-' + nowMonth + '-' + nowDay + ' ' + nowHours + ':' + nowMinutes + ':' + nowSeconds;
}
// 获取随机整数
kits.randomInt = function (n, m) {
  return Math.floor(Math.random() * (m - n + 1) + n);
}


// 获取ID
// 常见的获取id的方法是  时间戳 + 足够大的随机数
// 该方法返回一个不容易重复的id
kits.getID = function () {
  let date = new Date();
  // 得到从1970 .01 .01 到现在的毫秒总数
  let time = date.getTime();
  // 得到一个足够大的随机数
  let rand = this.randomInt(100000, 999999);
  // 把两个数字加起来作为id
  let id = time + rand + '';
  return id;
}

// 获取随机数