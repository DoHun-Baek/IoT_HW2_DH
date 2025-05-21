# 예제 5-7
## 2024120823 백도훈

이벤트 핸들러에 인자를 전달하는 문제점과 해결 방안


var fruits = ['apple', 'banana', 'peach'];
var $ul = document.createElement('ul');

var alertFruit = function(fruit) {
  alert('your choice is ' + fruit); // 선택한 과일 이름을 알림창에 표시
};
fruits.forEach(function(fruit) {
  var $li = document.createElement('li');
  $li.innerText = fruit;             // li에 과일 이름 표시
  $li.addEventListener('click', alertFruit);  // 클릭 시 alertFruit 함수 실행 (인자 없이 호출됨)
  $ul.appendChild($li);
});
document.body.appendChild($ul);
alertFruit(fruits[1]);               // 바나나를 바로 알림으로 표시함

/*
(1) alertFruit 함수는 fruit 인자를 받아서 알림창을 띄움.
(2) forEach에서 addEventListener에 alertFruit만 넘기면 이벤트 객체가 자동으로 전달됨.
(3) 그래서 클릭 시 인자 없이 호출되어 undefined가 나올 수 있음.
(4) 마지막에 fruits[1]을 직접 호출해서 'banana' 알림창이 뜸.
*/
