/* --------------------- */
/* Event Handling        */
/* --------------------- */

/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

//# 1. HTML 속성 : onclick="handler()"

//* 단점 : 유지보수가 어렵다/ 태그 하나에 이벤트 하나만 처리 가능
//@ <span class="first" onclick="handler()">hello</span>
function handler() {
  console.log('HTML 속성에서 이벤트를 실행합니다');
}

//# 2. DOM 프로퍼티 : element.onclick = handler

//* 단점 : 이벤트 하나만 처리 가능/ 'onclick' 사용은 지양하자!

// const first = getNode('.first');

function handler() {
  console.log('DOM 프로퍼티에서 이벤트를 실행합니다.');
}

//@ first 라는 프로퍼티 안에 이벤트가 하나만 존재하기 때문에 복수 이벤트 핸들러 불가능!
// first.onclick = handler;
// first.onclick = handler2;

//# 3. 메서드 : element.addEventListener(event, handler[, phase])

/* 이벤트 추가/제거 --------------------------------------------------------- */

//@ 이벤트 종류 : click, mouseover, mouseover, mouseout, mousedown, mouseup

//# - addEventListener
//* 일반 함수 대비 과도하게 사용시 성능에 영향을 끼침/ 이벤트를 제거하는 코드도 필요함

function handleClick() {
  console.log('이벤트 메서드를 호출합니다.');
}
// first.addEventListener('click', handleClick);

//# - removeEventListener

// first.removeEventListener('click', handleClick);

//@ bindEvent 호출
// bindEvent('.first', 'click', handler);

//@ setTimeout 을 이용하여 이벤트 제거하기

// const remove = bindEvent('.first', 'click', handleClick);

// setTimeout(() => {
//   // first.removeEventListener('click', handleClick);
//   remove();
// }, 3000);

//# (!/mouseenter|click|mousemove|mouseout|mouseover/g.test(type))
//@ => () 안에 있는 이벤트 타입이 test 항목 자체에 없다면!

// 이벤트 객체(event object)
// 이벤트가 발생하면 브라우저는 이벤트 객체라는 것을 만듭니다
// 객체에 이벤트에 관한 상세한 정보를 넣고, 핸드러의 인수로 형태를 전달한다
const ground = getNode('.ground');
const ball = getNode('#ball');

function handleClick(e) {
  let x = e.offsetX;
  let y = e.offsetY;

  ball.style.transform = `translate(${x}px,${y}px)`;
  // ball.style.transform = `translate(${x - ball.offsetWidth / 2}px,${y - ball.offsetHeight / 2}px)`;
}
// first.addEventListener('click', handleClick);

ground.addEventListener('click', handleClick);

//# throttle : 입력 주기를 방해하지 않고, 일정 시간 동안의 입력을 모아, 정해진 시간마다 이벤트를 호출한다.

function throttle(callback, limit = 100) {
  let waiting = false;
  return function () {
    if (!waiting) {
      callback.apply(this, arguments);
      waiting = true;
      setTimeout(() => {
        waiting = false;
      }, limit);
    }
  };
}

//# debounce : 입력 주기가 끝남과 동시에 이벤트를 호출한다.

function debounce(callback, limit = 100) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback.apply(this, args);
    }, limit);
  };
}
