//prerequisite:
// 1. run this on terminal: npm install node-fetch
// 2. create a file package.json with the content: 
//{  "type": "module"}

//why prerequistes?
//1. which is necessary because Node.js doesn’t have a built-in fetch API (as of now). Unlike browsers, which natively support fetch, you need to rely on third-party libraries like node-fetch in Node.js.
//2. The "type": "module" setting tells Node.js to treat all .js files in your project as ES modules (ECMAScript modules)
// Import node-fetch using ES module syntax
import fetch from "node-fetch";

// API for get requests
let fetchRes = fetch(
    "https://jsonplaceholder.typicode.com/todos/1");

    //more here: https://jsonplaceholder.typicode.com/posts/1
        
    // FetchRes is the promise to resolve
    // it by using.then() method
    fetchRes
    .then(res =>res.json())
    .then(d => console.log(d))
   