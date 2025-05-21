# 예제 5-18
## 2024120823 백도훈


5단계 커링을 구현해 다섯 개 인자를 순차적으로 받아 원래 함수에 전달하는 방법


var curry5 = function(func) {
  return function(a) {  // 첫 번째 인자 a 받음
    return function(b) {  // 두 번째 인자 b 받음
      return function(c) {  // 세 번째 인자 c 받음
        return function(d) {  // 네 번째 인자 d 받음
          return function(e) {  // 다섯 번째 인자 e 받음
            return func(a, b, c, d, e);  // 모든 인자를 원래 함수에 넘겨 실행
          };
        };
      };
    };
  };
};
var getMax = curry5(Math.max);
// Math.max 함수에 다섯 개 인자를 커링 방식으로 적용할 수 있게 함
console.log(getMax(1)(2)(3)(4)(5)); // 5

// 실행결과 :
// 5
