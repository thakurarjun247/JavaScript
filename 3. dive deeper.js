
//declaration syntax 
// <let/var> <arrayname> = [comma separated elements] <;>
let array;
array=[0,1,2,3]; 

console.log(array); 
//why does it print  (4) [0, 1, 2, 3]
//arrays are 0 indexed just like in Java
//Java script array can hold homogeneous or heterogeneous types of elements.

array.push(5);
console.log(array.pop(5));

console.log(array[10]);
console.log(array[-3]);


var a=[2,3,4];
a.unshift(-1,-2)

delete a[0];
console.log(a.concat(array));

let evenArray= [2,4,6,8];
let oddArray=[1, 3,5,7,9];
console.log(evenArray.some(item => item%8==0));//t
console.log(evenArray.some(item => item%10==0));//f
console.log(evenArray.every(item => item%2==0));//t
console.log(oddArray.every(item => item%2==0));//f
oddArray.copyWithin()

console.log();
console.log();
console.log();
let finalSum= evenArray.reduce((sum, currentItem)=>sum+currentItem, 0);
console.log(finalSum);
let arr = [1, 2, 3];
for(let item of arr){
    console.log(item);
}
let sumRight = arr.reduceRight((sum, currentItem) => sum + currentItem, 0);  // 6
console.log(sumRight);

 a = [3, 1, 5, 2]; 
for (item in a) 
{ console.log(item * item); }

for (item of a) 
{ console.log(item * item); }








