// const filter = (arr, callback) => {
//   const res = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (callback(arr[i])) {
//       res.push(arr[i]);
//     }
//   }
//   return res;
// };

// const arr = [1, 2, 3, 4, 5];

// console.log(filter(arr, (el) => el > 2));

// const sum = (arr) => {
//   const res = [];
//   for (let i = 0; i < arr.length; i++) {
//     if ((arr[i] % 5 === 0) | (arr[i] % 3 === 0)) {
//       res.push(arr[i]);
//     }
//   }
//   return res.reduce((accumulator, currentValue) => accumulator + currentValue);
// };

// const sum = (arr) => {
//   return arr.reduce((acc, el) => {
//     if (el % 5 === 0 || el % 3 === 0) {
//       acc += el;
//     }
//     return acc;
//   }, 0);
// };
// const arr = [3, 3, 10, 7];
// console.log(sum(arr));

// class Cat {
//   name = "Murks";
//   constructor(name) {
//     this.name = name;
//   }
// }

// const murka = new Cat("Yasha");
// console.log(murka);
// console.log(murka instanceof Cat);

// const promise = new Promise((res, rej) => {
//   res("Kirill");
// });

// promise
//   .then((res) => {
//     console.log(res);
//     throw new Error("Ilia");
//   })
//   .catch((err) => console.log(err));

const toLow = (string) => {
  let arr = string.split(" ");
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].split("").splice(0, 1, arr[i][0].toLowerCase()));
  }

  return res;
};
console.log(toLow("Hello world"));
