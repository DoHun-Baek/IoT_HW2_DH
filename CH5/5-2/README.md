# 예제 5-2  
## 2024120823 백도훈  

함수 내부 변수 값을 증가시켜 반환

var outer = function() {
  var a = 1;  // 외부 함수의 지역 변수
  var inner = function() {
    return ++a;  // a를 1 증가시켜 반환
  };
  return inner();  // inner 함수 호출 결과 반환
};
var outer2 = outer();  // outer 함수 실행 결과를 변수에 저장
console.log(outer2);  // 2 출력
