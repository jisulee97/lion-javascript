/* ---------------------------------------------------------------------- */
/* Optional Chaining                                                      */
/* ---------------------------------------------------------------------- */

const portableFan = {
  maker: 'fromB',
  brand: 'FD221',
  type: 'neckband',
  photo: {
    static: 'https://bit.ly/3OS50UD',
    animate: 'https://bit.ly/3P8646q',
  },
  getFullName() {
    return `${this.brand}, ${this.maker}`;
  },
};

// 아래 코드는 문제가 있어 런타임 중 오류가 발생합니다.
console.log(portableFan.photos?.image);

if (portableFan.photos === 'undefined') {
  throw new Error('에러!');
}

//# json(자바스크립트의 객체 표기법)

// 오류를 발생시키지 않으려면 아래와 같이 작성해야 합니다.
// if ('photos' in portableFan) {
//   if ('animate' in portableFan.photos) {
//     console.log(portableFan.photos.animate);
//   }
// }

// 위 구문을 논리곱 연산자를 사용한 방식으로 변경해봅니다.

// 위 구문을 옵셔널 체이닝을 사용한 구문으로 변경해봅니다.

// 메서드 사용 시, 옵셔널 체이닝을 사용해봅니다.

// 객체의 프로퍼티 접근 시, 옵셔널 체이닝을 사용해봅니다.

//# sync 동기적 코드  vs  async 비동기적 코드
//@ 순서대로 실행         setTimeout 같은 메서드를 이용하여 순서대로 실행되는 것을 막음

//@ setTimeout : window 가 가지고 있는 메서드

// setTimeout(() => {
//   const button = /* html */ `
//     <button type="button">clickMe</button>
//   `;

//   document.body.insertAdjacentHTML('beforeend', button);
// }, 3000);

//@  멈추는법

// const timer = setTimeout(()=>{

//   const button = /* html */`
//     <button type="button">clickMe</button>
//   `

//   document.body.insertAdjacentHTML('beforeend',button);

// },5000)

// clearTimeout(timer)

// const button = document.querySelector('button');

// console.log(button);

// button?.addEventListener('click', function () {
//   this.style.backgroundColor = 'orange';
// });

//@ setIntervval : 반복문과 달리 시간을 지정해줄 수 있다
//@ 다른 탭으로 이동 시 반복이 멈춘다
// let count = 0;
// setInterval(() => {
//   console.log(++count);
// }, 200);

//@ 멈추는법
// let count = 0;

// const interval = setInterval(() => {
//   console.log(++count);

//   if (count > 50) {
//     clearInterval(interval);
//   }
// }, 200);

// removeEventListener(); // 재귀
