# 예제 5-1  
## 2024120823 백도훈  

함수 내부에 정의된 변수를 클로저로 접근

var outer = function() {
  var a = 1;  // outer 함수 내부 변수
  var inner = function() {
    console.log(++a);  // outer 변수 a 값을 1 증가시켜 출력
  };
  inner();  // inner 함수 호출
};
outer();  // outer 함수 실행, 콘솔에 2 출력
