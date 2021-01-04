'use strict';

// Functions
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`
}

console.log(describeCountry('United States', 328, 'Washington, D.C.'));
console.log(describeCountry('Mexico', 126, 'Mexico City'));
console.log(describeCountry('Canada', 37, 'Ottawa'));

// Function Declarations vs. Expressions
function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

console.log(percentageOfWorld1(328));
console.log(percentageOfWorld1(126));
console.log(percentageOfWorld1(37));

const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
}

console.log(percentageOfWorld2(328));
console.log(percentageOfWorld2(126));
console.log(percentageOfWorld2(37));

// Arrow Functions
const percentageOfWorld3 = (population) => {
    return (population / 7900) * 100;
}

console.log(percentageOfWorld3(328));
console.log(percentageOfWorld3(126));
console.log(percentageOfWorld3(37));

// Functions Calling Other Functions
const describePopulation = (country, population) => {
    return `${country} has ${population} million people, which is about ${percentageOfWorld3(population)}% of the world.`
}

console.log(describePopulation('United States', 328));
console.log(describePopulation('Mexico', 126));
console.log(describePopulation('Canada', 37));

// Introduction to Arrays
const populations = [328, 126, 37, 66];
console.log(populations.length > 3)

const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];
console.log(percentages);

// Basic Array Operations (Methods)
const neighbours = ['Canada', 'Mexico'];
neighbours.push('Utopia');
neighbours.pop();
console.log(neighbours);

if (!neighbours.includes('Germany')) {
    console.log('Probably not a central European country :D')
};

neighbours[0] = 'Dominion of Canada';
console.log(neighbours);

// Introduction to Objects
const myCountry = {
    country: 'United States',
    capital: 'Washington, D.C.',
    language: 'English',
    population: 328,
    neighbours: ['Canada', 'Mexico']
};

// Dot vs. Bracket Notation
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`)

myCountry.population += 2;
myCountry['population'] -= 2;

// Object Methods
myCountry.describe = function () {
    console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`)
}
myCountry.describe();
myCountry.checkIsland = function () {
    return this.neighbours === 0 ? true : false
};
console.log(myCountry.checkIsland());

// Iteration: The for Loop
for (let i = 0; i < 51; i++) {
    console.log(`Voter number ${i} is currently voting`)
};


// Looping Arrays, Breaking and Continuing
let percentages2 = [];
for (let i = 0; i < populations.length; i++) {
    const percent = percentageOfWorld1(populations[i]);
    percentages2.push(percent);
};

console.log(percentages2);

// Looping Backwards and Loops in Loops
const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
for (let i = 0; i < listOfNeighbours.length; i++) {
    for (let y = 0; y < listOfNeighbours[i].length; y++) {
        console.log(`Neighbour: ${listOfNeighbours[i][y]}`)
    }
};

// The while Loop
let percentages3 = [];
let i = 0;
while (i < populations.length) {
    const percent = percentageOfWorld1(populations[i]);
    percentages3.push(percent);
    i++;
}

console.log(percentages3);