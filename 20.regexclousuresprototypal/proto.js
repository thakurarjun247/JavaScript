const parent = { greet
    : function hello() { console.log("Hello!"); } 
};
const child = Object.create(parent); // child inherits from parent
child.greet(); // Output: "Hello!"
