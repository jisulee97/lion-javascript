/* ------------------------ */
/* Event delegation         */
//# 이벤트가 많아졌을 때 하나에만 이벤트를 걸어 처리할 수 있도록!
/* ------------------------ */

/* 클래스를 사용한 위임 ---------------- */

const container = getNode('.container');

function handleDelegation(e) {
  // console.log('this'); //@ container
  // console.log(e.currentTarget); //@ container
  // console.log(this === e.currentTarget); //@ true
  //@ e.currentTarget === this (이벤트가 걸린 대상이 타겟)
  console.log(e.target); //@ 버튼 클릭 시 button 출력
  //@ e.target => (마우스가 제일 먼저 만나는 대상이 타겟)
}

/*
function handleDelegation(e) {
  let target = e.target;

  let li = target.closest('li'); //@ closest : 안에 있는 대상에서 제일 가까운 'li' 를 수집해줘! (인접한 부모)

  //^  다양한 대상을 수집하기 때문에 closeset 를 이용하여 가장 가까운 li 를 수집하는 코드를 작성

  if (!li) return;

  let className = attr(li, 'class');

  let dataName = attr(li, 'data-name');

  console.log(className);

  //@ class 로 비교

  // if (className === 'a') {
  //   console.log('A 버튼 클릭');
  // }

  // if (className === 'b') {
  //   console.log('B 버튼 클릭');
  // }

  // if (className === 'c') {
  //   console.log('C 버튼 클릭');
  // }

  // if (className === 'd') {
  //   console.log('D 버튼 클릭');
  // }

  //@ dataname 으로 비교

  if (dataName === 'A') {
    console.log('A 버튼 클릭');
  }
}
*/

function handleDelegation(e) {
  let target = e.target;

  let li = target.closest('li');

  if (!li) return;

  let className = attr(li, 'class');
  let dataName = attr(li, 'data-name');

  if (className === 'home') {
    console.log('홈 실행!');
  }
}

container.addEventListener('click', handleDelegation);

// arrow function
// const handleDelegation = (e) => {
//   // console.log('this'); // container
//   // console.log(e.currentTarget); // container
//   // console.log(this === e.currentTarget); // true
// };

container.addEventListener('click', handleDelegation);

/* 속성을 사용한 위임 ------------------ */

/* 노드를 사용한 위임 ------------------ */
