function devide1(a,b){
    console.log(a/b);
}
console.log("there..");
devide1(3,0);//infinity
devide1(3,3); //1

function devideWithErrorHandling(a,b){ //
    try {
         if(b==0)
            throw new Error("can't devide by zero");//3,0
        console.log(a/b);
    } catch (error) {
        console.log(error);
    }
}

devideWithErrorHandling(3,0); //
devideWithErrorHandling(3,3);


