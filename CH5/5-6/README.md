# 예제 5-6
## 2024120823 백도훈

배열과 이벤트 리스너를 활용한 리스트 아이템 클릭 처리


var fruits = ['apple', 'banana', 'peach'];
var $ul = document.createElement('ul');  // ul 요소 생성

fruits.forEach(function(fruit) {
  var $li = document.createElement('li'); // li 요소 생성
  $li.innerText = fruit;                   // li에 과일 이름 삽입
  $li.addEventListener('click', function() {
    alert('your choice is ' + fruit);     // 클릭 시 해당 과일 이름 알림창 표시
  });
  $ul.appendChild($li);                    // ul에 li 추가
});
document.body.appendChild($ul);            // 문서 본문에 ul 추가

/*
(1) fruits 배열의 각 요소마다 li 요소를 생성함.
(2) 각 li에는 해당 과일 이름이 텍스트로 들어감.
(3) li를 클릭하면 alert로 'your choice is [과일명]' 메시지가 뜸.
(4) 이렇게 생성된 li를 ul에 붙이고, ul을 문서에 붙임.
*/
