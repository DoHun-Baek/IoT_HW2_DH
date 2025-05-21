# 예제 4-11  
## 2024120823 백도훈  

bind 메서드로 this 고정하기  


var obj1 = {
  name: 'obj1',
  func: function() {
    console.log(this.name);  // this는 함수 호출 시점에 결정됨
  },
};
setTimeout(obj1.func.bind(obj1), 1000);  
// bind로 this를 obj1로 고정, 1초 후 'obj1' 출력

var obj2 = { name: 'obj2' };
setTimeout(obj1.func.bind(obj2), 1500);  
// bind로 this를 obj2로 고정, 1.5초 후 'obj2' 출력
