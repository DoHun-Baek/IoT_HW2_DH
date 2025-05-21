# 예제 4-8  
## 2024120823 백도훈  

this 문제 해결을 위한 클로저 패턴 사용  


var obj1 = {
  name: 'obj1',
  func: function() {
    var self = this;  // this를 self 변수에 저장
    return function() {
      console.log(self.name);  // 내부 함수에서 self를 통해 원래 this 참조 가능
    };
  },
};
var callback = obj1.func();
setTimeout(callback, 1000);  // 1초 후 'obj1' 출력
