/* -------------------- */
/* DOM Styling          */
/* -------------------- */

/* 클래스를 관리할 수 있게 해주는 DOM 프로퍼티 ------------------------------------ */

const first = getNode('.first');

// console.log((first.className = 'box second')); // setter
console.log(first.className); // getter
// console.log((first.className = 'second')); // setter

//@ - className – 클래스 전체를 문자열 형태로 반환해주는 프로퍼티로 클래스 전체를 관리할 때 유용
//@ - classList – 클래스 하나를 관리할 수 있게 해주는 메서드로 개별 클래스를 조작할 때 유용

//# add
first.classList.add('hello'); //@ 클래스 추가하기

//# remove
first.classList.remove('hello'); //@ 클래스 제거하기 => remove() 안에 빈문자열, 공백, 띄어쓰기 넣으면 에러!
// first.className = ''; //@ 클래스 다 제거됨

//# toggle
first.classList.toggle('is-active'); //@ is-active 가 있으면 넣어주고 없으면 빼줌 => boolean 값을 반환함

//# contains
console.log(first.classList.contains('hello')); //@ first 라는 클래스 안에 hello 라는 값이 포함돼있어?

//# addClass 함수
// function addClass(node, className) {
//   if (typeof node === 'string') node = getNode(node);

//   if (typeof className !== 'string') {
//     throw new TypeError(
//       'addClass 함수의 두 번째 인수는 문자 타입이어야 합니다.'
//     );
//   }
//   node.classList.add(className);
// }
addClass('.first', 'hello');

/* 스타일 변경 방법 --------------------------------------------------------- */

first.style.backgroundColor = 'orange'; // setter
//@ js 에 orange 라는 값을 할당했기 때문에 값을 가져올 수 있음
first.style.backgroundColor; // getter

// first.style.fontSize;

// - style.cssText - "style" 속성 전체에 대응하므로 스타일 전체에 대한 문자열 저장

/* 계산된 스타일 읽기 ------------------------------------------------------- */

// - getComputedStyle(element, [pseudoElement]) `읽기 전용`

// console.log(first.getComputedStyle(first).backgroundColor);
// console.log(first.getComputedStyle(first).getPropertyValue('backgroundColor')); // getter

//@ 객체의 속성에 접근할 때 . 표기법은 x => [] 사용

setCss('.first', 'color', 'pink');
getCss('.first', 'font-size');
css('.first', 'font-size');
