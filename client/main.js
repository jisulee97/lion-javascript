//# 묘듈 프로그래밍 => js 의 방법론

// getNode 가져오기
import { getNode, attr, bindEvent } from './lib/dom/getNode.js';

const first = getNode('#firstNumber');
const second = getNode('#secondNumber');
const result = getNode('.result');

//@ page-1

// 1. input value 값 가져오기
// 2. 두 수의 합 더하기
// 3. result 출력하기

function handleInput() {
  let firstValue = Number(first.value);
  let secondValue = Number(second.value);
  let total = firstValue + secondValue;

  clearContents(result);

  insertLast(result, total);
}

//@ page-2
// clear 버튼을 누르면 모든 글자가 초기화 되도록 만들기

const clear = getNode('#clear');

function handleClear() {
  clearContents(first);
  clearContents(second);
  clearContents(result);
  result.textContent = '-';
}

// // 1. clear 버튼 가져오기
// const clear = getNode('#clear');

// // 2. clear 버튼에 이벤트 핸들러 연결
// clear.addEventListener('click', clearInput);

// // 3. firstValue 값을 지운다
// clearContents(first);

// // 4. secondValue 값을 지운다
// clearContents(second);

// // 5. result의 값을 지운다
// clearContents(result);

// // 6. result에 - 값을 넣는다
// result.textContet = '-';

first.addEventListener('input', handleInput);
second.addEventListener('input', handleInput);
clear.addEventListener('click', handleClear);

// 이벤트 위임하여 코드 구현

// function page2(){

//   const calculator = getNode('.calculator');
//   const clear = getNode('#clear');
//   const result = getNode('.result');
//   const numberInputs = Array.from(
//     getNodes('input:not(#clear)')
//   )

//   console.log( numberInputs );

//   function handleInput(){

//     const total = numberInputs.reduce((total,input)=> total + Number(input.value),0)

//     console.log(  );

//     clearContents(result);
//     insertLast(result,total);

//   }

//   function handleClick(){

//     numberInputs.forEach(clearContents);
//     result.textContent = '-'
//   }

//   calculator.addEventListener('input',handleInput);
//   clear.addEventListener('click',handleClick);
// }
