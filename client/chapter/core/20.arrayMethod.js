/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

// Array.isArray

Array.isArray;

//# 일반함수
// function isArray(data) {
//   Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'array';
// }

//# 화살표 함수
const isArray = (data) =>
  Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'array';

//@ Object 의 힘을 빌려서 값을 자르고 변환을 해서 사용

//# 일반함수
// function isArray(data) {
//   return (
//     Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'null'
//   );
// }

//# 화살표 함수
const isNull = (data) =>
  Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'null';

/* 요소 순환 ---------------------------- */

const arr = [10, 100, 1000, 10000];

const people = [
  {
    id: 0,
    name: '김다연',
    profession: '프론트엔드 개발자',
    age: 25,
    imageSrc: 'MAksd23',
  },
  {
    id: 1,
    name: '이현주',
    profession: '수영선수',
    age: 40,
    imageSrc: 'afdfakA',
  },
  {
    id: 2,
    name: '김희소',
    profession: '물음표살인마',
    age: 30,
    imageSrc: 'fAKqi321',
  },
  {
    id: 3,
    name: '김규민',
    profession: '래퍼',
    age: 52,
    imageSrc: 'AFGq3d23',
  },
  {
    id: 4,
    name: '전진승',
    profession: '드라마평론가',
    age: 18,
    imageSrc: 'fQa15f3',
  },
];

//# forEach : 값을 반환하지 않음!

// [10,100,1000,10000]

arr.forEach((item, index) => {
  console.log(item, index);
});

//# 객체로 나오기 때문에 . 을 이용하여 객체 안의 값들에 접근할 수 있다

people.forEach((item) => {
  console.log(item.name);
});

//# forEach 보다는 이벤트 위임 event delegation 방식을 사용하는 것이 좋다!

const span = document.querySelectorAll('span');

span.forEach((item, index) => {
  item.addEventListener('click', function () {
    console.log(this, index);
  });
});

/* 원형 파괴 ----------------------------- */

// push
// pop
// unshift
// shift
//# reverse : 기존의 가지고 있던 배열의 순서를 뒤집음
// arr.reverse();
// console.log(arr);
//# splice(1,2) : 맥가이버 칼, 원하는 곳에 배열의 값을 추가/삭제 가능
arr.splice(1, 0, 5, 13);
console.log(arr);

//# sort : 그냥 쓸 시 제대로 정렬이 안 됨
//# compare function 를 사용해줘야함
//# 반환 값 < 0 : a 가 b 보다 앞에 있어야 한다
//# 반환 값 == 0 : a 와 b의 순서를 바꾸지 않는다
//# 반환 값 > 0 : b 가 a 보다 앞에 있어야 한다

arr.sort((a, b) => {
  return a - b;
});
console.log(arr);
/* 새로운 배열 반환 ------------------------ */

// concat

const user = ['선범', '효윤', '준석'];

// const newArray = arr.concat(user);
const newArray = [...arr, ...user, 'javascript', 'css'];
console.log(newArray);
// slice
const slice = arr.slice(2, 5);
console.log(slice);

//# 원본을 파괴하지 않는 배열 메서드가 새로 등장

// toSorted
const toSorted = arr.toSorted((a, b) => {
  return b - a;
});
console.log(toSorted);

// toReversed
const toReversed = arr.toReversed();
console.log(toReversed);

// toSpliced(시작위치, 제거될 개수)
const toSpliced = arr.toSpliced(2, 0, 'javascript', 'css', 'react');
console.log(toSpliced);

//# ★★ map : 기존이 항목들에서 원하는 값들만 다시 배열로 내보낼 때 쓰임 ★★
//# 값을 반환한다

const job = people.map((item, index) => {
  return `<div>${item.profession}</div>`;
});

job.forEach((item) => {
  document.body.insertAdjacentHTML('beforeend', item);
});

// document.body.insertAdjacentHTML('beforeend', job);
console.log(job);

//# map 사용 예시 1

const job1 = people.map((item, index) => {
  return /* html */ `
    <div class="userCard">
      <div class="imageField">
        <img src="${item.imageSrc}" alt="" />
      </div>
      <span>이름:${item.name}</span>
      <span>직업:${item.profession}</span>
      <span>나이:${item.age}</span>
    </div>
  `;
});

job1.forEach((item) => {
  document.body.insertAdjacentHTML('beforeend', item);
});

//# map 사용 예시 2
//@ people 자료 구조에서 나이만 모아놓은 배열이 필요하다 => 가공처리

const newAge = people.map((item) => {
  return item.age - 1;
});

// function render() {
//   return (
//     <div>{people.map((item, index) => `<div>${item.profession}</div>`)}</div>
//   );
// }

/* 요소 포함 여부 확인 ---------------------- */

// indexOf : 앞에서 찾기
console.log(arr.indexOf(10));
// lastIndexOf : 뒤에서 찾기
console.log(arr.lastIndexOf(10));
// includes
console.log(arr.includes(1000));

/* 요소 찾기 ------------------------------ */

// find : 배열 안에 특정 대상이 있다면 해당하는 아이템을 반환, 원하는 항목을 찾을 시 더 이상 반환하지 않음(하나만 반환)
const find = people.find((item) => {
  return item.id > 1;
  // console.log(item);
});
// findIndex
const findIndex = people.findIndex((item) => {
  return item.id === 3;
});
console.log(findIndex);
/* 요소 걸러내기 --------------------------- */

//# ★★ filter ★★
const filter = people.filter((item) => {
  return item.id > 2;
});
console.log(filter);
/* 요소별 리듀서(reducer) 실행 -------------- */

//# ★★ reduce ★★

const totalAge = people.reduce((acc, cur) => {
  return acc + cur.age;
}, 0);
// console.log(totalAge);

//# reduce 로 태그 만들기
const template = people.reduce(
  (htmlCode, cur) => htmlCode + `<div>${cur.name}</div>`,
  ''
);

document.body.insertAdjacentHTML('beforeend', template);
// reduceRight
/* string ←→ array 변환 ------------------ */

const str = '봉석 윤진 예나 시연 진만 정아';

//# split : 문자 → 배열 로 바꿔줌
const stringToArray = str.split(' ');
console.log(stringToArray);

//# join : 배열 → 문자 로 바꿔줌
const arrayToString = stringToArray.join('-');

console.log(arrayToString);
