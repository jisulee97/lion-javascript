import { tiger } from './lib/index.js';

const data = await tiger.get('https://jsonplaceholder.typicode.com/user');
console.log(data);

// xhr.get('http://jsonplaceholder.typicode.com/users', (res) => {
//   console.log(res);
// });
