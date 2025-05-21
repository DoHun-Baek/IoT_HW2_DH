# 예제 4-14  
## 2024120823 백도훈  

프로미스를 사용한한 순차적 비동기 작업


new Promise(function(resolve) {
  setTimeout(function() {
    var name = '에스프레소';
    console.log(name);  // 에스프레소 출력
    resolve(name);      // 다음 then으로 값 전달
  }, 500);
})
  .then(function(prevName) {
    return new Promise(function(resolve) {
      setTimeout(function() {
        var name = prevName + ', 아메리카노';
        console.log(name);  // 에스프레소, 아메리카노 출력
        resolve(name);
      }, 500);
    });
  })
  .then(function(prevName) {
    return new Promise(function(resolve) {
      setTimeout(function() {
        var name = prevName + ', 카페모카';
        console.log(name);  // 에스프레소, 아메리카노, 카페모카 출력
        resolve(name);
      }, 500);
    });
  })
  .then(function(prevName) {
    return new Promise(function(resolve) {
      setTimeout(function() {
        var name = prevName + ', 카페라떼';
        console.log(name);  // 최종 커피 리스트 출력
        resolve(name);
      }, 500);
    });
  });
