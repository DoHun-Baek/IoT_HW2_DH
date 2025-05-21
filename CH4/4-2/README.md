# 예제 4-2  
## 2024120823 백도훈  

콜백 함수로 setInterval 동작 분리  


var count = 0;  // 반복 횟수를 세는 변수
var cbFunc = function() {
  console.log(count);  // 현재 count 출력
  if (++count > 4) clearInterval(timer);  // count가 5 초과되면 타이머 종료
};
var timer = setInterval(cbFunc, 300);  // cbFunc을 300ms마다 실행


// 실행결과 : 
// 0
// 1
// 2
// 3
// 4  
