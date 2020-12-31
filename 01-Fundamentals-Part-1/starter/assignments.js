// Values and Variables
const country = 'United States';
const continent = 'North America';
let population = 328;
console.log(country);
console.log(continent);
console.log(population);

// Data Types
const isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// let, const and var
language = 'English';

// Basic Operators
console.log(population / 2);
console.log(population + 1);
console.log(population > 6);
console.log(population < 33);
let description = 'United States is in North America and its 328 million people speak English.';

// Strings and Template Literals
description = `${country} is in ${continent} and its ${population} million people speak ${language}.`
console.log(description);

// Taking Decisions: if/else statements
if (population > 33) {
    console.log(`${country}'s population is above average.`)
} else {
    console.log(`${country}'s population is ${33 - population} million below average.`)
};

// Type Conversion and Coercion
console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);

