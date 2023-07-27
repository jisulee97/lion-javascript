import { insertLast, tiger } from './lib/index.js';

// const data = await tiger.get('https://jsonplaceholder.typicode.com/user');
// console.log(data);

// xhr.get('http://jsonplaceholder.typicode.com/users', (res) => {
//   console.log(res);
// });

//# await 방식

// const response = await fetch(URL);
// const data = await response.json();

// console.log(data);

//# then 방식
// fetch(URL).then((result)=>{

//     result // response object
//     return result.json()
// })
// .then((result)=>{
//   console.log( result );
// })

//@ ================================ 카드 랜더링 코드 ========================================

//# 1. tiger 함수를 사용하여 user 값을 가져오기
//# 2. 함수 안으로 넣기
// 서버 어딘가에 유저의 정보를 담고 있는 데이터가 있는데 예를 들어 delete 통신을
// 했을 떄 서버에서는 지워지지만 브라우저의 ui 에서는 지워지지 않는다.
// 사용자의 새로고침 없이 리랜더링을 하도록 함수화를 함
//# 3. 유저 데이터 랜더링
//    - html template 을 만든다
//    - 유저 data 넘겨주기
//    - insertLast 사용

async function renderUserList() {
  const response = await tiger.get(
    'https://jsonplaceholder.typicode.com/users'
  );

  const userData = response.data;

  userData.forEach((item) => {
    console.log(item);
    //@ 화면에 랜더링
    const template = /*html*/ `
    <article class="user-card" data-index="user-1">
    <h3 class="user-name">kindtiger</h3>
    <div class="user-resouce-info">
      <div>
        <a class="user-email" href="mailto:tiger@euid.dev"
          >tiger@euid.dev</a
        >
      </div>
      <div>
        <a
          class="user-website"
          href="http://tiger.com"
          target="_blank"
          rel="noopener noreferer"
          >tiger.com</a
        >
      </div>
    </div>
    <button class="delete">삭제</button>
  </article>
  `;

    insertLast('.user-card-inner', template);
  });

  // console.log(userData);
}
renderUserList();
