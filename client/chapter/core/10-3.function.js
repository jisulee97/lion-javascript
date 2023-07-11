/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

const calculateTotal = function (moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
};

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 함수 선언 → 화살표 함수 (표현)식
// 화살표 함수는 arguments 를 내장하고 있지 않다 => rest parameter로 사용해야함
// constructor 를 내장하고 있지 않다
let calcAllMoney = (...args) => {
  console.log(args);

  // let total = 0;
  // args.forEach((item) => {
  //   total += item;
  // });

  // return args.reduce(function (acc, item) {
  //   return acc + item;
  // }, 0);

  // 화살표 함수로 변경
  // args.reduce((acc, item) => {
  //   return acc + item;
  // });

  // return 생략
  // return args.reduce((acc, item) => acc + item, 0);

  // return total;
};

const result = calcAllMoney(1000, 500, 200, 2000);
console.log(result);

// 화살표 함수와 this

// 함수 선언문
function normalFunction() {
  console.log(this);
}

// 함수 표현식
const expressionFunction = () => {
  console.log(this);
};

// 화살표 함수식
const arrowFunction = () => {
  console.log(this);
};

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow;

// repeat(text: string, repeatCount: number): string;
let repeat;

// 객체 안에서 this
const user = {
  total: 0,
  name: 'tiger',
  age: 32,
  address: '서울시 중랑구 면목동',
  grades: [80, 90, 100],
  totalGrades() {
    function sayHi() {
      console.log(this);
    }
    sayHi(); // window 가 호출한것이 아니라 totalGrades에 의해서 알아서 호출됨
  },
};
