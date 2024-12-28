let a=[1,2,3,4,5,6,7];
let doubleOfA=[];
for(let i=0;i<a.length;i++)
   console.log(a[i]);
a.forEach(arrayElement => console.log(arrayElement));
//map
for(let i=0;i<a.length;i++)
   doubleOfA.push(2*a[i]);
let doubleOfAUsingMap=a.map(item=>2*item);
let multiplesOfThree=a.filter(item=>item%3==0);
let newArray=[ 3,6,5,10,43,15];
//print sum of cubes of the items which are multiples of 5
let finalArray=newArray
   .filter(item => item%5==0)
   .map(item => item*item*item);
console.log(finalArray);


// let sum=0;
// finalArray.forEach(item=>sum+item);

//Math.pow(item,3);
   


let user = {


   "name": "Ram",
  
   "hobbies": ["coding", "playing"],
   married: false,
   age: 26,
   address: "delhi",
   gender: "male"
   
   };

let stringFormat = JSON.stringify(user);
console.log(stringFormat);

console.log(JSON.parse(stringFormat));


let loop=0;
for(loop=0;loop<3;loop++){
   switchloop(loop);
   console.log("for");
   
}
while(loop<5){
   switchloop(loop);
   console.log("while");
   loop++;
}
function switchloop(loop){
switch (loop){
   case 1: console.log("one"); break;
   case 2: console.log("two"); break;
   default: case 1: console.log("default"); 
}
}


   let plant={};
plant.height=6;

console.log("see..");
//console.log(user[hobbies[0]]);   
console.log(user.hobbies[0]);
console.log(user["age"]);
console.log(user.age);

console.log();

   a.forEach(item => console.log(item) );
   a.filter(item => item%3==0).forEach(item=>console.log(item*item));
   let cubes = a.map(arrayElement=>arrayElement*arrayElement*arrayElement);
console.log("cubes:"+cubes);

const t=true;
const f=false;
console.log(t && t);
console.log(t && f);
console.log(t || t);
console.log(t || f);

my_undefined=10;
let my_null=null;
console.log(my_undefined);
console.log(my_null);

console.log(Date());
console.log("test");
//JavaScript Variables can be declared in 4 ways:
/*
Automatically
Using var
Using let
Using const
*/

automatic_variable=45;

/*
The var keyword was used in all JavaScript code from 1995 to 2015. 
The var keyword should only be used in code written for older browsers.
Only use var if you MUST support old browsers.

The let and const keywords were added to JavaScript in 2015.
Use let in most cases (similar to java/C variables)
Variables declared with let have Block Scope
Variables declared with let must be Declared before use
Variables declared with let cannot be Redeclared in the same scope

const
Variables defined with const cannot be Redeclared
Variables defined with const cannot be Reassigned
Variables defined with const have Block Scope

*/


let name="Arjun";
let number=5;
let anotherNumber=0;

const myconst=10;
//myconst++;
console.log(myconst);
console.log(number*anotherNumber);


//operators: mostly simialar to java, some are extras as below:
/*          **  Exponentiation  	
            ===	equal value and equal type
            !==	not equal value or not equal type
*/
//Adding two numbers, will return the sum, but adding a number and a string will return a concatenated string:
console.log(typeof(10));
 //number


 a.forEach(element => console.log(element));
 for(let i=0;i<a.length;i++){
    a[i]*=2;
 }
a.filter(item => item%2==1)

console.log(typeof(2.3));
console.log(typeof(true));




