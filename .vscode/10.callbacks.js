function functionThatAcceptsAnotherFunction(argument){
    console.log("functionThatAcceptsAnotherFunction...");
    argument();
}


function callback(){
    console.log("functionPassedAsArgument...");
    
}

functionThatAcceptsAnotherFunction(callback);
