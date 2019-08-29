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

//获取随机rgb格式的颜色
kits.randomRGBColor = function () {
  let r = kits.randomInt(0, 255);
  let g = kits.randomInt(0, 255);
  let b = kits.randomInt(0, 255);
  return 'rgb(' + r + ',' + g + ',' + b + ')';
}

// 获取随机十六进制颜色
kits.randomHexColor = function () {
  let arrNum = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += arrNum[kits.randomInt(0, 15)];
  }
  return color;
}



// 将一个数组(arr) 以指定的键(key) 存储到localStorage里面
kits.saveLocalDataArray = function (key, arr) {
  let jsonStr = JSON.stringify(arr)
  localStorage.setItem(key, jsonStr);
}



// 从localStorage里面根据指定的键(key) 获取一个数组
kits.getLocalDataArray = function (key) {
  let jsonStr = localStorage.getItem(key);
  let arr = JSON.parse(jsonStr);
  return arr || [];
}


// 向localStorage里面指定键(key) 的数组数据追加一个数据对象（ data）
kits.appendDataIntoArray = function (key, data) {
  let arr = this.getLocalDataArray(key);
  arr.push(data);
  kits.saveLocalDataArray(key, arr);
}

// 根据id修改localStorage里面的指定键(key) 的数组数据
kits.modifyLocalDataById = function (key, id, data) {
  let arr = this.getLocalDataArray(key);
  arr.forEach((e, i) => {
    if (e.id === id) {
      arr[i] = data;
    }
  });
  kits.saveLocalDataArray(key, arr);
}

// 根据对应的id从localStorage中指定键(key) 的数组中删除一条数据
kits.deleteLocalDataById = function (key, id) {
  let arr = this.getLocalDataArray(key);
  arr.forEach((e, i) => {
    if (e.id === id) {
      arr.splice(i, 1);
    }
  });
  kits.saveLocalDataArray(key, arr);
}