/* --------------- */
/* While Loop      */
/* --------------- */

// let repeat = 0;
// while (repeat < 10) {
//   console.log(repeat);

//   repeat++;
// }

const frontEndDev = [
  'HTML',
  'CSS',
  'SVG',
  'JavaScript',
  'jQuery',
  'React',
  'Redux',
];

/* 프론트엔드 개발 집합 항목 출력 ---------------------------------------------- */

// console.log(frontEndDev[0]);
// console.log(frontEndDev[1]);
// console.log(frontEndDev[2]);
// console.log(frontEndDev[3]);
// console.log(frontEndDev[4]);
// console.log(frontEndDev[5]);
// console.log(frontEndDev[6]);

/* 프론트엔드 개발 집합을 순환해서 각 아이템을 Console 패널에 출력 -------------------- */

// while 문 (순환 : 순방향)
// let i = 0;
// while (i < frontEndDev.length) {
//   let value = frontEndDev[i];

//   console.log(value);

//   i++;
// }

// while 문 (역순환 : 역방향)

// let k = frontEndDev.length - 1;
// while (k >= 0) {
//   let value = frontEndDev[k];
//   console.log(value);
//   --k;
// }

// pop: 배열을 잘라내기 때문에 원본이 파괴됨
// 그렇기 때문에 배열을 복사해서 사용함 : spread syntax or slice 사용

// let copyArray = frontEndDev.slice(); // old
let copyArray = [...frontEndDev]; // new

while (copyArray.length) {
  console.log(copyArray.shift());
}

// 성능 진단 : 순환 vs. 역순환
