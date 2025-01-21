function functionThatAcceptsAnotherFunction(callback) {
    console.log("functionThatAcceptsAnotherFunction...");
    
    // Add a sleep for 5000 ms and then call the callback
    setTimeout(() => {
        callback();
    }, 5000);
}

function callback() {
    console.log("call back...");
}

functionThatAcceptsAnotherFunction(callback);







