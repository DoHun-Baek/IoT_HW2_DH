# 예제 4-15  
## 2024120823 백도훈  

프로미스를 반환하는 함수와 순차적 비동기 처리


var addCoffee = function(name) {
  // name을 받아서 이전 결과를 이어받는 함수 반환
  return function(prevName) {
    return new Promise(function(resolve) {
      setTimeout(function() {
        // 이전 이름이 있으면 연결, 없으면 새로 시작
        var newName = prevName ? prevName + ', ' + name : name;
        console.log(newName);  // 현재까지 커피 리스트 출력
        resolve(newName);      // 다음 then으로 값 전달
      }, 500);
    });
  };
};
// 첫 함수 호출에 빈 인자를 넘겨 비동기 연속 호출 시작
addCoffee('에스프레소')()
  .then(addCoffee('아메리카노'))
  .then(addCoffee('카페모카'))
  .then(addCoffee('카페라떼'));
