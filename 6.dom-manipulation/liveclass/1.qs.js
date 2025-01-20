function clickFun(){
    //find the element by id
    const element=document.querySelector("#text");
    //change the value
    element.value="I clicked it";
   // document.getElementById("text").value="clicked";
}
function selectFirstMovie(){
   const element =  document.querySelector(".movie");
   element.style.color="red";
}

function selectAllMovies(){
    const elements=document.querySelectorAll(".movie");
    elements.forEach(element=> {
        element.style.color="blue";
        element.style.fontSize=25;
    });
}