import { getNode } from '../dom/getNode.js';
import { xhrPromise } from './xhr.js';
import { insertLast } from './../dom/insert.js';

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
// let state = true; // 통신 성공 or 실패

// function delayP() {
//   // 성공이야? (약속해 알려주기로) 그럼 이거 해
//   // 실패야? (약속해 알려주기로) 그럼 이거 해

//   return new Promise((resolve, reject) => {
//     // 내장돼있는 기능
//     if (state) {
//       resolve(); //# 나는 성공!
//     } else {
//       reject(); //# 나는 실패!
//     }
//   });
// }
// console.log(delayP());
//# promise 객체 반환 => 함수이지만 delayP 자체는 객체이기 때문에 객체의 값에 접근하려면 . 을 써야 한다

// delayP().then(
//   () => {},
//   () => {}
// );

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

//# 객체 합성 mixin

// 기본값 설정

const defaultOptions = {
  shouldReject: false,
  timeout: 1000,
  data: '성공',
  errorMessage: '알 수 없는 오류가 발생했습니다.',
};

//@ shouldReject : 강제로 실패로 유도

export function delayP(options) {
  //# 원본을 파괴하지 않기 위해서 얕은 복사 후 사용(실제 데이터에는 접근 x)
  let config = { ...defaultOptions };

  if (typeof options === 'number') {
    config.timeout = options;
  }

  if (typeof options === 'object') {
    config = { ...defaultOptions, ...options };
  }

  const { shouldReject, data, errorMessage, timeout } = config;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!shouldReject) {
        resolve(data);
      } else {
        reject({ message: errorMessage });
      }
    }, timeout);
  });
}

delayP({ shouldReject: false })
  .then((res) => {
    // console.log(res);
  })
  .catch(({ message }) => {
    alert(message);
  })
  .finally(() => {
    // console.log('어쨌든 실행됩니다');
  });

//@ ===============================================================================================

//# async await
//# async : 함수가 promise 객체를 반환하도록 하는 기능
//# await : 코드의 실행 흐름 제어/ await을 만나면 promise 안에 있는 객체의 result 값을 가져온다

async function delayA() {
  return '성공';
}

const data = await delayA();

// console.log(data); // return 된 result 값을 가져옴

async function 라면끓이기() {
  delayP({ data: '물넣기' }).then((res) => {
    console.log(res);
  });

  const 스프 = await delayP({ data: '스프넣기' });
  console.log(스프);

  const 면 = await delayP({ data: '면넣기' });
  console.log(면);

  const 계란 = await delayP({ data: '계란넣기' });
  console.log(계란);

  const 접시 = await delayP({ data: '접시' });
  console.log(접시);
}

// 라면끓이기();

//# await 으로 결과값 가져오기

async function getpokemonData() {
  const data = xhrPromise.get('https://pokeapi.co/api/v2/pokemon/7');

  data.then((res) => {
    console.log(res);
  });

  const pokemon = await data;

  // console.log(pokemon.sprites['front_default']);

  insertLast(
    document.body,
    `<img src="${pokemon.sprites['back_default']}" alt="" />`
  );
}

// getpokemonData();

//# then 으로 결과값 가져오기

async function getUserData2() {
  const data = xhrPromise.get('https://pokeapi.co/api/v2/pokemon');

  data.then((res) => {
    // console.log(res);
  });
}
getUserData2();
