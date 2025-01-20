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

    
    const textBoxes=document.querySelectorAll("[type='text']");
    textBoxes.forEach(textBox=> textBox.value="final text value");
}

//https://docs.google.com/document/d/1vVftGjWizypoeXWN2U4n2Mwgx5CwwFdU5hBnrqjMTpk/edit?tab=t.0