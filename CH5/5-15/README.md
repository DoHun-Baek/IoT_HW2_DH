# 예제 5-15
## 2024120823 백도훈

부분 적용 함수 확장, 자리에 빈 공간(_)을 두어 실행 시점에 인자를 채워 넣는 방법


// window 객체에 '_'라는 이름으로 특수 값을 정의해 변경 불가능하고 숨김 처리함
Object.defineProperty(window, '_', {
  value: 'EMPTY_SPACE',
  writable: false,
  configurable: false,
  enumerable: false,
});

// partial2 함수는 첫 번째 인자를 고정시키면서 '_' 자리에는 호출 시 인자를 채워 넣을 수 있게 함
var partial2 = function() {
  var originalPartialArgs = arguments;
  var func = originalPartialArgs[0];
  if (typeof func !== 'function') {
    throw new Error('첫 번째 인자가 함수가 아닙니다.');
  }
  return function() {
    var partialArgs = Array.prototype.slice.call(originalPartialArgs, 1);
    var restArgs = Array.prototype.slice.call(arguments);
    // '_'인 부분을 restArgs에서 하나씩 꺼내서 채워 넣음
    for (var i = 0; i < partialArgs.length; i++) {
      if (partialArgs[i] === _) {
        partialArgs[i] = restArgs.shift();
      }
    }
    return func.apply(this, partialArgs.concat(restArgs));
  };
};

// add 함수는 전달받은 모든 인자를 더함
var add = function() {
  var result = 0;
  for (var i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
};
// addPartial 함수는 부분 적용 함수로 '_' 자리에 실행 시 인자가 채워짐
var addPartial = partial2(add, 1, 2, _, 4, 5, _, _, 8, 9);
console.log(addPartial(3, 6, 7, 10)); 
// 실행결과 : 55

// dog 객체에 greet 메서드를 부분 적용 함수로 만듦
var dog = {
  name: '강아지',
  greet: partial2(function(prefix, suffix) {
    return prefix + this.name + suffix;
  }, '왈왈, '),
};
console.log(dog.greet(' 배고파요!')); 
// 실행결과 : 왈왈, 강아지 배고파요!

/*
부분 적용 함수에 빈 공간(_)을 넣고, 실행할 때 그 자리에 인자를 채워 넣는 기법임.
이걸로 인자 조합을 더 유연하게 다룰 수 있음.
this 바인딩도 유지돼서 객체 메서드에서 문제없이 사용 가능함.
*/

