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
language = 'english';

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

// Equality Operators: == vs. ===
/* const numNeighbors = Number(prompt('How many neighbor countries does your country have?'));

if (numNeighbors === 1) {
    console.log('Only one border!')
} else if (numNeighbors > 1) {
    console.log('More than 1 border')
} else {
    console.log('No borders')
}
*/

// Logical Operators
if (language === 'english' && population <= 50 && isIsland === false) {
    console.log(`You should live in ${country} :)`)
} else {
    console.log(`${country} does not meet your criteria :(`)
}

// The switch Statement
switch (language) {
    case 'chinese':
        console.log('MOST number of native speakers!');
        break;
    case 'mandarin':
        console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        'Great language too :D';
}

// The Conditional (Ternary) Operator
console.log(`${country}'s population is ${population > 33 ? 'above' : 'below'} average`);