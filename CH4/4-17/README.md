# 예제 4-17  
## 2024120823 백도훈  

async/await와 Promise를 이용한 비동기 순차 처리


var addCoffee = function(name) {
  // 0.5초 후에 이름을 resolve하는 Promise 반환
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve(name);
    }, 500);
  });
};
var coffeeMaker = async function() {
  var coffeeList = '';
  var _addCoffee = async function(name) {
    // 비동기로 커피 이름을 받아 coffeeList에 추가
    coffeeList += (coffeeList ? ',' : '') + (await addCoffee(name));
  };
  await _addCoffee('에스프레소');
  console.log(coffeeList); // 에스프레소
  await _addCoffee('아메리카노');
  console.log(coffeeList); // 에스프레소,아메리카노
  await _addCoffee('카페모카');
  console.log(coffeeList); // 에스프레소,아메리카노,카페모카
  await _addCoffee('카페라떼');
  console.log(coffeeList); // 에스프레소,아메리카노,카페모카,카페라떼
};
coffeeMaker(); // 비동기 함수 실행
