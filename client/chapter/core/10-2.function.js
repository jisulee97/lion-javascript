/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */

function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

const resultX = calcTotal(10000, 8900, 1360, 2100);
const resultY = calcTotal(21500, 3200, 9800, 4700);
const resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

//? 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function () {
  // console.log(arguments);
  //? 함수 안에서만 접근이 가능한 인수들의 집합 객체로서 배열과 유사한 형태를 가지고 있는 것은?
  //? arguments => 함수 안에 들어가면 매개변수로 이용 가능(함수가 만들어준(함수 안에서만 접근 가능한) 객체)
  //? arguments 객체를 사용하여 함수의 매개변수 없이 아이템의 총 합을 구해보자!
  //? # 1. for문 이용
  // let total = 0;
  // for (let i = 0; i < arguments.length; i++) {
  //   total += arguments[i];
  // }
  // ----------------------------------------------------------------------------
  //? 2. for of 사용
  //   let total = 0;
  //   for (let Key of arguments) {
  //     total += Key;
  //   }
  //   return total;
  // };
  // ----------------------------------------------------------------------------
  //? 3. forEach 빌려쓰기
  // let total = 0;
  // Array.prototype.forEach.call(arguments, function (item) {
  //   total += item;
  // });
  // return total;
  // arguments 안에는 forEach 라는 기능이 없기 때문에 실행 x, 빌려써와야 함
  // arguments.forEach((item) => {
  //   console.log(item);
  // });
  // ----------------------------------------------------------------------------
  //? 4. Array의 slice 메서드를 빌려써서 진짜 배열로 만들어주기
  // let total = 0;
  // let realArray = Array.prototype.slice.call(arguments);
  // console.log(realArray);
  // realArray.forEach(function (item) {
  //   total += item;
  // });
  // return total;
  // ----------------------------------------------------------------------------
  //? 5. Array.from() : 여기에 담긴 모든 것들을 배열로 반환해줌
  // let total = 0;
  // let realArray = Array.from(arguments);
  // console.log(realArray);
  // realArray.forEach(function (item) {
  //   total += item;
  // });
  // Object.prototype.toString()
  // Object.entries()
  // return total;
  // ----------------------------------------------------------------------------
  //? 6. spread syntax 사용
  // let total = 0;
  // let realArray = [...arguments];
  // console.log(realArray);
  // realArray.forEach(function (item, index) {
  //   // console.log(item, index);
  //   total += item;
  // });
  // return total;
  // ----------------------------------------------------------------------------
  //? 7. Array.reduce 사용
  // let realArray = [...arguments];
  // return realArray.reduce((acc, item) => {
  //   return acc + item;
  // }, 0);
};

// const result = calculateTotal(1000, 500, 200, 6500, 100);

// console.log(result);
//? 익명(이름이 없는) 함수 (표현)식
// let anonymousFunctionExpression = function () {};

//? 유명(이름을 가진) 함수 (표현)식
// let namedFunctionExpression = function hello() {};

//? 콜백 함수 (표현)식
// let callbackFunctionExpression = function (callback) {
//   callback();
// };

// callbackFunctionExpression(function () {
//   console.log('콜백 함수 실행!');
// });

// ----------------------------------------------------------------------------

//? 콜백함수 예시

// const movePage = function (url, success, fail) {
//   if (url.match(/http.+www/) && typeof url === 'string') {
//     success(url);
//   } else {
//     fail();
//   }
// };

// movePage(
//   'www.naver.com',
//   function (url) {
//     console.log('성공 몇초 뒤 해당 페이지로 이동합니다.');

//     setTimeout(() => {
//       window.location.href = url;
//     }, 3000);
//   },
//   function () {
//     console.log('올바르지 않은 주소입니다.');
//   }
// );

//? 함수 선언문 vs. 함수 (표현)식

// 즉시 실행 함수 (표현)식 : 함수를 만듦과 동시에 실행 시켜줌
// Immediately Invoked Function Expression
let IIFE;

//? 변수의 보호
//? 은닉화 incapsulation(캡슐화)

const MASTER = (function () {
  var x = 10;
  let uid = 'Ajttk753!@';

  return {
    getkey() {
      return uid;
    },
    setkey(value) {
      uid = value;
    },
  };

  //? return 된 값을 담을 담을 변수를 따로 지정해줘야함(=MASTER)
  //? return '퉤';
})();

// console.log(MASTER);
console.log(MASTER.setkey('새로운 비밀번호'));
