function functionThatAcceptsAnotherFunction(argument){
    console.log("functionThatAcceptsAnotherFunction...");
    argument();
}


function functionPassedAsArgument(){
    console.log("functionPassedAsArgument...");
    
}

functionThatAcceptsAnotherFunction(functionPassedAsArgument);
