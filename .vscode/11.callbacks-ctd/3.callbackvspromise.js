
setTimeout(() => console.log("I will visit your place, callback"), 3000);

let myPromise = new Promise((resolve, reject) => {
    let success = true; // Change to `false` to test the failure condition
    setTimeout(() => {
      if (success) {
        resolve("I will visit your place");
      } else {
        reject("Sorry, I can't make it");
      }
    }, 3000);
  });
  
  myPromise
    .then((value) => console.log(value)) // Success case
    .catch((error) => console.error(error)); // Failure case
  