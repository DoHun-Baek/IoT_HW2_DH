# 예제 4-10  
## 2024120823 백도훈  

객체 메서드 호출과 함수 호출의 차이 및 call 메서드 사용  


var obj1 = {
  name: 'obj1',
  func: function() {
    console.log(obj1.name);  // this 대신 obj1 이름 직접 사용
  },
};
var obj2 = {
  name: 'obj2',
  func: obj1.func,  // obj1.func를 obj2 메서드로 할당
};
var callback2 = obj2.func();  
// obj2.func() 호출 시 함수 내부는 obj1.name을 출력, 호출 결과는 undefined
setTimeout(callback2, 1500);  // callback2는 undefined라 동작 안 함

var obj3 = { name: 'obj3' };
var callback3 = obj1.func.call(obj3);  
// call 메서드로 obj3를 this로 지정해 함수 즉시 실행, 반환값 undefined
setTimeout(callback3, 2000);  // callback3은 undefined라 동작 안 함
