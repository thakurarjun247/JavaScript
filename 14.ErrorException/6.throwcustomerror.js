// Define a custom error class
class DuplicateEmailError extends Error {
    constructor(message) {
        super(message); // Call the parent class constructor
        this.name = "DuplicateEmailError"; // Set the error name
    }
}

const email="yuvan@gmail.com";
try{
    //fetch list of existing emails from db
    if(email=="yuvan@gmail.com")
        {
            throw new DuplicateEmailError("choose another email");
        }
}
catch(err){
    console.log(err.name);
    console.log(err.message);
} 


