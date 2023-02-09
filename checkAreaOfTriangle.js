const input = document.querySelectorAll(".input-value");
const checkAreaButton = document.querySelector("#checkAreaBtn");
const output = document.querySelector("#output-area");


function areaOfTriangle(a , b){
    const calculatedArea  = 1/2*(a * b);
    return calculatedArea;
}

function calculateAreaOfTriangle(){
    const calculatedArea = areaOfTriangle(Number(input[0].value) , Number(input[1].value) );
    output.innerText = "The area of the Triangle is " + calculatedArea +"cm";

}

checkAreaButton.addEventListener("click" , calculateAreaOfTriangle)