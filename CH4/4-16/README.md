# 예제 4-16  
## 2024120823 백도훈  

제너레이터와 setTimeout을 이용한 비동기 순차 실행


var addCoffee = function(prevName, name) {
  // 일정 시간 후에 제너레이터에 결과 전달
  setTimeout(function() {
    coffeeMaker.next(prevName ? prevName + ', ' + name : name);
  }, 500);
};
var coffeeGenerator = function*() {
  // 각 yield는 addCoffee 함수 호출과 동시에 일시 중지됨
  var espresso = yield addCoffee('', '에스프레소');
  console.log(espresso);  // 에스프레소 출력 후 다음 진행
  var americano = yield addCoffee(espresso, '아메리카노');
  console.log(americano); // 에스프레소, 아메리카노 출력
  var mocha = yield addCoffee(americano, '카페모카');
  console.log(mocha);     // 에스프레소, 아메리카노, 카페모카 출력
  var latte = yield addCoffee(mocha, '카페라떼');
  console.log(latte);    // 모든 커피 리스트 출력
};
var coffeeMaker = coffeeGenerator();
// 제너레이터 시작 (첫 번째 yield까지 진행)
coffeeMaker.next();
