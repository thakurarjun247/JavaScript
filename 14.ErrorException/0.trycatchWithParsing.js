const jsonString = `{
    "name": "Jasmine",
    "height": 20,
    "flowercolor: "white"
  }`;

function parseJSON(inputString){
    try{
    const plantObject=JSON.parse(inputString);
    }
    catch(error){
        console.log("json parse error");
    }
}

parseJSON(jsonString);


 //convert an object to a string
//const plantObject=JSON.parse(jsonString);
//console.log(plantObject.name);

//const stringRepresentation=JSON.stringify(JSON.parse(jsonString));
