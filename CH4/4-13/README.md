# 예제 4-13  
## 2024120823 백도훈  

함수 분리 및 순차적 비동기 처리


var coffeeList = '';

var addEspresso = function(name) {
  coffeeList = name;
  console.log(coffeeList);  // 에스프레소 출력
  setTimeout(addAmericano, 500, '아메리카노');  // 0.5초 후 addAmericano 호출
};
var addAmericano = function(name) {
  coffeeList += ', ' + name;
  console.log(coffeeList);  // 에스프레소, 아메리카노 출력
  setTimeout(addMocha, 500, '카페모카');  // 0.5초 후 addMocha 호출
};
var addMocha = function(name) {
  coffeeList += ', ' + name;
  console.log(coffeeList);  // 에스프레소, 아메리카노, 카페모카 출력
  setTimeout(addLatte, 500, '카페라떼');  // 0.5초 후 addLatte 호출
};
var addLatte = function(name) {
  coffeeList += ', ' + name;
  console.log(coffeeList);  // 최종 커피 리스트 출력
};

setTimeout(addEspresso, 500, '에스프레소');  // 0.5초 후 addEspresso 호출
