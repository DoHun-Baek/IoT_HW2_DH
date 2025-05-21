# 예제 4-7  
## 2024120823 백도훈  

this 바인딩이 함수 호출 방식에 따라 달라지는 예시


var obj = {
  vals: [1, 2, 3],
  logValues: function(v, i) {
    console.log(this, v, i);  // this는 호출 방식에 따라 다름
  },
};
obj.logValues(1, 2);  
// 객체 메서드 호출이므로 this는 obj를 가리킴

[4, 5, 6].forEach(obj.logValues);  
// 콜백 함수로 호출되어 this는 전역 객체(Window)를 가리킴
