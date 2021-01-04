// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const x = 23;
if (x === 23) console.log(23);

const calcAge = birthYear => 2021 - birthYear;
console.log(calcAge(1990));

// Using Google, StackOverflow and MDN
const calcTempAmplitude = function (t1, t2) {
  const temps = t1.concat(t2);
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  return max - min;
};

const amplitude = calcTempAmplitude([3, 5, 1], [9, 0, 5]);
console.log(amplitude);

// Coding Challenge 1
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = arr => {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]} degrees Celsius in ${i + 1} days ... `;
  }
  console.log(str);
};

printForecast(data1);
printForecast(data2);
