function qsById(){
      //select by id
    //syntax : document.querySelector("#id");
    const element=document.querySelector("#one");
    //manipulate
    element.textContent="changed by JS QS";
     // Change text color
     element.style.color = "blue";
    //try out changing more styles.
}
function qsByClassFirst(){
    //select only first element of the given class movie
        //syntax : document.querySelector(".class");

    const element=document.querySelector(".movie");
    element.style.color="red";
}
function qsByClassAll(){
    //select all the element of the given class movie
    const elements=document.querySelectorAll(".movie");
    elements.forEach(element=>
        element.style.color="red"
    );
}

function selectByType(){
    const buttons=document.querySelectorAll("[type='text']");
    buttons.forEach(button=> button.value="final text value");
}