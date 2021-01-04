'use strict';

// Scope
/*
function calcAge(birthYear) {
  const age = 2021 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}.`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const str = `Oh, and you're a millenial, ${firstName}.`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      output = 'NEW OUTPUT!';
    }
    // console.log(str); - const and let variables are block scoped so it can't see this
    console.log(millenial); // bc this is var it can be seen outside block (function scoped)
    // add(2, 3); - won't work bc this was defined in the if block - FUNCTIONS ONLY BLOCK SCOPED IN STRICT MODE! (if not in strict mode, this would work)
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Erica';
calcAge(1990);
*/

// Hoisting
/*
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Erica';
let job = 'attorney';
const year = 1990;

console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

if (!numProducts) deleteShoppingCart();
var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}
*/

// Regular vs. Arrow Functions
/*const erica = {
  firstName: 'Erica',
  year: 1990,
  calcAge: function () {
    console.log(this);
    console.log(2021 - this.year);
  },
  greet: function () {
    console.log(`Hey ${this.firstName}`);
  },
};

erica.greet();
*/
// Primitives vs. Objects
/* let age = 30;
let oldAge = age;
age = 31;
console.log(age); // 31
console.log(oldAge); // 30

const me = {
  name: 'Erica',
  age: 30,
};

const friend = me;
friend.age = 27;
console.log('Friends:', friend); // 'Erica', 27
console.log('Me:', me); // 'Erica', 27
*/

// Primitives vs. Objects
let lastName = 'Brunt';
let oldLastName = lastName;
lastName = 'Leff';
console.log(lastName, oldLastName);

const erica = {
  firstName: 'Erica',
  lastName: 'Brunt',
  age: 30,
};

const marriedErica = erica;
marriedErica.lastName = 'Leff';
// changes erica.lastName to 'Leff' as well

// Copying Objects
const erica2 = {
  firstName: 'Erica',
  lastName: 'Brunt',
  age: 30,
};

const ericaCopy = Object.assign({}, erica2);
ericaCopy.lastName = 'Leff';
console.log(erica2, ericaCopy);
// Object.assign only creates a shallow copy (first level properties), not a deep clone (arrays, objects, etc. still point to originals)
