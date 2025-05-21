# 예제 5-3  
## 2024120823 백도훈  

클로저를 사용하여 외부 함수 변수의 상태를 유지하며 값 증가

var outer = function() {
  var a = 1;  // 외부 함수의 지역 변수
  var inner = function() {
    return ++a;  // a 값을 1씩 증가시켜 반환
  };
  return inner;  // inner 함수를 반환 (클로저)
};
var outer2 = outer();  // outer 실행 후 inner 함수 반환받음
console.log(outer2());  // 2 출력, a가 2로 증가
console.log(outer2());  // 3 출력, a가 3으로 증가
