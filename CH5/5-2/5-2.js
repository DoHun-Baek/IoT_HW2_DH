// 사물인터넷 HW2 2024120823 백도훈
// 예제 5-2

var outer = function() {
  var a = 1;
  var inner = function() {
    return ++a;
  };
  return inner();
};
var outer2 = outer();
console.log(outer2);
