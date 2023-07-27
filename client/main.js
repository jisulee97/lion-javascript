import { tiger } from './lib/index.js';

const data = await tiger.get('https://jsonplaceholder.typicode.com/user');
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
