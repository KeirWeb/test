
// function test(){
//   function testThis(){
//     console.log(this);
//   }
//   return testThis

// }

// test()() 


// const dog={
//   name: 'Chester',
//   breed: 'beagle',
//   intro: function(){
//     console.log(this);
//   }

// }

// dog.intro()


// var obj1 = {
//   hello: function() {
//     console.log('Hello world');
//     return this;
//   },
//   obj2: {
//       breed: 'dog',
//       speak: function(){
//             console.log('woof!');
//             return this;
//         }
//     }
// };

// console.log(obj1.hello());
// console.log(obj1.obj2.speak());

// var objReg = {
//   hello: function() {
//     return this;
//   }
// };
 
// var objArrow = {
//     hello: () => this
// };

// console.log(objReg.hello())
// console.log(objArrow.hello());



// function test() {
//   'use strict';
//   return this;
// }

// console.log( test() );
// //функция возвращает undefined, а не объект Window



// var dog = {
//   breed: 'Beagles',
//   lovesToChase: 'rabbits'
// };

// function chase() {
//   console.log(this.breed + ' loves chasing ' + this.lovesToChase + '.'); 
// }

// dog.foo = chase;
// dog.foo(); // в консоль попадёт Beagles loves chasing rabbits.

// chase(); //так эту функцию лучше не вызывать


// // Функция-конструктор
// var Friend = function(name, password, interests, job){
//   this.fullName = name;
//   this.password = password;
//   this.interests = interests;
//   this.job = job;
// };

// function sayHello(){
//    // раскомментируйте следующую строчку, чтобы узнать, на что указывает this
//    console.log(this,'say'); 
//   return `Hi, my name is ${this.fullName} and I'm a ${this.job}. Let's be friends!`;
// }

// // Мы можем создать один или несколько экземпляров объекта типа Friend, используя ключевое слово new
// var john = new Friend('John Smith', 'badpassword', ['hiking', 'biking', 'skiing'], 'teacher'); 

// // console.log(john); 

// // // Назначим функцию ключу greeting объекта john
// john.greeting = sayHello; 

// // // Вызовем новый метод объекта
// console.log( john.greeting() ); 

// // // Помните о том, что sayHello() не стоит вызывать как обычную функцию
// // console.log( sayHello() ) ;

'use strict'

console.log(this);

