function changeColor(){
    document.getElementById("mydiv").style.color="red";
}

const anotherdiv=document.querySelector("#anotherdiv");
anotherdiv.addEventListener(
    'click',
    ()=>anotherdiv.style.color="blue"
    );
