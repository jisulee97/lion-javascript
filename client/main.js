import { diceAnimation, getNode, getNodes } from './lib/index.js';

//# [phase-1] 주사위 굴리기
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

const handleRollingDice = ((e) => {
  let isClicked = false;
  let stopAnimation;

  return () => {
    if (!isClicked) {
      stopAnimation = setInterval(diceAnimation, 100);
    } else {
      clearInterval(stopAnimation);
    }

    isClicked = !isClicked;
  };
})();

startButton.addEventListener('click', handleRollingDice);
