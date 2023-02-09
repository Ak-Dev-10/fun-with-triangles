const angleInputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const output = document.querySelector("#output");


function calculateSumOfAngles(angle1 , angle2 , angle3){
    const sumOfAngles = angle1 + angle2 + angle3;
    //console.log(sumOfAngles);
    return sumOfAngles;
}


function isTriangle(){
    const sumOfAngles =  calculateSumOfAngles(Number(angleInputs[0].value) , Number(angleInputs[1].value) , Number(angleInputs[2].value));
    //typecasting to number since input[0].value is a string
    //console.log(angleInputs[0].value, angleInputs[1].value, angleInputs[2].value)
    if(sumOfAngles === 180){
        output.innerText = "The angles you entered form a triangle";
    }
    else{
        output.innerText = "YOU WENT A BIT WRONG !!! The angles dont form a triangle";
    }
}

isTriangleBtn.addEventListener("click" , isTriangle)