const jsonString = `{
    "name": "Jasmine",
    "height": 20,
    "flowercolor": "white"
  }`;

//const plantObject=JSON.parse(jsonString);
//console.log(plantObject.name);

function parseJSON(inputString){
    try{
    const plantObject=JSON.parse(inputString);
    }
    catch(error){
        console.log("json parse error");
    }
}

parseJSON(jsonString);

