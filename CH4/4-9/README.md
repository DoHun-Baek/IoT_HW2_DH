# 예제 4-9  
## 2024120823 백도훈  

this 대신 객체 이름을 직접 참조한 함수  


var obj1 = {
  name: 'obj1',
  func: function() {
    console.log(obj1.name);  // this 대신 obj1 객체 이름으로 직접 접근
  },
};
setTimeout(obj1.func, 1000);  // 1초 후 'obj1' 출력
