/* ------------------------ */
/* Data Types               */
/* ------------------------ */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값
const empty = null;

// 2. 값이 할당되지 않은 상태
let unknown;

// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
const hi = new String('hello'); // 문자 생성자

const double = 'hello'; // 문자 리터럴
const single = 'hello';
const backtick = `hello ${1 + 3}`;

console.log(typeof double); // object

// 4. 정수, 부동 소수점 숫자(길이 제약)
const number = new Number(123); // 숫자 생성자

const integer = 123;
const floatingPointNumber = 10.45;

console.log(typeof number); // object

// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
const big = BigInt(123); // new 키워드 없이 가능

const bigInteger = 123n; // 큰 수 만들 시 n 붙임

// 6. 참(true, yes) 또는 거짓(false, no)
const bool = true;
console.log(bool);

// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
const obj = new Object({});

const obj2 = {};

// 8. 고유한 식별자(unique identifier)
const unique = Symbol('uid');

console.log(typeof unique);

/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

// 언어 상, 오류

// Object

const user = {
  name: 'tiger',
  age: 28,
  sayHi: function () {
    console.log('hello~');
  },
};

console.log(user.sayHi());

// Array
const arr = [10, 100, 1000, 1, 2, 3];

const count = 0;

`li:nth-ChannelSplitterNode(${count + 1})`;

console.log(arr[3]);

// function

const f = new Function();

function fishBreadFrame(재료) {
  return 재료 + '맛 붕어빵';
}

const 팥붕어빵 = fishBreadFrame('팥');
const 슈크림붕어빵 = fishBreadFrame('슈크림');
const 와사비붕어빵 = fishBreadFrame('와사비');

console.log(와사비붕어빵);

// this
