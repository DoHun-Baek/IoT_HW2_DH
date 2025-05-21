// 사물인터넷 HW2 2024120823 백도훈
// 예제 4-3  


var newArr = [10, 20, 30].map(function(currentValue, index) {
  console.log(currentValue, index);
  return currentValue + 5;
});
console.log(newArr);
