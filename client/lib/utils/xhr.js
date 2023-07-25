//* [패턴]

// const xhr = new 0(); // xhr 객체 생성
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

function xhr(method, url) {
  const xhr = new XMLHttpRequest();

  xhr.open(method, url);
  xhr.addEventListener('readystatechange', () => {
    const { status, readyState, response } = xhr;

    if (status >= 200 && status < 400) {
      if (readyState === 4) {
        console.log(JSON.parse(response)); // 서버로부터 가져온 값(JSON의 parse 라는 것을 돌려서)
    } else {
      console.log('실패');
    }
  });
  xhr.send();
}
xhr('GET', 'https://jsonplaceholder.typicode.com/users');

//@ 가져온 정보를 랜더링 하기(callback) => 통신된 결과를 가져다가 쓰고 싶음

// function xhr(method, url, onSuccess, onFail, body, headers) {
//   const xhr = new XMLHttpRequest();

//   xhr.open(method, url);
//   //# Content-Type 을 application 형식의 json 으로 전달해줘라 => 이 내용을 서버가 전달 받고 해석해줌
//   // xhr.setRequestHeader('Content-Type', 'application/json');
//   //# setRequestHeader(key,value) 를 통해서 xhr 에게 전달 => xhr 안에 내장된 메서드

//   //# header 가 객체이기 때문에 안에 값들을 forEach 를 통해 뽑아냄(key, value)
//   Object.entries(headers).forEach(([key, value]) => {
//     xhr.setRequestHeader(key, value);
//   });

//   xhr.addEventListener('readystatechange', () => {
//     const { status, readyState, response } = xhr;
//     if (readyState === 4) {
//       if (status >= 200 && status < 400) {
//         {
//           onSuccess(JSON.parse(response)); // 완벽하게 통신이 끝난 곳에 함수를 전달
//         }
//       } else {
//         OnFail('실패');
//       }
//     }
//   });

//   xhr.send(JSON.stringify(body)); // body 라는 객체를 문자화를 통해 문자값을 전달해줌
//   // 설정하지 않을 시 단순 문자로 받아짐
// }

// //# 3번째 인수로 함수를 전달 => 함수의 body 가 xhr 의 세번째 파라미터로 전달됨
// xhr(
//   'POST',
//   'https://jsonplaceholder.typicode.com/users',
//   (result) => {
//     console.log(result);
//   },
//   (err) => {
//     console.log(err);
//   },
//   {
//     name: 'tiger',
//     age: 32,
//   },
//   {
//     // header 의 key, value
//     'Content-Type': 'application/json',
//     'Access-Control-Allow-Origin': '*',
//     //# 나는 내 주소만 가져오는게 아니라 다른 사이트에서도 주소를 가져올거야!
//   }
// );

//@ 인자들을 객체로 받아주는 코드로 변경

// function xhr(options) {
//   // method, url, onSuccess, OnFail, body, headers

//   // const { method = 'GET', url, onSuccess, OnFail, body, headers } = options;
//   // const { method = 'GET', url, onSuccess, OnFail, body, headers } = options; // 구조 분해 할당으로 options에 넣어줌

//   //# 키의 기본값을 지정해줌
//   const {
//     method = 'GET',
//     url = '',
//     onSuccess = null,
//     onFail = null,
//     body = null,
//     headers = {
//       'Content-Type': 'application/json',
//       'Access-Control-Allow-Origin': '*',
//     },
//   } = options;

//   const xhr = new XMLHttpRequest();
//   xhr.open(method, url);

//   Object.entries(headers).forEach(([key, value]) => {
//     xhr.setRequestHeader(key, value);
//   });

//   xhr.addEventListener('readystatechange', () => {
//     const { status, readyState, response } = xhr;
//     if (readyState === 4) {
//       if (status >= 200 && status < 400) {
//         onSuccess(JSON.parse(response));
//       } else {
//         onFail('실패');
//       }
//     }
//   });

//   xhr.send(JSON.stringify(body));
// }

// xhr({
//   method: 'GET',
//   url: 'https://jsonplaceholder.typicode.com/users',
//   onSuccess: (result) => {
//     result;
//   },
//   onFail: (err) => {
//     err;
//   },
//   body: {
//     name: 'tiger',
//   },
//   headers: {
//     'Content-Type': 'application/json',
//     'Access-Control-Allow-Origin': '*',
//   },
// });

// xhr({
//   url:'https://jsonplaceholder.typicode.com/users',
//   onSuccess(result){
//     console.log( result );
//   },
//   onFail(err){
//     console.log( err );
//   },
//   body:{
//     name:'tiger'
//   },
// });

//@ 함수의 매개변수를 객체로 넣어주기 + 함수화하기

//# 가장 큰 함수인 xhr 만 내보냄

export function xhr({
  method = 'GET',
  url = '',
  onSuccess = null,
  onFail = null,
  body = null,
  headers = {
    'Content-Type': 'application.json',
    'Access-Control-Allow-Origin': '*',
  },
} = {}) {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url);

  Object.entries(headers).forEach(([key, value]) => {
    xhr.setRequestHeader(key, value);
  });

  xhr.addEventListener('readystatechange', () => {
    const { status, readyState, response } = xhr;
    if (readyState === 4) {
      if (status >= 200 && status < 400) {
        onSuccess(JSON.parse(response));
      } else {
        onFail('실패');
      }
    }
  });

  xhr.send(JSON.stringify(body));
}

// method, url, onSuccess, onFail, body, headers

// xhr({
//   url:'https://jsonplaceholder.typicode.com/users',
//   onSuccess(result){
//     console.log( result );
//   },
//   onFail(err){
//     console.log( err );
//   },
//   body:{
//     name:'tiger'
//   },
// });

//# 1. 자바스크립트의 함수는 객체이다
//# 2. 사용자 입장 : 쉽게 쓰고 싶다
//# 3. 설계자 => 함수 안에 메서드(객체 안에 들어있는 함수)를 넣어버림

//# jsDoc: 함수에서 정의한 매개변수들이 뭔지를 알려주는 주석
/**
 *
 * @param {string} url 서버와 통신할 주소
 * @param {function} onSuccess 서버와 통신 성공시 실행될 콜백 함수
 * @param {function} onFail 서버와의 통신 실패시 실행될 콜백 함수
 * @return server data
 */

//@ xhr.get();

xhr.get = (url, onSuccess, onFail) => {
  xhr({
    url,
    onSuccess,
    onFail,
  });
};

//# 함수 사용

// xhr.get(
//   'https://jsonplaceholder.typicode.com/users',
//   (result) => {
//     console.log(result);
//   },
//   (err) => {
//     console.log(err);
//   }
// );

//@ xhr.post();

xhr.post = (url, body, onSuccess, onFail) => {
  xhr({
    method: 'POST',
    url,
    body,
    onSuccess,
    onFail,
  });
};

//@ xhr.put();

xhr.put = (url, body, onSuccess, onFail) => {
  xhr({
    method: 'PUT',
    url,
    body,
    onSuccess,
    onFail,
  });
};

//@ xhr.delete();

xhr.delete = (url, onSuccess, onFail) => {
  xhr({
    method: 'DELETE',
    url,
    onSuccess,
    onFail,
  });
};

//@ ======================== 추가 설명 ====================================================================

//# xhr.send(JSON.stringify(body));
//^ => {name:'tiger} 라는 객체를 그냥 전달할 시 Ajax 엔진은 저 값을 받지 않는다
//^ 모든 부분을 다 문자로 받자고 룰을 정해둔 것

//# onSuccess(JSON.parse(response));
//^ => 문자로 받은 값들을 다시 데이터화(객체화) 시킴

//# 'Access-Control-Allow-Origin': '*';
//^ 호스트가 다르든 상관 없이 모든 사이트를 다 가져올거야(모든 권한 허용)
//^ 이래도 CORS 오류가 뜬다면 서버 개발자가 권한을 막아둔것이기 때문에 서버 개발자의 허용이 필요하다!

// export function xhr({
//   method = 'GET',
//   url = '',
//   onSuccess = null,
//   onFail = null,
//   body = null,
//   headers = {
//     'Content-Type': 'application.json',
//     'Access-Control-Allow-Origin': '*',
//   },
// } = {}) {
//# xhr 에 값이 안 들어올 경우 객체로 쓰겠다(기본값이라 써도 그만 안 써도 그만!)
