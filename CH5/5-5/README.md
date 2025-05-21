# 예제 5-5
## 2024120823 백도훈

메모리 해제를 위한 클로저 사용법


var outer = (function() {
  var a = 1;
  var inner = function() {
    return ++a;  // a 값을 1씩 증가시키고 반환
  };
  return inner;  // inner 함수 반환 (클로저 생성)
})();
console.log(outer());  // 2
console.log(outer());  // 3
outer = null;          // outer 변수에 저장된 함수 참조 해제

(function() {
  var a = 0;
  var intervalId = null;
  var inner = function() {
    if (++a >= 10) {
      clearInterval(intervalId);  // 10회 실행 후 타이머 종료
      inner = null;               // inner 함수 참조 해제
    }
    console.log(a);
  };
  intervalId = setInterval(inner, 1000); // 1초 간격으로 inner 함수 실행
})();

(function() {
  var count = 0;
  var button = document.createElement('button');
  button.innerText = 'click';

  var clickHandler = function() {
    console.log(++count, 'times clicked');
    if (count >= 10) {
      button.removeEventListener('click', clickHandler); // 클릭 이벤트 해제
      clickHandler = null;  // 핸들러 함수 참조 해제
    }
  };
  button.addEventListener('click', clickHandler); // 클릭 이벤트 등록
  document.body.appendChild(button);
})();


/*
(1) outer 함수가 반환한 inner 함수가 outer 변수에 저장됨.
inner 함수가 호출될 때마다 a 값이 1씩 증가함.
마지막에 outer에 null을 할당해서 함수 참조를 끊음.

(2) setInterval로 1초마다 inner 함수가 실행됨.
a가 10 이상이 되면 clearInterval로 타이머를 멈추고 inner 참조도 해제함.

(3) 버튼 클릭 시마다 count가 1씩 증가함.
count가 10이 되면 이벤트 리스너를 제거하고 핸들러 참조도 해제함.
*/