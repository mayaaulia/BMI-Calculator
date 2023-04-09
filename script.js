const weightInput = document.querySelector(".weight-input-field");
const heightInput = document.querySelector(".height-input-field");
const calculateButton = document.querySelector(".calculate");
const result = document.querySelector(".bmi-result");
const statement = document.querySelector(".result-category");
let BMI = 0;
let weight = 0;
let height= 0;

calculateButton.addEventListener("click", () =>{
// console.log ("test")
weight = weightInput.value;
// console.log(weight)
height = heightInput.value;
// console.log(height)
let changetoMeter = height/100
BMI = weight/(changetoMeter**2);
let fixedBMI = BMI.toFixed(1) 
// console.log(BMI)
result.innerText = fixedBMI;

//category condition
if(BMI < 18.5){
    statement.innerText = "Underwight"
}else if((BMI > 18.5) && (BMI <= 24.9)){
    statement.innerText = "Normal"
}else if((BMI >= 25) && (BMI <= 29.9) ){
    statement.innerText = "Overweight"
}else if( BMI >= 30){
    statement.innerText = "Obesity"  
}

// switch(BMI){
//     case BMI < 18.5:
//         statement.innerHTML = "Underwight";
//     break;
//     case BMI > 18.5 && BMI <= 24.9:
//         statement.innerHTML = "Normal"  
//     break;
//     case BMI > 25 && BMI <= 29.9:
//         statement.innerHTML = "Overweight"
//     break;
//     case BMI >= 30:
//         statement.innerHTML = "Obesity" 
//     break;    
// }
});