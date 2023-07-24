import { diceAnimation, getNode, getNodes } from './lib/index.js';

//@ [phase-1] 주사위 굴리기
//# 1. dice animation 불러오기
//# 2. 주사위 굴리기 버튼을 클릭하면 diceAnimation 실행될 수 있도록
//#           - 주사위 굴리기 버튼을 가져온다
//#           - 이벤트 핸들러를 연결한다
//#           - 애니메이션 코드를 작성한다

//# 이벤트 위임 방식으로 버튼 가져오기
// const buttonGroup = getNode('.buttonGroup');
// function handleRollingDice(e) {
//   let target = e.target;
//   console.log(target);
// }
// buttonGroup.addEventListener('click', handleRollingDice);

const [startButton, recondButton, resetButton] = getNodes(
  '.buttonGroup > button'
);

// function handleRollingDice() {
//   setInterval(diceAnimation, 100);
// }
// startButton.addEventListener('click', handleRollingDice);

//# 3. 애니메이션 토글 제어

// function handleRollingDice(e) {
//   let isClicked = false;
//   let stopAnimation;

//   return () => {
//     if (!isClicked) {
//       stopAnimation = setInterval(diceAnimation, 100);
//     } else {
//       clearInterval(stopAnimation);
//     }

//     isClicked = !isClicked;
//   };
// }
// startButton.addEventListener('click', handleRollingDice());

//# 4. 즉시실행함수로 변경(클로저 + IIFE 를 사용한 변수 보호)

// const handleRollingDice = ((e) => {
//   let isClicked = false;
//   let stopAnimation;

//   return () => {
//     if (!isClicked) {
//       stopAnimation = setInterval(diceAnimation, 100);
//     } else {
//       clearInterval(stopAnimation);
//     }

//     isClicked = !isClicked;
//   };
// })();

// startButton.addEventListener('click', handleRollingDice);

//@ [phase-2] 레코드 리스트 control / view

//# 1. 주사위가 멈추면 기록/초기화 버튼 활성화

// 배열 구조 분해 할당

//# 과제: disableElement(node)/ enableElement(node) 함수 만들어보기

// const handleRollingDice = ((e) => {
//   let isClicked = false;
//   let stopAnimation;

//   return () => {
//     if (!isClicked) {
//       // 주사위 play
//       stopAnimation = setInterval(diceAnimation, 100);
//       recondButton.disabled = true;
//       resetButton.disabled = true;
//     } else {
//       // 주사위 stop
//       clearInterval(stopAnimation);
//       recondButton.disabled = false;
//       resetButton.disabled = false;
//     }

//     isClicked = !isClicked;
//   };
// })();

// startButton.addEventListener('click', handleRollingDice);

//# 2. hidden 속성 제어하기
// - 기록 버튼 이벤트 바인딩
// - hidden 속성 false 만들기
// - 초기화 버튼 이벤트 바인딩
// - hidden 속성 true 만들기

//# 과제:  함수 만들어보기
//# visiblElement(node)/ invisibleElement(node)
//# isDisableState(node) => true/false
//# isVisibleState(node) => true/false

const recordListWrapper = getNode('.recordListWrapper');

const handleRollingDice = ((e) => {
  let isClicked = false;
  let stopAnimation;

  return () => {
    if (!isClicked) {
      // 주사위 play
      stopAnimation = setInterval(diceAnimation, 100);
      recondButton.disabled = true;
      resetButton.disabled = true;
    } else {
      // 주사위 stop
      clearInterval(stopAnimation);
      recondButton.disabled = false;
      resetButton.disabled = false;
    }

    isClicked = !isClicked;
  };
})();

function handleRecord() {
  recordListWrapper.hidden = false;
}

function handleReset() {
  recordListWrapper.hidden = true;
  recondButton.disabled = true;
  resetButton.disabled = true;
}

startButton.addEventListener('click', handleRollingDice);
recondButton.addEventListener('click', handleRecord);
resetButton.addEventListener('click', handleReset);
