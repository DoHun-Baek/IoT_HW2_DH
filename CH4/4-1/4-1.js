// 사물인터넷 HW2 2024120823 백도훈
// 예제 4-1  


var count = 0;
var timer = setInterval(function() {
  console.log(count);
  if (++count > 4) clearInterval(timer);
}, 300);
