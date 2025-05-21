# 예제 4-12  
## 2024120823 백도훈  

중첩된 setTimeout으로 순차적 비동기 작업 실행


setTimeout(
  function(name) {
    var coffeeList = name;
    console.log(coffeeList);  // 에스프레소 출력

    setTimeout(
      function(name) {
        coffeeList += ', ' + name;
        console.log(coffeeList);  // 에스프레소, 아메리카노 출력

        setTimeout(
          function(name) {
            coffeeList += ', ' + name;
            console.log(coffeeList);  // 에스프레소, 아메리카노, 카페모카 출력

            setTimeout(
              function(name) {
                coffeeList += ', ' + name;
                console.log(coffeeList);  // 에스프레소, 아메리카노, 카페모카, 카페라떼 출력
              },
              500,
              '카페라떼'
            );
          },
          500,
          '카페모카'
        );
      },
      500,
      '아메리카노'
    );
  },
  500,
  '에스프레소'
);
