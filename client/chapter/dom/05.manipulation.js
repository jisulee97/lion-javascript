/* -------------------------- */
/* DOM Manipulation           */
/* -------------------------- */

/* 노드 생성 메서드 --------------------------------------------------------- */

// - document.createElement(tagName) – 태그 이름을 사용해 새로운 요소 생성
// - document.createTextNode(value) – 새로운 텍스트 노드 생성
// - element.cloneNode(deep) – 요소 복제. deep==true일 경우 모든 자손 요소도 복제

// let div = document.createElement('div');
// div.className = 'box';
// div.textContent = '상자';

/* 노드 삽입, 삭제 메서드 ---------------------------------------------------- */

// getNode('h1').append(div);

// - node.append(노드나 문자열) – node 끝에 노드를 삽입
// - node.prepend(노드나 문자열) – node 맨 앞에 노드를 삽입
// - node.before(노드나 문자열) – node 이전에 노드를 삽입
// - node.after(노드나 문자열) – node 다음에 노드를 삽입
// - node.replaceWith(노드나 문자열) – node를 대체
// - node.remove() – node를 제거

/* '오래된' 메서드 ----------------------------------------------------------- */

// - parent.appendChild(node)
// - parent.insertBefore(node, nextSibling)
// - parent.removeChild(node)
// - parent.replaceChild(newElement, node)

//# 특정 위치에 삽입 --------------------------------------------------------- */

//@ - insertAdjacentHTML
//@ 사용법 : - elementNode.insertAdjacentHTML(어디에?, 값);
//@ 타겟.insertAdjacentHTML('위치','랜더링 항목')

const body = document.body;
//@ 대상을 잡고 대상의 끝에 div 값을 뿌리겠다!
// body.insertAdjacentHTML('beforeend', '<div class="box">상자</div>');

// - insertAdjacentElement
// - insertAdjacentText

// - "beforebegin" – elem 바로 앞에 html을 삽입
// - "afterbegin" – elem의 첫 번째 자식 요소 바로 앞에 html을 삽입
// - "beforeend" – elem의 마지막 자식 요소 바로 다음에 html을 삽입
// - "afterend" – elem 바로 다음에 html을 삽입

const h1 = getNode('h1');

const template = /*html*/ `<div class="box">${10 + 30}</div>`;
//@ 대상의 뒤에
// h1.insertAdjacentHTML('beforeend', '<div class="box">상자</div>');
//@ 대상의 앞에
h1.insertAdjacentHTML('beforebegin', template);

const data = ['빨래하기', '게임하기', '유튜브 보기', '산책하기'];

//@ forEach => 반환 x
//@ reduce => 아무거나 반환

//@ fliter => 배열 반환
//@ map => 배열 반환

const todo = getNode('.todo');

// 1. 태그를 생성하기
`<li>${data[0]}</li>`;

// 2. 태그 안에 아이템 값 넣기

data.map((item) => {
  return `<li>${item}</li>`;
});

// 3. 생성된 태그를 내보내기(배열)

const todoList = data.map((item) => {
  return `<li>${item}</li>`;
});
console.log(todoList);

//@ todo.insertAdjacentHTML('beforeend', todoList); => 배열을 랜더링하기 때문에 , 까지 다 출력
// 4. 내보낸 배열 순환하기

todoList.forEach((item) => {
  // console.log(item); //@ => pure text
  // todo.insertAdjacentHTML('beforeend', item);
  insertLast(todo, item);
});

// 5. 반복문 안에서 랜더링 하기

insertLast('.todo', '<li>문자하기</li>');

// 6. 랜더링

//# todo.insertAdjacentHTML('beforeend', item) 유틸함수

// function insertLast(node, text) {
//   if (typeof node === 'string') node = getNode(node);
//   if (node.nodeType !== document.ELEMENT_NODE) {
//     // (node.nodeType !== 1)
//     throw new ReferenceError(
//       'insertLast 함수의 첫 번째 인수는 ELEMENT NODE 이어야 합니다.'
//     );
//   }
//   node.insertAdjacentHTML('beforeend', text);
// }
// insertLast('.todo', '<div>문자</div>');
