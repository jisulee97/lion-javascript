/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.

// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우

// const animal = {
//   legs: 4,
//   tail: true,
//   stomach: [],
//   set eat(food) {
//     this.stomach.push(food);
//   },
//   get eat() {
//     return this.stomach;
//   },
// };

// const tiger = {
//   pattern: '호랑이무늬',
//   prey: '',
//   hunt(target) {
//     this.prey = target;
//     return `${target}에게 조용히 접근한다.`;
//   },
// };

// const fox = {
//   prey: '',
// };

//# tiger 에게 animal 능력을 부여할 수 있도록 만들어줌
// tiger.__proto__ = animal;
// 생성자 함수
//# animal 의 능력만 가지고 tiger 능력은 부여 받지 못 함
// fox.__proto__ = animal;

//# 결론: 하나의 객체는 하나의 프로토타입만 상속가능!!!!!!!!!!!!!!

//# 함수는 두가지 일을 할 수 있다(양면의 얼굴)

// # 함수 이름 앞이 대문자로 시작하면 생성자 함수다(암묵적으로)
//# 화살표 함수는 생성자 함수의 기능을 못 한다(constructor 가 없기 떄문)
//# 생성자 함수 => 객체를 생성함(함수지만 객체를 생성)

// function Button(name) {
//   // this.name = name;
// }

// function button() {}

// const a = Button();
// const b = new Button('버튼'); // 생성자 함수 => 객체를 생성함

// function User(name, age, email) {
//   this.name = name;
//   this.age = age;
//   this.email = email;
// }

// function button() {}

// // const a = button()

// const person1 = new User('선범', 32, 'tiger@naver.com');

//@ 생성자 함수

function Animal() {
  this.stomach = [];
  this.legs = 4;
  (this.tail = true),
    (this.eat = function (food) {
      this.stomach.push(food);
    });
  this.printEat = function (food) {
    return this.stomach;
  };
}

const tiger = new Animal();

tiger.pattern = '호랑이 무늬';

tiger.hunt = function (target) {
  (this.prey = target), console.log(`${target}에게 슬금슬금 접근합니다.`);
};

const cat = new Animal();

cat.say = () => '냐아아아아옹';

const fox = new Animal();
const wolf = new Animal();
const dog = new Animal();
// const str = new String('a');
// const num = new Number(1);
