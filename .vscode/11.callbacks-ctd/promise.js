// Create a new promise
let myPromise = new Promise((resolve, reject) => {
    let isFulfilled = true;
  
    if (isFulfilled) {
      resolve("fulfilled!");
    } else {
      reject("not fulfilled");
    }
  });


  // Handling the promise with .then() and .catch()
  myPromise
    .then((message) => {
      console.log("Success:", message); // Will log this if the promise is resolved
    })
    .catch((error) => {
      console.log("Error:", error); // Will log this if the promise is rejected
    });
  