function doubleIt(x){
    return 2*x;
}
const doubleUsingAnonymousLambda=(x)=>2*x;
console.log(doubleIt(2));
console.log(doubleUsingAnonymousLambda(5));




const executorFunction=(xyz, abc)=>{
    let isFulfilled=true;
    if(isFulfilled)
        xyz("it's resolved");
    else
        abc("it's rejected")

}
let myPromise= new Promise(executorFunction);
myPromise
.then((message)=>console.log(message))
.catch((message)=>console.log(message))
.finally(()=>console.log("finally always printed"))

