/* ---------------------------------------------------------------------- */
/* String Type                                                            */
/* ---------------------------------------------------------------------- */

let message = 'less is more.';

// length 프로퍼티
let stringTotalLength = message.length;

console.log('stringTotalLength : ', stringTotalLength);

// 특정 인덱스의 글자 추출
let extractCharacter = message[10];
console.log('extractCharacter : ', extractCharacter);

// 문자열 중간 글자를 바꾸는 건 불가능
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter;

// 부분 문자열 추출
let slice = message.slice(1, 3);
console.log('slice : ', slice);

let slice2 = message.slice(8, -1);
console.log('slice2 : ', slice2); //# more. 8번째부터 slice!
//@ 뒤에를 자르고 싶다면 음수 사용
//* slice([begin[, end]])
//* end : -1을 지정하면 맨 마지막 스트링 제외

let subString = message.substring(1, 3);
console.log('subString : ', subString);

//@ 사라질 예정
let subStr = message.substr(1, 3);
console.log('subStr : ', subStr);

//# 문자열 포함 여부 확인(문자열의 위치를 찾아줌)
//# 포함돼있다면 위치를 알려주고 없다면 -1 반환
let indexOf = message.indexOf('i');
console.log('indexOf: ', indexOf);

// if(message.indezOf('p') > 0)

//# 뒤에서부터 찾고 첫번째부터 인덱스 반환
let lastIndexOf = message.lastIndexOf('s');
console.log('lastIndexOf: ', lastIndexOf);

//# 문자열 포함에 대한 여부 확인
let includes = message.includes('less');
console.log('includes: ', includes);

//# startsWith('Less') 를 시작으로 위치를 찾아서 true/false 반환
let startsWith = message.startsWith('Less');
console.log('startsWith: ', startsWith);

//# startsWith('Less') 를 끝으로 위치를 찾아서 true/false 반환
let endsWith = message.endsWith('more');
console.log('endsWith: ', endsWith);

// 공백 잘라내기
let trimLeft = message.trimLeft();
console.log('trimLeft: ', trimLeft);

let trimRight;

//# trim : 양쪽 공백을 제거
let str = '       adfsdd    ';
let trim = str.trim();
console.log('trim: ', trim);

//# 중간 공백 제거
let str2 = '       a   d f s d    d      ';
// str2.replace(/\s*/g, '');
// console.log(str2);

//# .replace(/\s*/g,'');을 분해해서 이해

// replace의 알규먼트 1(대체될 문자)은 아래와 같고
// /     : 정규표현식으로
// \s     : 스페이스를
// */g      :전체에서 찾음
// replace의 알규먼트 2(대체할 문자)는 아래와 같다
// ,''      : 빈문자

//# 중간 공백 제거 함수로 만들어보기
function normalText(string) {
  return string.replace(/\s*/g, '');
}
normalText(str);

// 텍스트 반복
let repeat = message.repeat(3);
console.log('repeat : ', repeat);

// 소문자변환
let toLowerCase = message.toLowerCase();
console.log('toLowerCase : ', toLowerCase);

// 대문자변환
let toUpperCase = message.toUpperCase();
console.log('toUpperCase : ', toUpperCase);

// 텍스트 이름 변환 유틸리티 함수
function toCamelCase(string) {
  return string.replace(/(\s|-|_)+./g, ($1) =>
    $1
      .trim()
      .replace(/(-|_)+/, '')
      .toUpperCase()
  );
}

function toPascalCase(string) {
  let name = toCamelCase(string);
  return name[0].toUpperCase() + name.slice(1);
}
