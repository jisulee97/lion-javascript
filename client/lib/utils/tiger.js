// const response = await fetch('https://pokeapi.co/api/v2/pokemon/30');
// //@ response : 통신이 된 상태들만 보여줌

// if (response.ok) {
//   const data = await response.json();
//   //@  response.json() : 원하는 결과값을 얻어낼 수 있게 해줌
//   console.log(data);
// }

//@ 함수 생성

const URL = 'https://jsonplaceholder.typicode.com/users';

const defaultOptions = {
  method: 'GET',
  body: null,
  headers: {
    'Content-Type': 'application/json',
    'Acccess-Control-Allow-Origin': '*',
  },
};

// const tiger = async (url) => {
//   const response = await fetch(url);
//   let data;

//   if (response.ok) {
//     data = response.json();
//   }

//   return data;
// };

// console.log(await tiger('https://jsonplaceholder.typicode.com/users'));

export const tiger = async (options) => {
  //@ config 안에 객체를 합성(defaultOpitons(기존 객체), options(추가한 객체))

  //@ 객체 구조 분해(url 만 빼고 나머지를 restOptions 객체로 받음)
  //^  const { url, ...restOptions } = {...defaultOptions,...options}
  //@ headers 값이 없기 때문에 headers 의 값을 가져와야 한다 => 깊은 복사
  //^ headers: {...defaultOptions.headers,...options.headers}

  const { url, ...restOptions } = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  };
  const response = await fetch(URL, restOptions);

  if (response.ok) {
    response.data = await response.json();
    // response 안의 data 키를 추가하여 값을 담음
    // console.log(response);
  }
  return response;
};

const response = await tiger({
  url: URL,
  method: 'POST',
});
const userData = response.data;
// console.log(userData);

//# tiger.get

tiger.get = (url, options) => {
  return tiger({
    url,
    ...options,
  });
};

//# tiger.post

tiger.post = (url, body, options) => {
  return tiger({
    method: 'POST',
    url,
    body: JSON.stringify(body),
    ...options,
  });
};

//# tiget.delete

tiger.delete = (url, options) => {
  return tiger({
    method: 'DELETE',
    url,
    ...options,
  });
};

//# tiget.put

tiger.put = (url, body, options) => {
  return tiger({
    method: 'PUT',
    url,
    body: JSON.stringify(body),
    ...options,
  });
};

// userData.forEach((item) => {
//   console.log(item);
// });
// console.log(await tiger('https://pokeapi.co/api/v2/pokemon/30'));
