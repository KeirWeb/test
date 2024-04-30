// 'use strict'

// console.log(this);

// function foo(){
// 	console.log(this);
// }
// foo()

// function foo(){
// 	 function foo2(){
// 		console.log(this);
// 	}
// 	foo2()
// }

// foo()

// const obj={
// 	name:'Kirill',
// 	sayThis(name,number){
// 		console.log(this.name);
// 		console.log(name);
// 		console.log(number);
// 	},
// 	sayThis2:()=>{
// 		console.log(this.name)
// 	}
// }

// const obj2={
// 	name:'Roma'
// }

// obj.sayThis.call(obj2,'Kirill2',123)
// obj.sayThis.call(obj,'Kirill2',123)
// obj.sayThis.call(obj2,'Kirill2',123)


obj.sayThis.bind(obj2,'Kirill',123).call(obj2,'Kirill2',123)