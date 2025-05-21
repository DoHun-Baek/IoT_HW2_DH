# 예제 5-12
## 2024120823 백도훈

클로저와 Object.freeze를 활용한 객체 불변성 유지


var createCar = function() {
  var fuel = Math.ceil(Math.random() * 10 + 10);  // 외부에서 접근 불가능한 연료 변수
  var power = Math.ceil(Math.random() * 3 + 2);   // 외부에서 접근 불가능한 연비 변수
  var moved = 0;                                  // 내부 상태 변수

  var publicMembers = {
    get moved() {
      return moved;                               // moved 값을 읽기 전용으로 제공
    },
    run: function() {
      var km = Math.ceil(Math.random() * 6);     // 이동 거리 생성
      var wasteFuel = km / power;                 // 필요한 연료 계산
      if (fuel < wasteFuel) {                      // 연료 부족시 경고 후 함수 종료
        console.log('이동불가');
        return;
      }
      fuel -= wasteFuel;                           // 연료 차감
      moved += km;                                 // 이동 거리 누적
      console.log(km + 'km 이동 (총 ' + moved + 'km). 남은 연료: ' + fuel);  // 상태 출력
    },
  };

  Object.freeze(publicMembers);  // publicMembers 객체 변경 불가 상태로 고정
  return publicMembers;
};

var car = createCar();  // 클로저로 내부 상태 은닉, 반환된 객체는 불변 상태 유지

/*
(1) createCar 함수 내 fuel, power, moved 변수는 외부에서 직접 접근 불가.
(2) publicMembers 객체는 Object.freeze로 속성 변경이 막힘.
(3) moved 접근자와 run 메서드는 내부 상태를 조작하거나 조회하는 역할 수행.
(4) 이렇게 클로저와 freeze를 함께 써서 상태 은닉과 객체 불변성을 보장함.
*/
