/* --------------------------- */
/* Object Methods and This     */
/* --------------------------- */

//# 객체 안에 메서드는 무조건 consise method
//# method 안의 함수는 무조건 arrow function

// 매장 주문의 결제 금액 총 합을 구하는 메서드를 구현해봅니다.

//# forEach

const shopOrder = {
  total: 0,
  date: '2023. 7. 11',
  tableIndex: 5,
  menu: [
    { name: '통 새우 돈까스', price: 13000, count: 2 },
    { name: '치즈 돈까스', price: 10000, count: 1 },
    { name: '곰곰 삼계탕', price: 20000, count: 5 },
    { name: '곰곰 해장국', price: 8000, count: 10 },
  ],
  totalPrice() {
    this.menu.forEach((item) => {
      this.total += item.price * item.count;
    });

    // return total;
  },
};

//# reduce 사용

// const shopOrder = {
//   total: 0,
//   date: '2023. 7. 11',
//   tableIndex: 5,
//   menu: [
//     { name: '통 새우 돈까스', price: 13000, count: 2 },
//     { name: '치즈 돈까스', price: 10000, count: 1 },
//     { name: '곰곰 삼계탕', price: 20000, count: 5 },
//     { name: '곰곰 해장국', price: 8000, count: 10 },
//   ],
//   totalPrice() {
//     // this.menu.forEach((item)=>{
//     //   this.total += item.price * item.count;
//     // })
//     //# reduce와 map 은 리턴값이 꼭 필요하다 forEach 는 필요 없음
//     return this.menu.reduce((acc, item) => acc + item.price * item.count, 0);
//   },
// };

// shopOrder.totalPrice();

//@ shopOrder 의 menu 에 접근하기 : shopOrder.menu[0]
//@ 금액의 총합 : shopOrder.menu[0].price + shopOrder.menu[1].price
//@ 개수를 고려한 총 합 : (shopOrder.menu[0].count * shopOrder.menu[0].price) + (shopOrder.menu[1].price * shopOrder.menu[1].count)

//# shopOrder 의 menu 안의 배열의 값들을 추출해줌
//# forEach : 배열에서만 사용 가능한 반복문
// shopOrder.menu.forEach((item) => {
//   console.log(item);
// });

//# 총합 구하기
// let total = 0;
// shopOrder.menu.forEach((item) => {
//   total += item.price;
// });
// console.log(total);

//# 개수까지 합한 총합 구하기
// let countTotal = 0;
// shopOrder.menu.forEach((item) => {
//   countTotal += item.price * item.count;
// });
// console.log(countTotal);

// 메서드와 this
// ※ this 참조는 런타임(실행) 중에 결정됩니다. 즉, 컨텍스트에 따라 달라집니다.
// ※ 다른 프로그래밍 언어 사용자는 JavaScript 언어의 this 작동 방식에 혼란스러울 수 있습니다.
//   this는 항상 메서드가 정의된 객체를 참조할 것이라고 착각합니다. 이런 개념을 'bound this'라고 합니다.
//   반면, JavaScript의 this는 런타임 중에 결정되므로 상대적으로 유연합니다.
//   JavaScript `this`의 이러한 특징이 재사용 면에서는 장점이지만,
//   이러한 유연함이 실수로 이어질 수 있어 단점이 되기도 합니다.

// 메서드 단축 구문

//# 객체의 메서드를 정의할 때 consise method 만 사용하자!

// 일반 함수 (문/식)의 this vs. 화살표 함수 식의 this

const navigationMenu = {
  name: '글로벌 내비게이션',
  items: [
    { id: 'link-g', text: 'Google', link: 'https://google.com' },
    { id: 'link-n', text: 'Naver', link: 'https://naver.com' },
  ],
  getItem(index) {
    return this.items[index];
  },
  addItem(newItem) {
    this.items.push(newItem);
    // console.log(this);
  },
};

// navigationMenu.getItem(0); // {id: 'link-g', text: 'Google', link: 'https://google.com'}

navigationMenu.addItem({
  id: 'link-l',
  text: 'Lycos',
  link: 'http://lycos.co.kr',
});

//# 화살표 함수로 사용시 문제 발생
//@ 화살표 함수 사용시 this는 전역인 window 에서 가져오기 때문에
//@ window.items.push 로 된다

// addItem: (newItem) => {
//   this.items.push(newItem);
//   console.log(this);
// }
// navigationMenu.addItem();
