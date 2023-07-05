/* --------------------- */
/* Type Conversion       */
/* --------------------- */

/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2023;

console.log(typeof String(YEAR)); // 명시적 형 변환
console.log(typeof (YEAR + ' ')); // 암시적 형 변환

// undefined, null
let days = null;
console.log(typeof String(null));
console.log(null + '');

let undef = undefined;
console.log(typeof String(undefined));
console.log(undefined + '');

// boolean
let isClicked = true;
console.log(typeof String(isClicked));
console.log(isClicked + '');

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined
let friend;
console.log(Number(friend));

// null
let bankbook = null;
console.log(Number(bankbook));

// boolean
let cutie = false;
console.log(Number(cutie));

// string
let num = '250';
console.log(Number(num));
// 암시적 형변환
console.log(+num);
console.log(num * 1);
console.log(num / 1);

// numeric string 문자열 + 숫자열
let width = '105.3px';
console.log(Number(width));

// window 안에 내장된 기능 중 parseFloat/parseInt 를 사용하면 숫자만 도출이 가능하다
// 105.3px128317 => px 이후의 숫자들은 다 잘린다
let w = parseFloat(width);
console.log(w);

let y = parseInt(width);
console.log(y);

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들

console.log(Boolean(friend));
console.log(Boolean(bankbook));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(''));
console.log(Boolean(1));
console.log(Boolean(0));
// ! 는 부정연산
// !! 는 긍정
console.log('암시적 형 변환 : ' + !false);
