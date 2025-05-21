# 예제 5-14
## 2024120823 백도훈

부분 함수 적용 (partial function application)

var partial = function() {
  // arguments 객체에서 첫 번째 인자(함수)를 가져온다
  var originalPartialArgs = arguments;
  var func = originalPartialArgs[0];
  if (typeof func !== 'function') {
    throw new Error('첫 번째 인자가 함수가 아닙니다.');
  }
  // 반환된 함수는 기존 인자와 호출 시 인자를 합쳐 원래 함수에 적용한다
  return function() {
    var partialArgs = Array.prototype.slice.call(originalPartialArgs, 1);
    var restArgs = Array.prototype.slice.call(arguments);
    return func.apply(this, partialArgs.concat(restArgs));
  };
};

var add = function() {
  var result = 0;
  // 모든 인자를 더해서 결과를 반환한다
  for (var i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
};
var addPartial = partial(add, 1, 2, 3, 4, 5);
// 부분 적용된 함수에 추가 인자를 전달하여 총합 계산
console.log(addPartial(6, 7, 8, 9, 10)); 
// 실행결과 : 55

var dog = {
  name: '강아지',
  greet: partial(function(prefix, suffix) {
    // 부분 적용된 prefix와 호출 시 전달된 suffix를 결합하여 문자열 반환
    return prefix + this.name + suffix;
  }, '왈왈, '),
};
dog.greet('입니다!'); 
// 실행결과 : '왈왈, 강아지입니다.'


/*
부분 적용 함수는 함수의 일부 인자를 미리 고정시켜 새 함수로 만듦
이를 통해 재사용성과 코드의 간결성을 높일 수 있음.
또한, this 바인딩이 유지된 상태에서 부분 적용 함수가 동작하는 것을 확인할 수 있음.
*/