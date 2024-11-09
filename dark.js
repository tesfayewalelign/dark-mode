const inputE1=document.querySelector(".hello");
const bodyE1=document.querySelector("body");


inputE1.checked=false;
            
               tes()


function tes(){
    if(inputE1.checked){
        bodyE1.style.background="black"
        

    }
    else{
        bodyE1.style.background="white"
    }

}
inputE1.addEventListener("input",()=>{
    tes()
})