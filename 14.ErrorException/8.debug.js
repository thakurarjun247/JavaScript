const str=`{"name""Yuvan"}`;

try {
  const object=JSON.parse(str);
  console.log("parsed successfully..");  
}
catch(err) {
console.log(err.name);
console.log(err.message);
  
}