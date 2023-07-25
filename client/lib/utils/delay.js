import { getNode } from '../dom/getNode.js';

function delay(callback, timeout = 1000) {
  setTimeout(callback, timeout);
}

// const first = getNode('.first');
// const second = getNode('.second');

// delay(() => {
//   console.log(1);
//   first.style.top = '-100px';

//   delay(() => {
//     console.log(2);
//     first.style.transform = 'rotate(360deg)';

//     delay(() => {
//       console.log(3);
//       first.style.top = '0';
//     });

//     second.style.top = '100px';
//   });
// });

//# delayp 함수를 실행하면 리턴되는 값이 promise 객체이다

function delayP() {
  return new Promise((resolve, reject) => {
    resolve('성공입니다!!');
  });
}
// promise 객체가 튀어나오기 때문에 then() 사용 가능
// resolve 의 결과를 then(result) 를 통해 출력 가능
delayP().then((result) => {
  console.log(result);
});
