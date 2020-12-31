// Coding Challenge 1
let markWeightOne = 78;
let markHeightOne = 1.69;
let johnWeightOne = 92;
let johnHeightOne = 1.95;

let markWeightTwo = 95;
let markHeightTwo = 1.88;
let johnWeightTwo = 85;
let johnHeightTwo = 1.76;

let bmiMarkOne = markWeightOne / (markHeightOne * markHeightOne);
let bmiJohnOne = johnWeightOne / (johnHeightOne * johnHeightOne);

let bmiMarkTwo = markWeightTwo / (markHeightTwo * markHeightTwo);
let bmiJohnTwo = johnWeightTwo / (johnHeightTwo * johnHeightTwo);

let markOneHigherBMI = bmiMarkOne > bmiJohnOne;
let markTwoHigherBMI = bmiMarkTwo > bmiJohnTwo;

// Coding Challenge 2
if (markOneHigherBMI) {
    console.log(`Mark's BMI (${bmiMarkOne}) is higher than John's (${bmiJohnOne})!`);
} else {
    console.log(`John's BMI (${bmiJohnOne}) is higher than Mark's (${bmiMarkOne})!`);
}
