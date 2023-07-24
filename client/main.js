import { jujeobData } from './data/data.js';
import {
  clearContents,
  getNode,
  getRandom,
  insertLast,
  isNumericString,
  addClass,
  removeClass,
} from './lib/index.js';

//# 1. 주접 떨기 버튼을 클릭할 수 있는 핸들러를 연결해주세요.
//# 2. namdField 에 있는 값을 가져와주세요
//# 3. 주접 데이터 가져오기
//# 4. 주접데이터에서 랜덤한 주접 하나를 가져오기

//@ [page 1]

const submit = getNode('#submit');
const nameField = getNode('#nameField');
const resultArea = getNode('.result');

// function handleSubmit(e) {
//   e.preventDefault();

//   let name = nameField.value;
//   const list = jujeobData(name);
//   const pick = list[getRandom(list.length)];

//   clearContents(resultArea);
//   insertLast(resultArea, pick);
// }
// submit.addEventListener('click', handleSubmit);

//@ [page 2]
//# 1. 아무 값도 받지 못 했을 때 예외 처리
//# 2. 공백 문자를 받았을 때 예외처리  replace => regEXP
//# 3. 숫자형 문자를 받았을 때 (e.g  123, 기안84)

// function handleSubmit(e) {
//   e.preventDefault();

//   let name = nameField.value;
//   const list = jujeobData(name);
//   const pick = list[getRandom(list.length)];

//   if (!name || name.replace(/\s*/g, '') === '') {
//     console.log('이름이 없어요!');
//     return;
//   }

//   if (!isNumericString(name)) {
//     console.log('숫자 타입 입니다');
//     return;
//   }

//   clearContents(resultArea);
//   insertLast(resultArea, pick);
// }
// submit.addEventListener('click', handleSubmit);

//@ [page 3]
//# 1. 잘못된 정보를 입력 받으면 사용자에게 알려주세요.

function handleSubmit(e) {
  e.preventDefault();

  let name = nameField.value;
  const list = jujeobData(name);
  const pick = list[getRandom(list.length)];

  if (!name || name.replace(/\s*/g, '') === '') {
    console.log('이름이 없어요!');

    addClass('.alert-error', 'is-active');

    setTimeout(() => {
      removeClass('.alert-error', 'is-active');
    }, 2000);

    return;
  }

  if (!isNumericString(name)) {
    console.log('숫자 타입 입니다');
    return;
  }

  clearContents(resultArea);
  insertLast(resultArea, pick);
}
submit.addEventListener('click', handleSubmit);
