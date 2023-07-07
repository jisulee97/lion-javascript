/* ---------------- */
/* For In Loop      */
/* ---------------- */

const javaScript = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2023,
};

// in문 : 객체 안에 내가 원하는 값(property)가 있어?

const key = 'hasOneProperty';

// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?

Object.prototype.nickName = 'tiger';

// 객체 자신의 속성인지 확인하는 방법
// - "자신의 속성을 가지고있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?

// javaScript.hasOwnProperty(key);

// console.log(javaScript.hasOwnProperty(key));

// hasOneProperty 를 객체의 일부로 넣는 순간 본질을 잃어버리고 객체에서 부여한
// 기능을 가지게 된다

// js 엔진 안의 진짜 객체에 접근하는 방법 : Object.prototype
// 객체, 함수, 배열, 숫자, 문자 등은 각자의 능력이 있다
// 서로 다른 능력을 빌려쓸 때 쓰는 매서드 : call

console.log(Object.prototype.hasOwnProperty.call(javaScript, key));

for (let key in javaScript) {
  // console.log(key);
}
// javascript 안에 없는 객체까지 조회가 됨

for (let key in javaScript) {
  if (Object.prototype.hasOwnProperty.call(javaScript, key)) {
    // console.log(key);
  }
}

// Object.prototype => 줄여쓰기 ({})
for (let key in javaScript) {
  if ({}.hasOwnProperty.call(javaScript, key)) {
    // console.log(key);
  }
}

// for ~ in 문
// - 객체 자신의 속성만 순환하려면?

// - 배열 객체 순환에 사용할 경우?

const tens = [10, 100, 1000, 10000];

for (let key in tens) {
  console.log(tens[key]);
}

// for ... in : 객체를 순환하는 용도로는 사용이 가능하지만,
// 순서가 중요한 배열은 권장하지 않는다
// Array.prototype.forEach, for...of 를 권장
