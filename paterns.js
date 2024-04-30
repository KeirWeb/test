//pab-sub
// class GlobalClock {
//   time = 0;
//   subscribers = [];
//   constructor() {
//     setInterval(() => {
//       this.time++;
//       console.log(this.time);
//       this.subscribers.forEach((el) => el.render(this.time));
//       // clock1.render(this.time);
//     }, 1000);
//   }
//   subscribe(el) {
//     this.subscribers.push(el);
//   }
// }
// const globalClock = new GlobalClock();

// class Clock1 {
//   el = document.createElement("div");

//   render(time) {
//     this.el.innerHTML = time;
//     document.body.appendChild(this.el);
//   }
// }

// const clock1 = new Clock1();
// globalClock.subscribe(clock1);

// class Clock2 {}

//singletone

// class Api {
//   static singletone = null;
//   constructor() {
//     if (Api.singletone !== null) {
//       return Api.singletone;
//     } else {
//       Api.singletone = this;
//     }
//   }
//   getUser() {
//     console.log("get");
//   }
//   createUser() {
//     console.log("set");
//   }
// }

// const api = new Api();

// const api2 = new Api();

// api.createUser();
// api2.createUser();
// api2.createUser();
// api.createUser();
// ap2.createUser();

///proxi

const _a = {
  say(message) {
    console.log(message);
  },
};

const a = {
  say(message) {
    if ((message = "fuck")) message = "f***";
    _a.say(message);
  },
};
