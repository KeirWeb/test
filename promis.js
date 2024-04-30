// const promise = new Promise((res, rej) => {
//   setTimeout(() => {
//     rej("Error");
//   }, 5000);
// });

// promise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// let wait = (time) => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res();
//     }, time);
//   });
// };

// async function run() {
//   await wait(2000);
//   console.log(1);
//   await wait(2000);
//   console.log(2);
//   await wait(2000);
//   console.log(3);
// }
// run();

// const fetchUserInDB = (id) => {
//   const users = [
//     { id: 1, name: "Kirill" },
//     { id: 2, name: "Verka" },
//     { id: 3, name: "Sveta" },
//   ];
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       let user = users.find((u) => u.id === id);
//       if (user === null) {
//         rej(null);
//       } else {
//         res(user);
//       }
//     }, 2000);
//   });
// };

// fetchUserInDB(1).then((data) => console.log(data));

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("reject1");
//   }, 3000);
// });
// promise2
//   .catch((t) => t + "catch1")
//   .catch((t) => t + "catch2")
//   .then((t) => t + "then1")
//   .finally((t) => t + "finally1")
//   .then((t) => console.log(t));

// const a = async function (a, b) {
//   return a + b;
// };
// a(1, 2)
//   .then((res) => res)
//   .then((res) => res)
//   .catch((err) => console.log(err));


// create promise b a timeout
// function a() {
//     setTimeout(() => {
//         console.log('a');
//     }, 0)
// }

// function b() {
//     console.log('b');
// }

// a();

// new Promise(function (res, rej) {
//     console.log('create promise'); 
//     res();
// })
//     .then(() => {
//         setTimeout(function timer() {
//             console.log('timeout')
//         }, 0)
//     })

// b();
// 'create promise', 'b','a','timeout'

// function getPromise() {
//     return new Promise((resolve, reject) => {
//         console.log('1');
//         setTimeout(() => {
//             console.log('9');
//             resolve('10');
//             console.log('4')
//         }, 0)
//         console.log('5');
//     })
// }

// getPromise()
//     .then((res) => {
//         console.log(res);
//     })

// console.log('6')
// console.log('7')

// const pr = new Promise((resolve, reject) => {
//     console.log('0');
//     console.log('2');
//     console.log('3');
// })
// 1,5,6,7,0,2,3,9,4,10

// 1,5,6,7,0,2,3,9,4,10


console.log('1');

setTimeout(() => {
    console.log('2');
}, 500);

setTimeout(() => {
    console.log('3');
}, 0);

new Promise((resolve, reject) => {
    console.log('4');
    resolve();
    console.log('5');
})
    .then(() => {
        console.log('6');
    });

console.log('7');
async function example2() {
  console.log('10');
  await new Promise(resolve => setTimeout(resolve, 200));
  console.log('11');
}

async function example1() {
    console.log('8');
    await example2();
    console.log('9');
}



example1();

console.log('12');

// 1,4,5,7,8,10,11,9,12,6,3,2