//functions
callElectrician();
console.log(sum(2,4));

function callElectrician(){
    console.log("shows up to your place");
    console.log("install a TV");
}

function sum( x, y){
return x+y;
}

//classes and objects
class User{}
const user= new User();
console.log(user instanceof(User)); //true
class Plant{
    //notice the keyword constructor
    constructor(height, color){
        this.color=color;
        this.height=height;
    }
    //method syntax: name and ()
    //unlike functions there is no function keyword
    mymethod(x, y){
        return x*y;
    }
}
//create object using const or let
let plant = new Plant(11, "red");
console.log(plant.color);
console.log(plant.mymethod(4,5))
