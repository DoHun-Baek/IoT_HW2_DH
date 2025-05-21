# 예제 4-3  
## 2024120823 백도훈  

map 메서드를 활용한 배열 요소 변환  


var newArr = [10, 20, 30].map(function(currentValue, index) {
  console.log(currentValue, index);  // 각 요소와 인덱스 출력
  return currentValue + 5;  // 각 요소에 5를 더한 값을 반환
});
console.log(newArr);  // 변환된 배열 출력


// 실행결과 : 
// 10 0
// 20 1
// 30 2
// [15, 25, 35]  
