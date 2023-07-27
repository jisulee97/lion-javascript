/* global gsap*/

import {
  insertLast,
  tiger,
  getNode as $,
  renderUserCard,
  changeColor,
  delayP,
  renderSpinner,
  renderemptyCard,
  attr,
  clearContents,
} from './lib/index.js';

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
//# [page 1]
//# 1. tiger 함수를 사용하여 user 값을 가져오기
//# 2. 함수 안으로 넣기
// 서버 어딘가에 유저의 정보를 담고 있는 데이터가 있는데 예를 들어 delete 통신을
// 했을 떄 서버에서는 지워지지만 브라우저의 ui 에서는 지워지지 않는다.
// 사용자의 새로고침 없이 리랜더링을 하도록 함수화를 함
//# 3. 유저 데이터 랜더링
//    - html template 을 만든다
//    - 유저 data 넘겨주기
//    - insertLast 사용
//# 4. 함수 분리

//# [page 2]
//# 1. 에러가 발생했을 때 empty svg 를 생성하고 랜더링 하기
const userCardInner = $('.user-card-inner');

async function renderUserList() {
  renderSpinner(userCardInner);
  try {
    await delayP({ timeout: 2000 });

    gsap.to('.loadingSpinner', {
      opacity: 0,
      onComplete() {
        $('.loadingSpinner').remove();
      },
    });
    const response = await tiger.get('http://localhost:3000/users');
    const userData = response.data;

    userData.forEach((item) => renderUserCard(userCardInner, item));

    changeColor('.user-card');

    gsap.to('.user-card', {
      x: 0,
      opacity: 1,
      stagger: 0.1,
    });
  } catch (err) {
    console.log(err);
    renderemptyCard(userCardInner);
  }
}

renderUserList();

// 버튼을 클릭 했을 때 해당 article 의 id 값을 가져옴
//  - 이벤트 위임
//  - button 선택하기 -> 클릭한 대상의 가장 가까운 ... method
//  - attr(), dataset
// console.log(article.dataset.index);
// console.log(attr(article, 'data-index'));

function handleDelete(e) {
  const button = e.target.closest('button');
  const article = e.target.closest('article');

  if (!article || !button) return;

  // DELETE 통신 시 URL 뒤에 숫자만 떨어져야 하는데 user-1 이런식으로 떨어지기 때문에 id 값만 떨어지게 slice 를 사용하여 잘라줌
  const id = attr(article, 'data-index').slice(5);
  // console.log(id);

  tiger.delete(`http://localhost:3000/users/${id}`).then(() => {
    // 컨텐츠 항목 전체 지우기
    clearContents(userCardInner);
    renderUserList();
  });
}
userCardInner.addEventListener('click', handleDelete);
