# 예제 4-5  
## 2024120823 백도훈  

Array.prototype.map 메서드 직접 구현  


Array.prototype.map = function(callback, thisArg) {
  var mappedArr = [];  // 새 배열 생성
  for (var i = 0; i < this.length; i++) {
    // callback 함수를 호출, thisArg가 있으면 그 값으로 this 지정
    var mappedValue = callback.call(thisArg || window, this[i], i, this);
    mappedArr[i] = mappedValue;  // 변환된 값을 새 배열에 저장
  }
  return mappedArr;  // 새 배열 반환
};
