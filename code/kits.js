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

// 获取随机数
