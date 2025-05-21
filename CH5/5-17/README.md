# 예제 5-17
## 2024120823 백도훈


커링(currying) 기법을 이용해 함수의 인자를 부분적으로 적용하는 방법


var curry3 = function(func) {
  return function(a) {  // 첫 번째 인자 a를 받는 함수 반환
    return function(b) {  // 두 번째 인자 b를 받는 함수 반환
      return func(a, b);  // 원래 함수 func에 a와 b를 인자로 전달해 실행
    };
  };
};

var getMaxWith10 = curry3(Math.max)(10);
// Math.max 함수에 첫 번째 인자 10을 미리 고정시킨 함수 생성
console.log(getMaxWith10(8));  // 10과 8 중 큰 값을 출력
console.log(getMaxWith10(25)); // 10과 25 중 큰 값을 출력

var getMinWith10 = curry3(Math.min)(10);
// Math.min 함수에 첫 번째 인자 10을 미리 고정시킨 함수 생성
console.log(getMinWith10(8));   // 10과 8 중 작은 값을 출력
console.log(getMinWith10(25));  // 10과 25 중 작은 값을 출력

// 실행결과 :
// 10
// 25
// 8
// 10
