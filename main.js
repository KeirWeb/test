const students = [
  {
    name: "Bob",
    age: 22,
    isMarried: true,
    scores: 85,
  },
  {
    name: "Alex",
    age: 21,
    isMarried: true,
    scores: 89,
  },
  {
    name: "Nick",
    age: 20,
    isMarried: false,
    scores: 120,
  },
  {
    name: "John",
    age: 19,
    isMarried: false,
    scores: 100,
  },
];

const slice = (array, start = 0, end = array.length) => {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(array[i]);
  }
  return result;
};

const MyShift = (array) => {
  const el = array[0];
  return el;
};

const testArray = ["fff", "ada"];
testArray.map = "hello";
console.log(testArray);
const newArray = testArray.map((i) => i + "new");

const array = [];
array.map = function () {
  console.log(hello);
};

array.map(array.prototype);
