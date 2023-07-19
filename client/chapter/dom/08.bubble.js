/* ---------------------------- */
/* Event bubbling & capturing   */
/* ---------------------------- */

/* 버블링 ----------------------------------------------------------------- */

//# e.stopPropagation();
// @ 이벤트 객체 안의 기능으로 정확한 대상만 이벤트 처리 가능하도록 함

const section = getNode('section');
const article = getNode('article');
const p = getNode('p');

section.addEventListener('click', () => {
  console.log('%c section', 'color:orange');
});

article.addEventListener('click', (e) => {
  e.stopPropagation();
  console.log('%c article', 'color:dodgerblue');
});

p.addEventListener('click', (e) => {
  e.stopPropagation();
  console.log('%c p', 'color:hotpink');
});

/* 캡처링 ----------------------------------------------------------------- */

// p.addEventListener(
//   'click',
//   (e) => {
//     // console.log('%c p', 'color:hotpink');
//   },
//   //! true
// );

//@ 거꾸로 올라가면서 클릭됨(버블링과 반대)

section.addEventListener(
  'click',
  () => {
    console.log('%c section', 'color:orange');
  },
  true
);

article.addEventListener(
  'click',
  (e) => {
    e.stopPropagation();
    console.log('%c article', 'color:dodgerblue');
  },
  true
);

p.addEventListener(
  'click',
  (e) => {
    e.stopPropagation();
    console.log('%c p', 'color:hotpink');
  },
  true
);
