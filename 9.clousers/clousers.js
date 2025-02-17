function createSecretCode(secret) {
    let attempts = 0;
    const maxAttempts = 5;

    return function () {
        attempts++;
        if (attempts > maxAttempts) {
            console.log("Access Denied! Too many attempts.");
        } else {
            console.log(`Your secret code is ${secret} - Attempt #${attempts}`);
        }
    };
}
const getCode = createSecretCode("JSROCKS");

getCode(); // Output: "Your secret code is JSROCKS - Attempt #1"
getCode(); // Output: "Your secret code is JSROCKS - Attempt #2"
getCode(); // Output: "Your secret code is JSROCKS - Attempt #3"
getCode(); // Output: "Your secret code is JSROCKS - Attempt #4"
getCode(); // Output: "Your secret code is JSROCKS - Attempt #5"
getCode(); // Output: "Access Denied! Too many attempts."
