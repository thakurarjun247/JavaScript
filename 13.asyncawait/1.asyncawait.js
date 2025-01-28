function getData() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log("Getting some data...");
            res(200);
        }, 2000)
    });
}


async function result() {
    const data  = await getData();
    // storing the promise value in data, whether resolved or rejected
    console.log("Resolved value:", data);
    console.log("Second Line");
}


console.log("First Line");
result();
console.log("Third Line");