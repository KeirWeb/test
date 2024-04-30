// function makeCounter() {
//   let count = 0;

//   return function() {
//     return count++; // есть доступ к внешней переменной "count"
//   };
// }

// let counter = makeCounter();


// console.log(counter());
// console.log(counter());
// console.log(counter()); 




// function f() {
//   let value = Math.random();

//   return function() { alert(value); };
// }

// // 3 функции в массиве, каждая из которых ссылается на лексическое окружение
// // из соответствующего вызова f()
// let arr = [f(), f(), f()];


// let value = "Сюрприз!";

// function f() {
//   let value = "ближайшее значение";

//   function g() {
//     debugger; // в консоли: напишите alert(value); Сюрприз!
//   }

//   return g;
// }

// let g = f();
// g();


//задачи 

// let name = "John";

// function sayHi() {
//   console.log("Hi, " + name);
// }

// name = "Pete";

// sayHi(); // что будет показано: "John" или "Pete"?




// function makeWorker() {
//   let name = "Pete";

//   return function() {
//     console.log(name);
//   };
// }

// let name = "John";

// // создаём функцию
// let work = makeWorker();

// // вызываем её
// work(); // что будет показано?


// function makeCounter() {
//   let count = 0;

//   return function() {
//     return count++;
//   };
// }

// let counter = makeCounter();
// let counter2 = makeCounter();

// console.log(counter())
// console.log(counter())

// console.log(counter2())
// console.log(counter2())


// function Counter() {
//   let count = 0;

//   this.up = function() {
//     return ++count;
//   };
//   this.down = function() {
//     return --count;
//   };
// }

// let counter = new Counter();

// console.log( counter.up() ); // ?
// console.log( counter.up() ); // ?
// console.log( counter.down() ); // ?


// let phrase = "Hello";

// if (true) {
//   let user = "John";

//   function sayHi() {
//     console.log(`${phrase}, ${user}`);
//   }
// }

// sayHi();


// let phrase = "Hello";

// if (true) {
//   let user = "John";

//   let sayHi=function () {
//     console.log(`${phrase}, ${user}`);
//   }
// }

// sayHi();


// const sum =(num1)=>{
// 	return ( num2)=>{
// 		return num1+num2
// 	}
// }

// sum(1)(2) = 3
// sum(5)(-1) = 4


// console.log(sum(1)(2));  
// console.log(sum(5)(-1));  


// let x = 1;

// function func() {
//   console.log(x); // ?

//   let x = 2;
// }

// func();


// let x = 1;

// function func() {
//   console.log(x); // ?

//   let x = 2;
// }

// func();


// const inBetween=(num1,num2)=>{
// 	return (x)=>{
// 		return x>=num1& x<=num2
// 	}
// }

// const inArray=(arr)=>{
// 	return(x)=>{
// 		return arr.includes(x)
// 	}

// }

// /* .. ваш код для inBetween и inArray */
// let arr = [1, 2, 3, 4, 5, 6, 7];

// console.log( arr.filter(inBetween(3, 6))) // 3,4,5,6
// console.log( arr.filter(inArray([1, 2, 10])) ); // 1,2

