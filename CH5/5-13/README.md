# 예제 5-13  
## 2024120823 백도훈

bind를 활용한 부분 적용 함수(partial application) 작성

var add = function() {
  var result = 0;
  for (var i = 0; i < arguments.length; i++) {
    result += arguments[i];  // 전달된 모든 인자를 누적하여 합산
  }
  return result;
};

var addPartial = add.bind(null, 1, 2, 3, 4, 5);  
// add 함수에 1~5까지 미리 고정해서 부분 적용된 함수 생성

console.log(addPartial(6, 7, 8, 9, 10));  // 나머지 인자를 전달해서 합산 완료 → 55 출력

/*
(1) add 함수는 전달받은 모든 숫자를 합산해 반환함.
(2) bind를 이용해 앞의 인자 1, 2, 3, 4, 5를 고정해둔 addPartial 함수 생성.
(3) 이후 addPartial에 6~10을 전달하면 고정된 인자들과 함께 모두 더해져 55 반환.
(4) 이처럼 bind는 함수 일부 인자를 미리 고정하는 데 활용할 수 있음 (partial application).
*/
