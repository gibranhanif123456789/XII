let variableLet = "Ini variabel let";
const variableConst = "Ini variabel const";

const arrowFunction = (param1, param2) => param1 + param2;
console.log(arrowFunction(5, 3));

let nama = "John";
let usia = 25;
let greeting = `Hello, my name is ${nama} and I am ${usia} years old.`;
console.log(greeting);

let [a, b, c] = [1, 2, 3];
console.log(a, b, c);
let person = { name: "Jane", age: 30 };
let { name, age } = person;
console.log(name, age);