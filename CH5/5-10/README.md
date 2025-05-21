# 예제 5-10
## 2024120823 백도훈

객체의 메서드와 this 키워드 활용, 연료 소모 계산


var car = {
  fuel: Math.ceil(Math.random() * 10 + 10),  // 연료를 10~20L 사이의 랜덤값으로 초기화
  power: Math.ceil(Math.random() * 3 + 2),   // 연비를 2~5 km/L 사이의 랜덤값으로 초기화
  moved: 0,                                  // 총 이동 거리 초기값 0

  run: function() {
    var km = Math.ceil(Math.random() * 6);  // 1~6 km 사이 랜덤 이동 거리 생성
    var wasteFuel = km / this.power;        // 이동에 필요한 연료 계산
    if (this.fuel < wasteFuel) {             // 연료 부족 시 이동 불가 메시지 출력 후 종료
      console.log('이동불가');
      return;
    }
    this.fuel -= wasteFuel;                   // 연료 소모량만큼 fuel 값 감소
    this.moved += km;                         // 이동 거리 누적
    console.log(km + 'km 이동 (총 ' + this.moved + 'km)');  // 이동 정보 출력
  },
};

/*
(1) car 객체는 연료량, 연비, 총 이동 거리 상태를 가짐.
(2) run 메서드는 이동 거리와 연료 소모를 계산해 상태를 업데이트함.
(3) this는 car 객체를 가리키며, 상태를 변경하는 데 사용됨.
(4) Math.random()으로 매번 다른 값으로 시뮬레이션 가능.
*/
