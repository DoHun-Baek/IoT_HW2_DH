# 예제 5-16
## 2024120823 백도훈


디바운스(debounce) 기법을 이용해 이벤트 처리를 효율적으로 하는 방법


var debounce = function(eventName, func, wait) {
  var timeoutId = null;  // 타이머 ID 저장 변수
  return function(event) {  // 반환된 함수는 이벤트 리스너로 사용됨
    var self = this;  // this 저장 (이벤트 대상 객체)
    console.log(eventName, 'event 발생');  // 이벤트 발생 로그 출력
    clearTimeout(timeoutId);  // 기존 타이머 제거 (이전 대기 취소)
    // wait 시간 후에 func 실행, this 바인딩 유지, 인자로 event 전달
    timeoutId = setTimeout(func.bind(self, event), wait);
  };
};

var moveHandler = function(e) {
  console.log('move event 처리');  // 마우스 이동 이벤트 처리 메시지
};
var wheelHandler = function(e) {
  console.log('wheel event 처리');  // 마우스 휠 이벤트 처리 메시지
};

document.body.addEventListener('mousemove', debounce('move', moveHandler, 500));
// 마우스 움직임 이벤트에 디바운스 적용 (500ms 딜레이)

document.body.addEventListener('mousewheel', debounce('wheel', wheelHandler, 700));
// 마우스 휠 이벤트에 디바운스 적용 (700ms 딜레이)


// 실행결과 : 
// move event 발생  (마우스 움직임시, 500ms 후에 move event 처리 출력)
// move event 처리
// wheel event 발생  (휠 스크롤 시, 700ms 후에 wheel event 처리 출력)
// wheel event 처리
