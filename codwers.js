const map =new Map()

map.set('name','Kirill')
map.set('age','23')
map.set('fff','k')


// console.log(map);

// map.forEach((i)=>console.log(i))


const set= new Set()

set.add('name','Kirill')
set.add('age','23')
set.add('fff','k')

// console.log(set);



for(let key of map){
  console.log(key);
}



// let arr = [`a`, `b`, `c`, `d`, `e`];

// for (elem in arr) {
// 	console.log(elem); // 0 1 2 3 4
// }

// for (elem of arr) {
// 	console.log(elem); // a b c d e
// }

// for (let iter = arr[Symbol.iterator]; iter.done;) {
// 	console.log(iter.next()); // a b c d e
// }