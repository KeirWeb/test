// sum(3)(1)(2)(3)========6,

// sum(3)(1,2,3)====6

// sum(3)(1)(2,3)====6

// sum(3)(1,2)(3,4)====6

// function sum(n) {
//   debugger;
//   if (n <= 0) return 0;
//   if (n === 1) return (num) => num;

//   let numbers = [];
//   function inner(...arg) {
//     numbers = [...numbers, ...arg];
//     if (numbers.length >= n) {
//       return numbers.reduce((acc, el) => acc + el);
//     } else {
//       return inner;
//     }
//   }
//   return inner;
// }
// console.log(sum(3)(2)(5, 3));

// function makeCounter() {
//   let count = 0;

//   return function () {
//     return count++;
//   };
// }

// let counter = makeCounter();
// let counter2 = makeCounter();
// console.log(counter()); // 0
// console.log(counter()); // 1

// console.log(counter2()); // ?
// console.log(counter2()); // ?

// const sum = (num) => {
//   return function (n) {
//     return num + n;
//   };
// };
// console.log(sum(5)(-1));

let x = 1;

function func() {
  console.log(x); // ?

  let x = 2;
}

func();
