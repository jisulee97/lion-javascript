/* ------------------------------ */
/* Browser Object Model           */
/* ------------------------------ */

/*
JavaScript가 작동하는 플랫폼은 호스트(host)라고 불립니다. 
호스트는 브라우저, 웹서버, 심지어는 커피 머신이 될 수도 있습니다. 

각 플랫폼은 해당 플랫폼에 특정되는 기능을 제공하는데, JavaScript 명세서에는 
이를 호스트 환경(host environment) 이라고 부릅니다.

호스트 환경은 JavaScript 코어에 더해 플랫폼에 특정되는 객체와 함수를 제공합니다. 
웹 브라우저는 웹 페이지를 제어하기 위한 수단을 제공하고, Node.js는 서버를 포함해 
애플리케이션 개발에 필요한 다양한 기능을 제공합니다.

브라우저 객체 모델(Browser Object Model, BOM)은 문서 이외의 모든 것을 
제어하기 위해 브라우저(호스트 환경)가 제공하는 추가 객체를 나타냅니다.
*/

/* Window 객체 ----------------------------------------------------------- */

const { alert, confirm, prompt, setTimeout, setInterval } = window;

console.log(1);
//@ 코드의 실행 구문을 강제로 변경 가능함
const timer = setTimeout(() => {
  // console.log('몇초 뒤에 해당 코드가 작동합니다.');
  console.log(2);
}, 5000);

// clearTimeout(timer);
console.log(3);

const cancelInterval = setInterval(() => {
  console.log('이 코드느 1초마다 실행되는 코드입니다.');
}, 1000);

//@ 반복 수행 종료
clearInterval(cancelInterval);

/* Location 객체 --------------------------------------------------------- */
// http://localhost:5500/index.html?type=listing&page=2#title

const { href, protocol, host, port, search, hash, replace, reload } = location;

//# 프로토콜(protocal) : http:
//# host: //localhost
//# port(포트넘버): http://localhost:5500
//# search : ?type=listing&page=2
//# pathname : http://localhost:5500/index.html
//# search(검색) :  http://localhost:5500/index.html?type=listing&page=2
//# hash : http://localhost:5500/index.html?type=listing&page=2#title
//# reload : 새로고침

//@ location.replace('페이지 주소') : 뒤로 가기가 안됨
//@ location.href('페이지 주소')  : 되돌아가기 가능

const urlParams = new URLSearchParams(location.search);

for (const value of urlParams) {
  console.log(value);
}
// for (const [key, value] of urlParams) {
//   console.log(`${key}:${value}`);
// }

/* Navigator 객체 -------------------------------------------------------- */

const { platform, userAgent, language, onLine, geolocation } = navigator;

//# platform : 브라우저가 실행되는 플랫폼 정보를 반환
//# userAgent : 브라우저와 운영체제의 정보를 반환
//# language : 브라우저에서 사용되는 언어를 반환
//# oneline : 브라우저가 온라인인지 여부를 반환
function browserName() {
  const agent = userAgent.toLowerCase();
  let browserName;

  switch (true) {
    case agent.indexOf('edge') > -1:
      browserName = 'MS edge';
      break;
    case agent.indexOf('opr') > -1:
      browserName = 'Opera';
      break;
    case agent.indexOf('chrome') > -1:
      browserName = 'chrome';
      break;
    case agent.indexOf('firefox') > -1:
      browserName = 'Mozilla Firefox';
      break;

    default:
      browserName = '혹시.. IE?';
      break;
  }

  return browserName;
}

geolocation.getCurrentPosition((data) => {
  console.log(data.coords.latitude);
  console.log(data.coords.longitude);
});

function getLocationPosition() {
  return new Promise((resolve, reject) => {
    geolocation.getCurrentPosition((data) => {
      if (!data) {
        reject({ message: '위치 서비스를 활성화 해주세요.' });
      } else {
        const { latitude, longitude } = data.coords;
        console.log(2);
        resolve({ latitude, longitude });
      }
    });
  });
}

/* Screen 객체 ----------------------------------------------------------- */

const { width, height, availWidth, availHeight, orientation } = screen;

// height : 모니터 사이즈 반환
// availHeight : 브라우저의 크기
// innerHeight : 브라우저 해상도 크기

/* History 객체 ---------------------------------------------------------- */

// 방문 내역 관리

const { back, forward, go, length, pushState, replaceState } = history;

// 브라우저에 카메라 허용 기능
navigator.mediaDevices.getUserMedia({ video: true });
