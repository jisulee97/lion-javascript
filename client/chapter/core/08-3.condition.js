/* ---------------- */
/* Switch           */
/* ---------------- */

const MORNING = '아침',
  LUNCH = '점심',
  DINNER = '저녁',
  NIGHT = '밤',
  LATE_NIGHT = '심야',
  DAWN = '새벽';

let thisTime = MORNING;
/* 다양한 상황에 맞게 처리 --------------------------------------------------- */

// 조건 유형(case): '아침'
// '뉴스 기사 글을 읽는다.'
switch (thisTime) {
  case MORNING:
    console.log('인재님께 문안 인사를 드린다.');
    break;
  case LUNCH:
    console.log('인재님께 점심 인사를 드린다.');
    break;
  case DINNER:
    console.log('인재님께 저녁 인사를 드린다.');
    break;
  case LATE_NIGHT:
    console.log('인재님의 "논리적이게 질문하는 법"을 공부한다.');
    break;
  case DAWN:
    console.log('인재님의 안부를 묻는다.');
    break;

  default:
    break;
}

// 조건 유형(case): '점심'
// '자주 가는 식당에 가서 식사를 한다.'

// 조건 유형(case): '저녁'
// '동네 한바퀴를 조깅한다.'

// 조건 유형(case): '밤'
// '친구에게 전화를 걸어 수다를 떤다.'

// 조건 유형(case): '심야'
// 조건 유형(case): '새벽'
// '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'

/* switch문 → if문 변환 --------------------------------------------------- */

// switch (thisTime) {
//   case MORNING:
//     console.log('줌을 켠다');
//     break;
//   case LUNCH:
//     console.log('밥먹는 시간을 쪼개서 복습을 한다');
//     break;
//   case DINNER:
//     console.log('저녁을 먹지 않고 복습을 한다');
//     break;
//   case NIGHT:
//     console.log('유투브를 보지 않고 이듬 영상 강의를 본다');
//     break;
//   case LATE_NIGHT:
//   case DAWN:
//     console.log('잠을 자면서 다음 수업 내용을 꿈꾼다');
//     break;
// }

// if (thisTime === MORNING) {
//   console.log('줌을 켠다');
// } else if (thisTime === LUNCH) {
//   console.log('밥먹는 시간을 쪼개서 복습을 한다');
// } else if (thisTime === LATE_NIGHT || thisTime === DAWN) {
//   console.log('잠을 자면서 다음 수업 내용을 꿈꾼다');
// }

/* switch vs. if -------------------------------------------------------- */

// const day = Math.floor(Math.random() * 7);

// console.log(day);

// switch (day) {
//   case 0:
//     console.log('일');
//     break;
//   case 1:
//     console.log('월');
//     break;
//   case 2:
//     console.log('화');
//     break;
//   case 3:
//     console.log('수');
//     break;
//   case 4:
//     console.log('목');
//     break;
//   case 5:
//     console.log('금');
//     break;
//   case 6:
//     console.log('토');
//     break;
//   default:
//     console.log('일');
//     break;
// }

// 함수로 만들기 => 쪼갬
// 함수는 리턴을 만나는 순간 종료된다

// const day = Math.floor(Math.random() * 7);

function getRandom(n) {
  return Math.floor(Math.random() * n);
}

const day = getRandom(7);

function getDay(dayValue) {
  switch (dayValue) {
    case 0:
      return '일';
    case 1:
      return '월';
    case 2:
      return '화';
    case 3:
      return '수';
    case 4:
      return '목';
    case 5:
      return '금';
    case 6:
      return '토';
  }
}

console.log(getDay(day));

// 요일을 출력하는 함수
// 요일을 가지고 주말이냐? 아니냐? isWeekend 함수 만들기

function isWeekend(dayValue) {
  const today = getDay(getRandom(dayValue));

  return today === '토' || today === '일';

  // if (today === '토' || today === '일') {
  //   return true;
  // } else {
  //   return false;
  // }
}

const today = isWeekend(7);

console.log(today);
