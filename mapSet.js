// function unique(arr) {
// 	return  Array.from(new Set(arr))
//   /* ваш код */
// }

// let values = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// console.log( unique(values));




// function aclean(arr) {
//   let map = new Map();

//   for (let word of arr) {
//     // разбиваем слово на буквы, сортируем и объединяем снова в строку
//     let sorted = word.toLowerCase().split("").sort().join(""); // (*)
//     map.set(sorted, word);
//   }

//   return Array.from(map.values());
// }

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// alert( aclean(arr) );



// let map = new Map();

// map.set("name", "John");

// let keys = Array.from(map.keys());

// keys.push("more");

// alert(keys); // name, more


let map =new Map()

map.set(NaN,'hello')
map.set('sadsd','hello')
map.set(1,'hello')

// console.log(map);

// for(a of map){
// 	console.log(a);
// }

// console.log(map.entries());

// let set = new Set()

// set.add('asdas')
// set.add('sfsdf')
// set.add(2)



// // console.log(set);
// for  ( a of set){
// 	console.log(a);
// }