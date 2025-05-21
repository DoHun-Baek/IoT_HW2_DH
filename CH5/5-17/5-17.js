// 사물인터넷 HW2 2024120823 백도훈
// 예제 5-17


var curry3 = function(func) {
  return function(a) {
    return function(b) {
      return func(a, b);
    };
  };
};

var getMaxWith10 = curry3(Math.max)(10);
console.log(getMaxWith10(8)); 
console.log(getMaxWith10(25));

var getMinWith10 = curry3(Math.min)(10);
console.log(getMinWith10(8)); 
console.log(getMinWith10(25)); 
