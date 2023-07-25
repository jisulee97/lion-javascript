import { getNode } from '../dom/getNode.js';

// function delay(callback, timeout = 1000) {
//   setTimeout(callback, timeout);
// }

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

// function delayP() {
//   return new Promise((resolve, reject) => {
//     resolve('성공입니다!!');
//   });
// }
// // promise 객체가 튀어나오기 때문에 then() 사용 가능
// // resolve 의 결과를 then(result) 를 통해 출력 가능
// delayP().then((result) => {
//   console.log(result);
// });

// new 를 붙일 경우 전부 객체로 생성됨
let state = true; // 통신 성공 or 실패

function delayP() {
  // 성공이야? (약속해 알려주기로) 그럼 이거 해
  // 실패야? (약속해 알려주기로) 그럼 이거 해

  return new Promise((resolve, reject) => {
    // 내장돼있는 기능
    if (state) {
      resolve(); //# 나는 성공!
    } else {
      reject(); //# 나는 실패!
    }
  });
}
// console.log(delayP());
//# promise 객체 반환 => 함수이지만 delayP 자체는 객체이기 때문에 객체의 값에 접근하려면 . 을 써야 한다

delayP().then(
  () => {},
  () => {}
);

//@ 성공해도 실패해도 .then()은 똑같이 실행되고 (첫번째는 성공했을때 결과, 두번째는 실패했을때 실행되는 결과)
//@ 보통 실패 구문은 생략하고 .catch() 를 통해서 에러를 잡아준다
//@ 중간 부분에서 에러가 날 경우, 그 중간 에러를 잡아주기 위해서는 err 구문이 필요하다

//# 1. promise 는 promise 객체를 반환

// function delayP(shouldReject){

//   // 성공이야? (약속해 알려주기로) 그러고 나서(then) 이거 해
//   // 실패야? (약속해 알려주기로) 그러고 나서(then) 이거 해

//   return new Promise((성공,실패)=>{

//     setTimeout(() => {
//       if(shouldReject){
//         성공('통신 성공');
//       }else{
//         실패('통신 실패!!')
//       }
//     }, 5000);
//   })
// }

// // promise object

// delayP(true)
// .then((결과)=>{
//   console.log(결과);
// })
