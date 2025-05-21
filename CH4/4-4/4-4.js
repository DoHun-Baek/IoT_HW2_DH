// 사물인터넷 HW2 2024120823 백도훈
// 예제 4-4  


var newArr2 = [10, 20, 30].map(function(index, currentValue) {
  console.log(index, currentValue);
  return currentValue + 5;
});
console.log(newArr2);
