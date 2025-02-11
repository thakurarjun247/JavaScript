let instName="ioi";
console.log("hi"+instName);
console.log(`hi ${instName}`);

let colors = ["red", "green", "blue"];
let [first, second]=colors;
console.log(second);


let book = { title: "Atomic Habits", author: "James Clear", pages: 320 };
let {title, author}=book;
console.log(author);
let numbers1 = [1, 2, 3];
let numbers2 = [4, 5, 6];

let allNumbers = [...numbers1, ...numbers2];
console.log(allNumbers);
let product = { id: 101, name: "Laptop", price: 50000 };
const x=Object.entries(product);

x.forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
  });


