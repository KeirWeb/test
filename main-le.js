// let counter = 0;

// function foo() {
//   return () => {
//     console.log(counter++);
//   };
// }

// let test = foo();
// let test2 = foo();

// test();
// test();
// test();

// test2();
// test2();
// test2();

const pow = (x, n) => {
  if (n === 1) {
    return x;
  } else {
    return n * pow(x, n - 1);
  }
};
console.log(pow(1, 6891));
