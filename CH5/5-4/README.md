# 예제 5-4
## 2024120823 백도훈

비동기 처리와 이벤트 리스너


// (1) setInterval/setTimeout을 이용한 반복 작업 예제
(function() {
  var a = 0;
  var intervalId = null;
  var inner = function() {
    if (++a >= 10) {         // a가 10 이상이면 반복 중지
      clearInterval(intervalId);
    }
    console.log(a);           // 현재 카운트 출력
  };
  intervalId = setInterval(inner, 1000); // 1초마다 inner 함수 실행
})();

// (2) 이벤트 리스너를 이용한 버튼 클릭 횟수 카운트 예제
(function() {
  var count = 0;
  var button = document.createElement('button'); // 버튼 생성
  button.innerText = 'click';
  button.addEventListener('click', function() {
    console.log(++count, 'times clicked'); // 클릭할 때마다 카운트 출력
  });
  document.body.appendChild(button); // 생성한 버튼을 문서에 추가
})();
