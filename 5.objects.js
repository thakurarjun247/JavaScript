let plant={};
plant.name="cactus";
console.log(plant);
console.log(plant["name"]);
delete plant.name;
console.log(plant);

let mango={
    "height of plant":40,
    "color": "Brown"
}
console.log(mango["height of plant"]);
let mangoCopy={...mango};
console.log(mangoCopy);
