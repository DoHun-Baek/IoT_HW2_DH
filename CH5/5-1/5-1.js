// 사물인터넷 HW2 2024120823 백도훈
// 예제 5-1

var outer = function() {
  var a = 1;
  var inner = function() {
    console.log(++a);
  };
  inner();
};
outer();
