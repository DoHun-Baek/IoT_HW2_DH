// 사물인터넷 HW2 2024120823 백도훈
// 예제 4-7  


var obj = {
  vals: [1, 2, 3],
  logValues: function(v, i) {
    console.log(this, v, i);
  },
};
obj.logValues(1, 2);
[4, 5, 6].forEach(obj.logValues);
