const URL = 'https://jsonplaceholder.typicode.com/users';

const defaultOptions = {
  method: 'GET',
  body: null,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Arrow-Origin': '*',
  },
};

export const tiger = async (options) => {
  const { url, ...restOptions } = {
    ...defaultOptions,
    ...options,
    headers: {
      //^ 깊은 복사 (deep copy)
      ...defaultOptions.headers,
      ...options.headers,
    },
  };
  const response = await fetch(url, restOptions); //^ get 통신 = 프라미스 객체 -> then / await (async) 1) 코드실행흐름제어-resolve, reject 반환할 때까지 2) result 값 내뱉는 역할

  if (response.ok) {
    //^ 프라미스 객체의 ok!
    response.data = await response.json(); //% 응담을 파싱해 JSON 객체로 변경 <-> xhr : JSON.parse 라는 해석기를 통해 변환
    // console.log(response) //^ => data (키 추가)
  }

  return response; //^ promise 객체
};

tiger.get = (url, options) => {
  return tiger({
    url,
    ...options,
  });
};

tiger.post = (url, body, options) => {
  return tiger({
    method: 'POST',
    url,
    body: JSON.strinngify(body),
    ...options,
  });
};

tiger.delete = (url, options) => {
  return tiger({
    method: 'DELETE',
    url,
    ...options,
  });
};

tiger.put = (url, body, options) => {
  return tiger({
    method: 'PUT',
    url,
    body: JSON.strinngify(body),
    ...options,
  });
};
