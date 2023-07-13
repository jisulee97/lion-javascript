/* ----------------------------- */
/* Classes                       */
/* ----------------------------- */

// 앞서 함수로 정의한 내용들을 class문법을 사용해 재정의 합니다.

// Animal => tiger => 호돌이

class Animal {
  //@ 기본값 설정하는 곳
  legs = 4;
  tail = true;
  stomach = [];

  //@ 메서드 설정하는 곳
  //@ 최초 1회 실행
  //@ constructor는 필수임! => 생성자 함수가 객체를 생성하는데 뭘 실행할건데?
  constructor(name) {
    this.name = name;
    //@ const tiger = new Animal('호돌이') 를 실행해서
    //@ tiger.name = 호돌이 가 생성
  }

  set eat(food) {
    //@ push 메서드를 통해 food(사료) 를 집어 넣음
    this.stomach.push(food);
  }
  get eat() {
    return this.stomach;
  }
}

// const tiger = new Animal('호돌이');

//# set, get 이 없을 경우
//# constructor 의 이름들을 각각 따로 설정해줘야함

//# Animal 을 확장시켜 tiger 를 생성

class Tiger extends Animal {
  prey = '';

  constructor(name, pattern) {
    //@ 부모의 프로퍼티를 가져와 사용하겠다(super)
    //@ 위에 있는 name 함수를 실행하겠다
    super(name);
    this.pattern = pattern;
  }

  hunt(target) {
    this.prey = target;
    return `${target}에게 조용히 접근한다.`;
  }

  attack() {
    return `강력한 발톱 공격으로 ${this.prey}가 죽었습니다.`;
  }

  //@ static 를 사용하면 생성된 객체가 사용하는 것이 아니라 클래스가 사용이 가능한 것
  static sleep(name) {
    console.log(name + '이 잠을 잔다.');
  }
}

const beom = new Tiger('범', '호랑이무늬');
const hoho = new Tiger('hoho', '호피무늬');

//# 롤 예시

class Champion {
  q = '';
  w = '';

  d = '';
  f = '';

  constructor(qValue, wValue, dValue, fValue) {
    this.q = qValue;
    this.w = wValue;
    this.d = dValue;
    this.f = fValue;
  }

  pressD() {
    console.log(this.d + '발동!');
  }
  pressF() {
    console.log(this.f + '발동!');
  }
}

const yumi = new Champion({
  qValue: '사르르탄',
  wValue: '너랑유미랑',
  dValue: '점멸',
  fValue: '회복',
});
