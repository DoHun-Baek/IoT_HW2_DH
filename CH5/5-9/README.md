# 예제 5-9
## 2024120823 백도훈

클로저를 이용해 이벤트 핸들러에 인자를 전달하는 방법


var fruits = ['apple', 'banana', 'peach'];
var $ul = document.createElement('ul');

var alertFruitBuilder = function(fruit) {
  // 특정 fruit 값을 기억하는 함수 반환 (클로저 생성)
  return function() {
    alert('your choice is ' + fruit);  // 클릭 시 해당 과일 이름 알림창에 표시
  };
};
fruits.forEach(function(fruit) {
  var $li = document.createElement('li');
  $li.innerText = fruit;                 // li 요소에 과일 이름 표시
  $li.addEventListener('click', alertFruitBuilder(fruit)); // 클로저 함수 등록
  $ul.appendChild($li);
});
document.body.appendChild($ul);

/*
(1) alertFruitBuilder 함수가 호출될 때마다 새로운 함수가 만들어지고,
    그 함수가 해당 fruit 값을 기억함 (클로저).
(2) 이벤트 클릭 시, 기억된 fruit 값이 alert로 출력됨.
(3) 클로저를 활용해 이벤트 핸들러에 인자를 안전하게 전달하는 방법임.
*/
