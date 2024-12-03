console.log(Date());
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
When to Use Which:

Use let in most cases (similar to java variables)
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
console.log(typeof(10)); //number


