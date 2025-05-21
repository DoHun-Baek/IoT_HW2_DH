# 예제 4-6  
## 2024120823 백도훈  

함수 내부의 this 객체가 실행 컨텍스트에 따라 달라지는 예시


setTimeout(function() {
  console.log(this);  // 일반 함수에서 this는 전역 객체(Window)를 가리킴
}, 300);

[1, 2, 3, 4, 5].forEach(function(x) {
  console.log(this);  // 콜백 함수 내 this도 기본적으로 Window 객체
});

document.body.innerHTML += '<button id="a">클릭</button>';
document.body.querySelector('#a').addEventListener(
  'click',
  function(e) {
    console.log(this, e);  // 이벤트 핸들러에서 this는 이벤트가 발생한 요소(<button>)
  }
);
