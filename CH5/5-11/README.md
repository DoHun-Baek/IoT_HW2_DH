# 예제 5-11
## 2024120823 백도훈

클로저를 이용한 정보 은닉과 객체 생성


var createCar = function() {
  var fuel = Math.ceil(Math.random() * 10 + 10);  // 외부에서 직접 접근 불가능한 연료 변수
  var power = Math.ceil(Math.random() * 3 + 2);   // 외부에서 접근할 수 없는 연비 변수
  var moved = 0;                                  // 이동 거리 상태 변수 (내부에서만 수정 가능)

  return {
    get moved() {
      return moved;                               // moved 값을 읽을 수 있도록 접근자 제공
    },
    run: function() {
      var km = Math.ceil(Math.random() * 6);     // 이동할 거리 랜덤 생성
      var wasteFuel = km / power;                 // 필요한 연료 계산
      if (fuel < wasteFuel) {                      // 연료 부족 시 메시지 출력 후 종료
        console.log('이동불가');
        return;
      }
      fuel -= wasteFuel;                           // 연료 차감
      moved += km;                                 // 이동 거리 누적
      console.log(km + 'km 이동 (총 ' + moved + 'km). 남은 연료: ' + fuel);  // 상태 출력
    },
  };
};

var car = createCar();  // createCar 호출로 새 객체 생성, 외부에서는 fuel와 power에 직접 접근 불가

/*
(1) createCar 함수는 클로저를 사용해 fuel, power, moved 변수를 은닉함.
(2) 반환된 객체는 moved에 대해 getter를 제공해 상태 조회 가능.
(3) run 메서드는 이동 거리와 연료 소모를 계산하고 상태를 변경함.
(4) 클로저로 상태 정보를 외부에서 직접 변경하지 못하도록 보호함.
*/
