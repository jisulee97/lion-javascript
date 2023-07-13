function earth() {
  let water = true;
  let apple = {
    founder: 'Steve Jobs',
    ceo: 'Tim Cook',
    product: ['iphone', 'macbook', 'macStudio', 'appleWatch'],
  };
  let gravity = 10;

  //# 안에 실행되는 함수는 이름이 필요 없다(생략해서 씀)
  return function (value) {
    // console.log( apple );
    gravity = value;
  };

  // return tiger
}

const ufo = earth();

ufo(5);

const button = document.querySelector('button');

// let isClicked = true; //@ 전역 오염 ...

function handleClick() {
  let isClicked = true;

  return function () {
    if (isClicked) {
      //@ true 일때 실행
      document.body.style.backgroundColor = 'orange';
    } else {
      //@ false 일때 실행
      document.body.style.backgroundColor = 'transparent';
    }

    isClicked = !isClicked; //@ true 였던 값을 false 로 넣어줌
  };
}

button.addEventListener('click', handleClick()); //@ 실행시켜주는 것 까먹지 말자!

function useState(initValue) {
  let value = initValue;

  function read() {
    return value;
  }

  function write(overValue) {
    value = overValue;
  }

  return [read, write];
}

// setClick()
// const [click,setClick] = useState(true);
