//* [패턴]

// const xhr = new XMLHttpRequest(); // xhr 객체 생성
// xhr.open('GET', 'https://jsonplaceholder.typicode.com/users'); // 어떤 통신으로 어디서 가져다쓸건지 지정
// xhr.send(); // 전송

/* 

//@ [readystate]: 현재의 상태를 나타내줌

0: uninitalized
1: loading
2: loaded
3: interactive
4: complete

*/

// const xhr = new XMLHttpRequest(); // xhr 객체 생성

// xhr.open('GET', 'https://jsonplaceholder.typicode.com/users'); // xhr 의 open 매서드를 활용, 어떤 통신으로 어디서 가져다쓸건지 지정

// //# 이벤트를 걸어주기 전까지는 0,1 까지만 확인 가능

// xhr.addEventListener('readystatechange', () => {
//   if (xhr.status >= 200 && xhr.status < 400) {
//     if (xhr.readyState === 4) {
//       // 완벽하게 통신 성공(완료된 시점만 체크)
//       console.log('통과'); // 통신 성공
//       console.log(xhr.response); // GET 으로 가져온 결과물을 출력
//     }
//   } else {
//     console.log('실패'); // 통신 실패
//   }
// });

// //# 이벤트 성공 시 2,3,4 확인 가능(확실한 값이 떨어져야 실행)

// xhr.send(); // 전송

//@ 객체의 구조분해할당 활용하기

// const xhr = new XMLHttpRequest(); // xhr 객체 생성

// xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');

// xhr.addEventListener('readystatechange', () => {
//   const { status, readyState, response } = xhr;

//   if (status >= 200 && status < 400) {
//     if (readyState === 4) {
//       console.log(JSON.parse(response));
//     }
//   } else {
//     console.log('실패');
//   }
// });

// xhr.send();

//@ xhr 함수로 만들기

// function xhr(method, url) {
//   const xhr = new XMLHttpRequest();

//   xhr.open(method, url);
//   xhr.addEventListener('readystatechange', () => {
//     const { status, readyState, response } = xhr;

//     if (status >= 200 && status < 400) {
//       if (readyState === 4) {
//         console.log(JSON.parse(response)); // 서버로부터 가져온 값(JSON의 parse 라는 것을 돌려서)
//       }
//     } else {
//       console.log('실패');
//     }
//   });
//   xhr.send();
// }
// xhr('GET', 'https://jsonplaceholder.typicode.com/users');

//@ 가져온 정보를 랜더링 하기(callback) => 통신된 결과를 가져다가 쓰고 싶음

function xhr(method, url, onSuccess, OnFail) {
  const xhr = new XMLHttpRequest();

  xhr.open(method, url);

  xhr.addEventListener('readystatechange', () => {
    const { status, readyState, response } = xhr;

    if (status >= 200 && status < 400) {
      if (readyState === 4) {
        onSuccess(JSON.parse(response)); // 완벽하게 통신이 끝난 곳에 함수를 전달
      }
    } else {
      OnFail('실패');
    }
  });

  xhr.send();
}

//# 3번째 인수로 함수를 전달 => 함수의 body 가 xhr 의 세번째 파라미터로 전달됨
xhr(
  'GET',
  'https://jsonplaceholder.typicode.com/users',
  (result) => {
    console.log(result);
  },
  (err) => {
    console.log(err);
  }
);
