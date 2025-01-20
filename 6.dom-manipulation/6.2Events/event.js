const divElement=document.getElementById("divid");
const textBoxElement=document.querySelector("#text");

divElement.setAttribute('tabindex', '0');


divElement.addEventListener(
    'mouseenter',
     ()=>{
        divElement.innerHTML="you moved your mouse over the div element";
    divElement.style.color="red";
    }
);


divElement.addEventListener(
    'mouseleave', ()=>{
        divElement.innerHTML="you moved mouse away";
        divElement.style.color="green";
    }
);



divElement.addEventListener(
    'click', ()=>divElement.innerHTML="you clicked"
);


textBoxElement.addEventListener(
    'keydown', (event)=>{
        
        textBoxElement.value="you pressed:  " + event.key;
 
    }
);