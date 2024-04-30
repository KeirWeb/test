// class Animal{
//   constructor(name){
//     this.name=name
//     this.speed=0

//   }
//   run(speed){
//     this.speed=speed
//     console.log(`${name} бежит со скоростью ${speed}!`);
//   }
//   stop(){
//     this.speed=0
//     console.log(`${name} остановился!`);
//   }
// }


// class Rabbit extends Animal{
//   constructor(name, earLength) {
//     super(name);
//     this.earLength = earLength;
//   } 
//    hide(){
//     console.log(`${this.name} прячется !`);
//   }
//   stop(){
//     super.stop()
//     this.hide()
//   }
// }

// const rabbit=new Rabbit('rabbit')

// console.log(Rabbit.prototype.__proto__);




//задачи


class Animal {

  constructor(name) {
    this.name = name;
		this.old=3
		this.old=5
  }

}

class Rabbit extends Animal {
  constructor(name) {
    super(name)
    this.name = name;
    this.created = Date.now();
  }
}

let rabbit = new Rabbit("Белый кролик"); // Error: this is not defined
alert(rabbit.name);


