let instName="ioi";
console.log("hi"+instName);
console.log(`hi ${instName}`);

let colors = ["red", "green", "blue"];
let [first, second]=colors;
console.log(second);


let book = { title: "Atomic Habits", author: "James Clear", pages: 320 };
let {title, author}=book;
console.log(author);

//spread operator
let numbers1 = [1, 2, 3];
let numbers2 = [4, 5, 6];

let allNumbers = [...numbers1, ...numbers2];
console.log(allNumbers);

let product = { id: 101, name: "Laptop", price: 50000 };
const x=Object.entries(product); //object -> array


x.forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
  });


  let words = ["hello world", "good,morning"];
  //[“hello”, “world”]
  let splitWords = words.flatMap(sentence => sentence.split(","));
  
  console.log(splitWords); // Output: ["hello", "world", "good", "morning"]
  
