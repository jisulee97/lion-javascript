/* ------------------------------------ */
/* HTML Attributes vs. DOM Properties   */
/* ------------------------------------ */

/* HTML 속성 ------------------------------------------------------------- */

// 브라우저는 HTML 태그를 해석해 DOM 객체를 만들 때 HTML 표준 속성을 인식하고,
//@ 이 표준 속성을 사용해 DOM 프로퍼티를 생성합니다. 표준 속성이 아닌 경우,
//@ 이에 매핑하는 DOM 프로퍼티가 생성되지 않습니다.
// 예를 들어 body 자체에 속성 값이 정의돼있다면 자바스크립트 엔진이 읽어서 돔 객체의 프로퍼티로 만들어줌
// HTML 속성 값은 항상 문자열입니다.

const first = getNode('.first'); // 돔을 탐색

console.dir(first); // 객체로 출력
console.dir(first.id); // first 의 id 로 접근
console.dir(first.className); // first 의 class 로 접근시 undefined 가 출력
//@ => js 에는 class 라는 문법이 있기 때문에 className 이라고 접근 해야 값이 출력된다

/* DOM 프로퍼티 ----------------------------------------------------------- */

//@ 비표준 속성을 사용할 시 프로퍼티로 사용 불가 ex) some='h1' 일 경우 body.some 으로 접근 불가능
// DOM 노드(DOM node)는 JavaScript 객체입니다.
// DOM 프로퍼티와 메서드는 일반 JavaScript 객체처럼 행동하므로 아래와 같은 특징을 보입니다.
// - 어떤 값이든 가질 수 있습니다.
// - 대·소문자를 구분하므로 `elem.nodeType`이 아닌, `elem.NoDeTyPe`는 동작하지 않습니다.
// - DOM 프로퍼티는 HTML 속성과 달리 값이 항상 문자열이 아닙니다.

//# 속성 = HTML 안에 쓰임
//# 프로퍼티 = DOM 객체 안에 쓰임

/* DOM 프로퍼티 검토 ------------------------------------------------------- */

//@ - elementNode.hasAttribute(name) – 속성 존재 여부 확인 / 표준, 비표준 따지지 않고 속성이 있는지만 체크
//@ - elementNode.getAttribute(name) – 속성값을 가져옴
//@ - elementNode.setAttribute(name, value) – 속성값을 변경함
//@ - elementNode.removeAttribute(name) – 속성값을 지움
//@ - elementNode.attributes – 열거 가능한(iterable) 속성 집합을 반환함

console.log(first.hasAttribute('class')); //# first 안에 class 라는 속성이 있니?
console.log(first.getAttribute('class')); //# first 안에 class 라는 속성을 가져와줘!
first.setAttribute('title', '메세지'); //# first 안에 title 를 메세지로 변경
// first.setAttribute('class', 'second'); //# first 안에 class 를 second로 변경 => 기존의 값을 지워버리기 때문에 위험
first.removeAttribute('title'); //# first 안에 있는 title 속성을 제거
console.log(first.attributes); //# first 안에 있는 모든 값들을 객체로 변경해줌

//# getAttribute 함수

// function getAttr(node, prop) {
//   //@ 1. 넘어온 대상이 문자인지를 체크(typeof 로 확인하기)
//   //@ 2. node 자체는 문자이고 element 가 아니기 때문에 getNode 함수를 이용하여 변환 후 사용해야함
//   if (typeof node === 'string') {
//     node = getNode(node);
//   }
//   return node.getAttribute(prop);
// }
// getAttr('.first', 'id');

//# setAttribute 함수

// function setAttr(node, prop, value) {
//   if (typeof node === 'string') {
//     node = getNode(node);
//   }
//   if (typeof prop !== 'string') {
//     throw new Error('setAttr 함수의 두 번째 인수는 문자 타입이어야 합니다.');
//   }
//   //@ setAttr('.first', name', 'play')=> 비표준으로 넣고 싶을 때 data- 를 붙여서 세팅해야함
//   //@ [] 로 표시한 이유 : 계산된 프로퍼티를 사용하기 위해
//   //! setAttr('.first', 'class', '인사멘트') 로 설정 시 data-class 로 설정되기 때문에 '!== class' 라는 조건 추가
//   if (!node[prop] && prop !== 'class' && prop !== 'title') {
//     node.dataset[prop] = value;
//     return;
//   }
//   //@ 기능을 수행한 것 뿐(값만 세팅) 값을 반환할 필요는 없기 때문에 return 은 필요가 없다!
//   node.setAttribute(prop, value);
// }
// setAttr('.first', 'title', '인사멘트');

//# attribute 함수
//@ value 가 있느냐 없느냐에 따라 getter/setter 로 분류
//@ getAttr 함수에 value 값이 없다면 undefined 가 반환되고 (!value) 라는 조건을 만나면 !value === false 라는 조건이
//@ 만들어지고 결국 true 가 되어 getAttr() 함수가 실행된다!
// function attr(node, prop, value) {
//   // if (!value) {
//   //   return getAttr(node, prop);
//   // } else {
//   //   setAttr(node, prop, value);
//   // }
//   // return !value ? getAttr(node,prop) : setAttr(node,prop,value);
// }
// attr();

//# 화살표 함수로 변경

//const arrowAttr = (node, prop, value) => !value ? getAttr(node, prop) : setAttr(node, prop, value);

/* 비표준 속성, 프로퍼티 설정 ------------------------------------------------- */

//@ data-* 속성은 커스텀 데이터를 안전하고 유효하게 전달해줍니다.
//@ data-* 속성을 사용하면 읽기 쉽고, 수정도 손쉽습니다.

// - elementNode.dataset

console.log(first.dataset.tabIndex); // getter
console.log((first.dataset.animation = 'paused')); // setter
