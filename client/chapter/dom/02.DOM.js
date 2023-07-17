/* --------------------------------- */
/* DOM traversal                     */
/* --------------------------------- */

/* 모든 노드에서 사용 */
// 크롬 개발자 도구 > 요소: 클릭 (span) : $0
// - parentNode : h1
// - childNodes : NodeList [text]
// - firstChild : "hello"
// - lastChild  : "hello"
// - previousSibling : #text
// - nextSibling : #text

/* 요소 노드에서만 사용 가능 */
// - parentElement
// - children
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling

/* 문서 대상 찾기 */
// - getElementById

// 성능상으로 더 좋다
const message = document.getElementById('message');

// console.log(message);

// - getElementsByTagName
// - getElementsByClassName
// - querySelector
//@ css 선택자 모두 선택 가능

// el, els
getNode('.first');

const first = getNode('.first');
const span = getNodes('span');

console.log(span);

// const first = document.querySelector('.first');
console.log(first);
// - querySelectorAll
// 구조분해할당 사용
const [firstSpan, secondSpan] = document.querySelectorAll('span');
console.log(firstSpan);
console.log(secondSpan);
// - closest
// first 에서 가장 인접한 대상을 찾는다(그 위의 부모를 찾아감)
first.closest('h1'); // 이벤트 위임에서 많이 사용

/* 문서 대상 확인 */
//# - matches : 선택자 안에 class | id 를 가지고 있는 대상이 있어?
first.matches('#message');

//# - contains : 선택자의 자식들중에 해당 element 가 있어?
first.contains(secondSpan);

// 클래스를 포함하고 있어?
// Node.classList.contains();
