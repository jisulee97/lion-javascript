import { insertLast } from './insert.js';

//@ 템플릿 생성 함수
function creatUserCard({
  // undefined 로 뜨는 것을 방지하기 위한 기본값 세팅
  id = '',
  name = 'tiger',
  email = 'tiget@gmail.com',
  website = 'tiger.com',
}) {
  // 구조분해할당
  // const { id, name, email, website } = data;
  const template = `
<article class="user-card" data-index="user-${id}">
  <h3 class="user-name">${name}</h3>
  <div class="user-resouce-info">
    <div>
      <a class="user-email" href="mailto:${email}">${email}</a>
    </div>
    <div>
      <a class="user-website" href="http://${website}" target="_blank" rel="noopener noreferer">${website}</a>
    </div>
  </div>
  <button class="delete">삭제</button>
</article>
`;

  return template;
}

//@ 랜더링 함수
export function renderUserCard(target, data) {
  insertLast(target, creatUserCard(data));
}
