# 예제 4-1  
## 2024120823 백도훈  

setInterval과 clearInterval을 이용한 반복 실행 제어  


var count = 0;  // 반복 횟수를 세기 위한 변수
var timer = setInterval(function() {
  console.log(count);  // 현재 count 값 출력
  if (++count > 4) clearInterval(timer);  // count가 5가 되면 타이머 중지
}, 300);  // 300ms마다 함수 실행

// 실행결과 : 
// 0
// 1
// 2
// 3
// 4
