# 예제 4-4  
## 2024120823 백도훈  

map 메서드에서 매개변수 순서 오류 


var newArr2 = [10, 20, 30].map(function(index, currentValue) {
  console.log(index, currentValue);  // 매개변수 순서가 잘못되어 출력도 이상함
  return currentValue + 5;  // undefined + 5 → NaN 발생
});
console.log(newArr2);  // 의도한 결과가 아님


// 실행결과 : 
// 10 0
// 20 1
// 30 2
// [5, 6, 7]  
