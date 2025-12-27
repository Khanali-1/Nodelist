// nodelist whenever a select a multiple elemment from a web page using document .queryselectorall method 
// it return a node list and node list accept foreach method ;


const button =document.querySelectorAll(".button");

button.forEach(button=>{
    button.addEventListener("click", (e)=>{
        e.target.classList.add("color");
    })

})