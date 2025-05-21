# 예제 5-8
## 2024120823 백도훈

클로저 대신 bind()로 이벤트 핸들러에 인자 전달


var fruits = ['apple', 'banana', 'peach'];
var $ul = document.createElement('ul');

var alertFruit = function(fruit) {
  alert('your choice is ' + fruit);  // 선택한 과일 이름 알림창에 표시
};
fruits.forEach(function(fruit) {
  var $li = document.createElement('li');
  $li.innerText = fruit;              // li에 과일 이름 표시
  // bind()를 이용해 fruit 값을 인자로 고정시켜 이벤트 핸들러에 전달
  $li.addEventListener('click', alertFruit.bind(null, fruit));
  $ul.appendChild($li);
});
document.body.appendChild($ul);

/*
(1) bind()는 함수 실행 시 this와 인자를 고정하는 메서드임.
(2) 이렇게 하면 클릭 이벤트가 발생할 때마다 해당 fruit 값이 alertFruit에 전달됨.
(3) 클로저를 사용하지 않고도 인자를 이벤트 핸들러에 전달할 수 있음.
*/
