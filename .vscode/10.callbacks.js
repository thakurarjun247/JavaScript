function functionThatAcceptsAnotherFunction(argument){
     
    console.log("functionThatAcceptsAnotherFunction...");
    argument(); //calling back..
  
}


function callback(){
    console.log("functionPassedAsArgument...");
    
}

functionThatAcceptsAnotherFunction(callback);
