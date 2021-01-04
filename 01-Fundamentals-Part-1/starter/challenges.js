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

// Coding Challenge 3
const dolphinsAverage = (97 + 112 + 101) / 3;
const koalasAverage = (109 + 95 + 106) / 3;

if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
    console.log('Dolphins have won!')
} else if (koalasAverage > dolphinsAverage && koalasAverage >= 100) {
    console.log("Koalas have won!!")
} else if (dolphinsAverage === koalasAverage && dolphinsAverage >= 100 && koalasAverage >= 100) {
    console.log("It's a tie!")
} else {
    console.log('No one won!')
}

// Coding Challenge 4
const bill = 430;
const tip = bill >= 50 && bill <= 300 ? (bill * 0.2) : (bill * 0.15);
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}`);
